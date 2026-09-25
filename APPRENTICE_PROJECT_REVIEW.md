# Updated Apprentice Project Review

**Reviewed:** 20 September 2026  
**Revision reviewed:** `origin/main` at commit `299f9ac`  
**Project:** Cafe Cracher website and reservation system

## Overall assessment

Aleks has made clear and meaningful progress. The project is no longer simply a collection of static pages: it now includes a responsive website, a reservation workflow, PostgreSQL persistence with Prisma, server-side validation, customer notifications, a protected admin area, booking management, filtering, CSV export, and initial automated tests.

Most importantly, several points from the previous review were addressed:

- The recursive copies under `web/` and `web/web/` were removed.
- Secrets were removed from the current source code and an `.env.example` was added.
- The development database is no longer tracked.
- The booking list and CSV endpoint now perform an authorization check.
- Validation and availability logic were extracted into dedicated modules.
- TypeScript types and the first tests were introduced.
- The form now has submission, error, and double-click protection.
- Lint, TypeScript, and the production build now pass.

This is good progress and shows that Aleks can respond to feedback and work across the frontend, backend, database, and deployment layers.

The next stage should focus less on adding pages and animations and more on correctness, security, reliable tests, and maintainable architecture. That is the transition from building an impressive prototype to building dependable software.

## Verification results

| Check | Result |
| --- | --- |
| Dependency installation | Pass, but reports security advisories |
| `npm run lint` | Pass |
| `npx tsc --noEmit` | Pass |
| `npm run build` | Pass |
| Unit tests | 5 pass, 2 fail |
| Prisma schema validation | Pass with a supplied `DATABASE_URL` |
| Production dependency audit | 2 high-severity findings through `react-router-dom` |

The green build is an important achievement. However, the type-check currently provides limited protection because most of the important booking and authentication code is still JavaScript, and `checkJs` is not enabled.

## What is going well

### Strong full-stack ambition

The reservation workflow is a substantial project for an apprentice. It connects UI state, server actions, API routes, database queries, email, Telegram notifications, authentication, and an admin interface.

### Better separation of concerns

Creating `src/features/booking/lib/validation.ts`, `availability.ts`, `types.ts`, and corresponding test files is the right architectural direction. Business rules are beginning to move away from large UI components.

### Improved user experience

The reservation form now prevents accidental double submission, shows a loading state, catches unexpected errors, and reports the server result. Admin filtering, counters, confirmation dialogs, and automatic refresh also show good product awareness.

### Better repository hygiene

Removing the duplicated applications and tracked database reduced the repository from more than 500 tracked files to roughly 150. This is a significant improvement.

## Highest-priority rework

### 1. Replace the forgeable admin session

The current authorization mechanism is not secure enough for customer data.

After a correct password is entered, the server sets:

```text
admin_token=true
```

The API and proxy then trust that exact value. `httpOnly` prevents page JavaScript from reading the cookie, but it does not prove that the value was created by the server. A caller can send the same cookie manually.

There is also a fail-open problem: if `ADMIN_PASSWORD` is missing and the request body does not contain a password, both values can be `undefined`, which may allow login.

Rework this by:

- Refusing to start or authenticate when `ADMIN_PASSWORD` or the session secret is missing.
- Creating a signed, unpredictable, expiring session.
- Setting `secure` in production, `sameSite`, `httpOnly`, a sensible expiration, and a narrow cookie scope.
- Adding basic login rate limiting.
- Checking authorization inside every sensitive route and server action.
- Validating that `updateBookingStatus` receives only `confirmed` or `cancelled`.
- Returning a consistent unauthorized result instead of relying only on the proxy.

The existing `AllowedStatusUpdate` type is a good start, but it is not yet used at runtime.

The old credentials also remain in Git history. If they have not already been revoked and regenerated, that still needs to happen. Removing a secret from the latest file does not invalidate the old credential.

### 2. Fix booking validation before trusting it

The new validation module is a good idea, but it currently contains important logic errors.

In particular:

- The time-format check is placed after an unconditional `return`, so it can never run.
- Any non-empty time can currently pass the server validation.
- The server does not restrict times to the actual opening-hour slots.
- `parseInt` accepts partial input such as `4abc` and truncates decimal input.
- `NaN` is not explicitly rejected.
- Dates such as `2026-09-31` are accepted because JavaScript normalizes them.
- The email validation only checks whether `@` and `.` occur somewhere.
- A reservation for today can still submit a past time by bypassing the browser.
- `isDayAvailable` was implemented but is not used.
- Input is not consistently trimmed or normalized.

