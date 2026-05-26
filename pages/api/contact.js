import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, type, date, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name} — ${type || 'General inquiry'}`,
      html: `
        <div style="font-family: 'Courier New', monospace; max-width: 560px; margin: 0 auto; color: #2C1810; background: #F5F0E8; padding: 40px;">

          <p style="font-size: 10px; letter-spacing: 4px; text-transform: uppercase; opacity: 0.5; margin-bottom: 8px;">
            Portfolio Contact Form
          </p>
          <h2 style="font-family: Georgia, serif; font-size: 24px; font-weight: 400; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 32px; border-bottom: 1px solid #D4C4B4; padding-bottom: 20px;">
            New Reservation
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; opacity: 0.45; width: 140px; vertical-align: top;">Guest Name</td>
              <td style="padding: 10px 0; font-size: 16px;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid #D4C4B4;">
              <td style="padding: 10px 0; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; opacity: 0.45; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; font-size: 16px;">
                <a href="mailto:${email}" style="color: #6B2737;">${email}</a>
              </td>
            </tr>
            <tr style="border-top: 1px solid #D4C4B4;">
              <td style="padding: 10px 0; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; opacity: 0.45; vertical-align: top;">Purpose</td>
              <td style="padding: 10px 0; font-size: 16px;">${type || '—'}</td>
            </tr>
            ${date ? `
            <tr style="border-top: 1px solid #D4C4B4;">
              <td style="padding: 10px 0; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; opacity: 0.45; vertical-align: top;">Date of Arrival</td>
              <td style="padding: 10px 0; font-size: 16px;">${date}</td>
            </tr>` : ''}
            <tr style="border-top: 1px solid #D4C4B4;">
              <td style="padding: 10px 0; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; opacity: 0.45; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 16px; line-height: 1.7; font-style: italic;">
                ${message.replace(/\n/g, '<br>')}
              </td>
            </tr>
          </table>

          <p style="margin-top: 40px; font-size: 10px; opacity: 0.35; letter-spacing: 2px; text-transform: uppercase; border-top: 1px solid #D4C4B4; padding-top: 20px;">
            Tin Smajlagić · Portfolio · ${new Date().getFullYear()}
          </p>
        </div>
      `
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send. Please try again.' })
  }
}