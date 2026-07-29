'use server'

import prisma from '@/app/booking/lib/prisma'

const MY_EMAIL = 'alexkalesnikevich@gmail.com'
const RESEND_KEY = process.env.RESEND_KEY || 're_jbrcMM7v_6Zmmeuy5KSuGm845ExGXFfnx'

const TOKEN = '8994213134:AAEbOsKFy_ZSQ7_pEev4WpDJilw2KF5XRuM'
const CHAT_ID = '848006170'

export async function createBooking(formData) {
	const guests = formData.get('guests')
	const date = formData.get('date')
	const time = formData.get('time')
	const email = formData.get('email')

	if (!guests || !date || !time) {
		console.log('Soxranenie')
		return { error: 'Please fill all gaps' }
	}

	const message = `New reservation!
  Guests: ${guests}
  Date: ${date}
  Time: ${time}
	Email: ${email}
	We are waiting you!`

	try {
		await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: CHAT_ID,
				text: message,
			}),
		})
	} catch (error) {
		console.error('Not successfully. Try later!', error)
	}

	try {
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${RESEND_KEY}`,
			},
			body: JSON.stringify({
				from: 'cafe@kolsell.store',
				to: MY_EMAIL,
				subject: `New reservation!`,
				text: message,
			}),
		})
		const data = await response.json()
		if (!response.ok) {
		}
	} catch (error) {}
	if (email) {
		try {
			const response = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${RESEND_KEY}`,
				},
				body: JSON.stringify({
					from: 'cafe@kolsell.store',
					to: email,
					subject: 'Thank you for your reservation!',
					html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; background: white; padding: 20px;">
  <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 15px; padding: 30px; box-shadow: 0 2px 10px 
	rgba(0,0,0,0.1); border: 4px solid black;">
    <h1 style="color: black; font-size: 22px;">
      🍽️  Thank you for your reservation!
    </h1>
    <p style="color: #555; font-size: 15px;">
     Dear guest,
    </p>
    <p style="color: #555; font-size: 15px;">
      Your reservation has been received:
    </p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Guests:</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${guests}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date:</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${date}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Time:</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${time}</td>
      </tr>
    </table>
    <p style="color: #555; font-size: 15px;">
      We will contact you shortly to confirm
    </p>
    <div style="text-align: center; margin-top: 25px;">
      <span style="background: black; color: white; padding: 10px 25px; border-radius: 5px; font-size: 14px;">
        CAFE CRACHER
      </span>
    </div>
  </div>
</body>
</html>
`,
				}),
			})
			const data = await response.json()
		} catch (error) {}
	}

	const exsisting = await prisma.booking.findFirst({
		where: {
			date: date,
			time: time,
			status: { not: 'cancelled' },
		},
	})
	if (exsisting) {
		return { error: 'This time is already booked. Please choose another time' }
	}

	try {
		await prisma.booking.create({
			data: {
				guests: parseInt(guests),
				date: date,
				time: time,
				email: email,
			},
		})
	} catch (error) {}
	return { success: 'Your table has been reserved!' }
}
