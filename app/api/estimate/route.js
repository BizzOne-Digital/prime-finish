import nodemailer from 'nodemailer'

const SERVICE_LABELS = {
  drywall: 'Drywall Installation & Repair',
  painting: 'Interior & Exterior Painting',
  popcorn: 'Popcorn Ceiling Removal',
  ceiling: 'Ceiling Repairs & Finishing',
  commercial: 'Commercial Services',
  other: 'Other / Not Sure',
}

export async function POST(request) {
  const body = await request.json()
  const { name, phone, email, service } = body || {}

  if (!name || !phone || !email) {
    console.error('[estimate] Rejected request: missing required fields.')
    return Response.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, NOTIFY_EMAIL } = process.env
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('[estimate] Email not configured: missing GMAIL_USER or GMAIL_APP_PASSWORD.')
    return Response.json({ error: 'Email is not configured.' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  })

  const serviceLabel = SERVICE_LABELS[service] || 'Not specified'

  try {
    await transporter.sendMail({
      from: `"Prime Finish Ottawa Website" <${GMAIL_USER}>`,
      to: NOTIFY_EMAIL || GMAIL_USER,
      replyTo: email,
      subject: `New Free Estimate Request — ${name}`,
      text: `New estimate request from the website:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${serviceLabel}`,
      html: `
        <h2>New Free Estimate Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceLabel}</p>
      `,
    })
    console.log(`[estimate] Email sent successfully for ${name} (${email})`)
    return Response.json({ ok: true })
  } catch (err) {
    console.error(`[estimate] Failed to send email for ${name} (${email}):`, err.message)
    return Response.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
