'use server'

import prisma from '@/app/booking/lib/prisma'

const RESEND_KEY = 're_jbrcMM7v_6Zmmeuy5KSuGm845ExGXFfnx'

const TOKEN = '8994213134:AAEbOsKFy_ZSQ7_pEev4WpDJilw2KF5XRuM'
const CHAT_ID = '848006170'

export async function updateBookingStatus(bookingId, newStatus) {
	console.log('updateBookingStatus called:', bookingId, newStatus)
	const booking = await prisma.booking.update({
		where: { id: bookingId },
		data: { status: newStatus },
	})

	let statusText, message
	if (newStatus === 'confirmed') {
		statusText = 'CONFIRMED'
		message = `Reservation confirmed!
  
  Dear guest!
  
  Your reservation has been confirmed. We are waiting for you!

  ID: #${booking.id}
  Guests: ${booking.guests}
  Date: ${booking.date}
  Time: ${booking.time}

  We will glad to see you!
 CRACHER cafe wid love <3`
	} else {
		statusText = 'CANCELLED'
		message = `Reservation cancelled!
    
    Dear guest!
    
    Unfortunately, your reservation has been cancelled. All tabled are booked for this time.
    ID: #${booking.id}
  Guests: ${booking.guests}
  Date: ${booking.date}
  Time: ${booking.time}
  
  We apologize fot the inconvenience!
  CRACHER cafe wid love <3`
	}

	try {
		await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: CHAT_ID,
				text: message,
			}),
		})
	} catch (error) {}
	try {
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${RESEND_KEY}`,
			},
			body: JSON.stringify({
				from: 'cafe@kolsell.store',
				to: booking.email,
				subject: `Reservation ${statusText} - #${booking.id}`,
				html:
					newStatus === 'confirmed'
						? `
    <!DOCTYPE html>
    <html>

    <head>
		<meta charset="utf-8">
		</head>
		
    <body style="font-family: Arial, sans-serif; background: #f0fdf4; padding: 20px;">

      <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 15px; padding: 30px; 
			box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 4px solid #16a34a;">

        <h1 style="color: #16a34a; font-size: 27px;">
				Reservation Confirmed!
				</h1>

        <p style="color: #555; font-size: 16px;">
				Dear guest,
				</p>
        <p style="color: #555; font-size: 16px;">
				Your reservation has been confirmed. We are waiting for you!
				</p>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
					<td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Guests:</td>
					<td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.guests}</td></tr>

          <tr>
					<td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date:</td>
					<td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.date}</td>
					</tr>
					
          <tr>
					<td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Time:</td>
					<td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.time}</td>
					</tr>
        </table>

        <p style="color: #555; font-size: 15px;">
				We will be glad to see you!
				</p>
				
        <div style="text-align: center; margin-top: 25px;">

          <span style="background: #16a34a; color: white; padding: 10px 25px; border-radius: 5px; font-size: 14px;">
					CAFE CRACHER
					</span>

        </div>
      </div>
    </body>
    </html>
  `
						: `
    <!DOCTYPE html>
    <html>

    <head>
		<meta charset="utf-8">
		</head>

    <body style="font-family: Arial, sans-serif; background: #fef2f2; padding: 20px;">

      <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 15px; padding: 30px; 
			box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 4px solid #dc2626;">

        <h1 style="color: #dc2626; font-size: 27px;">
				Reservation Cancelled
				</h1>
				
        <p style="color: #555; font-size: 16px;">
				Dear guest,
				</p>
				
        <p style="color: #555; font-size: 16px;">
				Unfortunately, your reservation are cancelled. All tables are booked for this time.
				</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">

          <tr>
					<td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Guests:</td>
					<td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.guests}</td>
					</tr>

          <tr>
					<td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date:</td>
					<td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.date}</td>
					</tr>

          <tr>
					<td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Time:</td>
					<td style="padding: 8px; border-bottom: 1px solid #eee;">${booking.time}</td>
					</tr>
        </table>

        <p style="color: #555; font-size: 15px;">
				We apologize for the inconvenience!
				</p>
        <div style="text-align: center; margin-top: 25px;">

          <span style="background: #dc2626; color: white; padding: 10px 25px; border-radius: 5px; font-size: 14px;">
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