The server should accept an unknown input, parse it deliberately, and return a typed validated result. A schema library such as Zod would be useful here, although carefully written manual validation is also suitable for learning.

### 3. Guarantee that duplicate bookings cannot happen

The application currently checks availability and then inserts a booking in two separate operations:

```text
check slot -> create booking
```

Two simultaneous requests can both see the slot as free and both insert it. This is a classic race condition.

The database, not only the application code, should guarantee the rule. Use a transaction and an appropriate unique constraint or active-slot key. Add a concurrency test demonstrating that only one of two simultaneous attempts succeeds.

There is also a product-design inconsistency: the form permits only one reservation for each hourly slot across the whole restaurant. This means a restaurant with many tables can accept only one group at 19:00. At the same time, the code defines a daily maximum of 20 bookings, although the UI exposes only 13 hourly slots.

That model should eventually become capacity-based rather than treating the entire restaurant as one table.

### 4. Make the tests reliable

The initial tests are a valuable step, but the test command currently fails:

- Five validation tests pass.
- Both availability tests fail because `DATABASE_URL` is missing.

Those availability tests also depend on the contents of a real database. A booking added for `2099-12-31` would unexpectedly break them.

The validation tests use the impossible date `2026-09-31`, and their result changes as the real calendar advances. This makes them time-dependent.

Recommended rework:

- Freeze the clock in validation tests.
- Use valid fixed dates.
- Mock or inject the booking repository for unit tests.
- Use a separate disposable test database for integration tests.
- Test occupied, cancelled, duplicate, full-day, and database-error cases.
- Add cases for `NaN`, decimals, invalid dates, unsupported times, whitespace, and overly long input.
- Add `test:ci` using `vitest run`.
- Add a `check` script that runs lint, types, tests, and build.
- Run that command in GitHub Actions for every pull request.

### 5. Complete the PostgreSQL migration

The schema now uses PostgreSQL, but no migration files are committed and `.env.example` does not include `DATABASE_URL`. A new developer therefore cannot reproduce the database from the repository.

Add:

- `DATABASE_URL=` to `.env.example`.
- A proper initial Prisma migration.
- Documented migration and seed commands.
- Optional local development setup, for example with Docker Compose.
- Seed data that contains no real customer information.

The dependency versions should also be aligned. The project currently mixes Prisma 5 packages with `@prisma/config` 7, Next 16 with `eslint-config-next` 15, and removed Storybook files with remaining Storybook scripts and dependencies.

### 6. Repair CSV export

The CSV exporter uses `/n` rather than the newline character `\n`, so the file will not contain proper rows. Values are also not escaped.

A correct CSV helper should:

- Produce real line breaks.
- Quote commas, quotes, and line breaks.
- Escape quotes correctly.
- Protect spreadsheet users from formula injection.
- Use a predictable date format.
- Be covered by focused tests.

### 7. Improve admin reliability

The admin interface has useful features, but several implementation details need attention:

- The date sorter does not return the date comparison, so bookings with different dates are not sorted correctly.
- Loading is set after the request finishes instead of before it begins.
- Failed requests and `401` responses are not handled.
- The first load can play the "new reservation" sound for existing bookings.
- Confirmation and cancellation buttons have no pending or error state.
- The dialog closes before the mutation has completed.
- "Show all" is not true pagination; the API loads every booking into the browser.
- The layout uses large fixed minimum widths and padding, making the admin page difficult on small screens.

Implement server-side pagination, explicit loading/error/empty states, and status-update feedback.

## Accessibility and frontend improvements

Accessibility should now become part of normal component development.

Important examples include:

- Change `<html lang="en">` to the language that represents the main content, probably `de`.
- Use real `<label>` elements for reservation fields.
- Give icon-only slider and navigation buttons accessible names.
- Add `aria-expanded` and `aria-controls` to expandable navigation buttons.
- Make desktop menus usable with the keyboard rather than only on hover.
- Give the confirmation modal dialog semantics, focus management, Escape handling, and focus restoration.
- Replace clickable headings in the accordion with buttons.
- Respect `prefers-reduced-motion`.
- Use a sensible heading hierarchy instead of many `<h1>` elements.
- Announce booking success and errors using an accessible live region.

