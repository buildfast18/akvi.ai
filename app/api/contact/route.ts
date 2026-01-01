import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message, service } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In production, you would:
    // 1. Send email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to database (PostgreSQL, MongoDB, etc.)
    // 3. Send to CRM (HubSpot, Salesforce, etc.)
    // 4. Send webhook notification (Slack, Discord, etc.)

    // Example: Send email (uncomment and configure)
    /*
    const emailService = new EmailService()
    await emailService.send({
      to: process.env.CONTACT_EMAIL || 'hello@akvi.ai',
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })
    */

    // Example: Save to database (uncomment and configure)
    /*
    const db = await getDatabase()
    await db.contacts.create({
      data: {
        name,
        email,
        company,
        phone,
        message,
        service,
        createdAt: new Date(),
      },
    })
    */

    // For now, just log and return success
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      service,
      message: message.substring(0, 100) + '...',
    })

    return NextResponse.json(
      { message: 'Thank you for your message. We will get back to you soon!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

