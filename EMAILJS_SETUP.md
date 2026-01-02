# EmailJS Setup Instructions

This guide will help you set up EmailJS to send emails directly from the contact form without a backend.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use **EmailJS** for testing
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
New contact form submission from Akvi.ai website

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Service Interest: {{service}}

Message:
{{message}}

---
This email was sent from the Akvi.ai contact form.
Reply to: {{reply_to}}
```

4. **Important:** Make sure to add these variables in the template:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{company}}`
   - `{{phone}}`
   - `{{service}}`
   - `{{message}}`
   - `{{reply_to}}`

5. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs from EmailJS
4. **Important:** Restart your Next.js development server after adding environment variables

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox (hello@akvi.ai) for the test email

## Troubleshooting

### Emails not sending?

1. **Check environment variables:**
   - Make sure `.env.local` exists in the project root
   - Verify all three variables are set correctly
   - Restart your dev server after adding variables

2. **Check EmailJS dashboard:**
   - Verify your service is active
   - Check template variables match exactly
   - Look for errors in EmailJS logs

3. **Check browser console:**
   - Open browser DevTools (F12)
   - Look for error messages in the Console tab

### Common Issues

- **"EmailJS configuration missing"**: Environment variables not set or server not restarted
- **"Template not found"**: Template ID is incorrect
- **"Service not found"**: Service ID is incorrect
- **"Invalid public key"**: Public key is incorrect

## EmailJS Free Tier Limits

- 200 emails per month (free tier)
- Upgrade available if you need more

## Alternative: Using Gmail SMTP

If you prefer to use Gmail directly:

1. In EmailJS, add Gmail as a service
2. You'll need to:
   - Enable "Less secure app access" in Gmail (not recommended)
   - OR use Gmail App Password (recommended)
   - OR use OAuth2 (most secure, requires more setup)

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Check their dashboard for support options