The form should also stop using global `document.querySelector` calls. A form ref, controlled fields, or React's form APIs would avoid accidentally reading or resetting another form on the page.

## Maintainability and project cleanup

A number of files remain very large: some pages exceed 600 lines, the navigation exceeds 400 lines, and the reservation form exceeds 300 lines.

Recommended cleanup:

- Define navigation data once and render desktop and mobile variants from it.
- Extract reusable sections and content data from the largest pages.
- Move notification delivery and email templates out of server actions.
- Replace the hard-coded local IP address in confirmation email HTML with a configured public site URL.
- Rename `PoginationBooking.jsx` to `PaginationBooking.jsx`.
- Remove experimental public routes such as `/trying` and `/chevron` if they are no longer part of the product.
- Remove unused components and dependencies.
- Remove the tracked `.DS_Store`.
- Remove `react-router-dom` because Next.js routing is used and the package currently introduces high-severity production advisories.
- Either restore Storybook intentionally or remove its remaining scripts, plugin, and packages.
- Keep source comments focused on why the code exists. PR history such as "NEW PR4" belongs in pull-request descriptions, not long-term source comments.
- Use consistent language for German customers, English code identifiers, and internal developer documentation.

The README still contains only repeated project names. It should explain installation, required Node version, environment variables, database setup, migrations, testing, building, architecture, and known limitations.

## Best feature to implement next

After the security and correctness work, the best next feature would be a **real capacity-based reservation engine**.

A possible model would introduce restaurant tables or capacity groups:

```text
RestaurantTable
- id
- name
- capacity
- active

Booking
- guests
- startsAt
- endsAt
- tableId
- status
```

When a customer requests a time, the server should atomically choose an available table large enough for the party without overlapping an active reservation.

This teaches several valuable professional concepts together:

- relational database modelling;
- migrations and foreign keys;
- date, time, duration, and timezone handling;
- overlap calculations;
- transactions and concurrency;
- domain-focused TypeScript;
- unit and integration testing;
- useful error messages;
- admin rescheduling and table assignment.

It is a more valuable next step than adding another marketing page because it improves the central business capability of the application.

## Recommended pull-request sequence

### Pull request 1: Security

Implement signed sessions, fail-closed configuration, server-action authorization, status validation, secure cookies, rate limiting, and credential rotation.

### Pull request 2: Booking correctness

Rewrite input parsing and validation, enforce opening hours, fix same-day time rules, add a database uniqueness guarantee, and separate notification failures from persistence results.

### Pull request 3: Database and tests

Commit PostgreSQL migrations, add test infrastructure, freeze time in tests, cover failure cases, and make `npm run check` pass.

### Pull request 4: Admin quality

Fix sorting and request handling, add mutation states, implement true pagination, repair CSV export, and improve the responsive layout.

### Pull request 5: Accessibility and cleanup

Correct labels, menus, dialogs, headings, language metadata, reduced-motion behaviour, dead routes, dependencies, naming, and documentation.

### Pull request 6: Capacity-based reservations

Introduce tables, reservation duration, atomic assignment, and administrator rescheduling.

## Definition of done for future work

A feature should be considered complete when:

- Its expected behaviour and edge cases are written down.
- All external input is parsed and validated on the server.
- Sensitive operations perform their own authorization checks.
- The database protects important invariants.
- Loading, empty, success, and failure states are present.
- Important business rules have reliable tests.
- Accessibility is checked with keyboard navigation.
- Lint, type-checking, tests, and build all pass.
- Setup or behaviour changes are documented.
- The pull request explains what changed and why.

## Final note to Aleks

Aleks, you have made real progress and clearly acted on the earlier feedback. Cleaning the repository, removing current-source secrets, introducing validation and tests, and getting the build green are meaningful achievements.

Your next learning step is to make the software prove that it is correct. Concentrate on an authentication token that cannot be forged, validation that cannot be bypassed, database rules that prevent double bookings, and tests that run successfully on every machine. Once those foundations are dependable, the capacity-based reservation feature will take the project from an ambitious prototype to a system you can confidently demonstrate, explain, and continue developing.
