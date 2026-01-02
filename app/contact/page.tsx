'use client'

import { useState, FormEvent } from 'react'
import { Send, Calendar, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'consulting',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      // These values should be set in environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration missing. Please set environment variables.')
        // Fallback: Open mailto link as backup
        const subject = encodeURIComponent(`Contact Form: ${formData.service} Inquiry`)
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Company: ${formData.company || 'Not provided'}\n` +
          `Phone: ${formData.phone || 'Not provided'}\n` +
          `Service: ${formData.service}\n\n` +
          `Message:\n${formData.message}`
        )
        window.location.href = `mailto:hello@akvi.ai?subject=${subject}&body=${body}`
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: 'consulting',
        })
        setIsSubmitting(false)
        return
      }

      // Prepare email template parameters
      const templateParams = {
        to_email: 'hello@akvi.ai',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        service: formData.service,
        message: formData.message,
        reply_to: formData.email,
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: 'consulting',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Email sending error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-teal to-light-aqua text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to build your software team faster? Schedule a free consultation or send us a message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" aria-label="Contact form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 focus:outline-none focus:ring-2 focus:ring-ocean-teal"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 focus:outline-none focus:ring-2 focus:ring-ocean-teal"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 focus:outline-none focus:ring-2 focus:ring-ocean-teal"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 focus:outline-none focus:ring-2 focus:ring-ocean-teal"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 focus:outline-none focus:ring-2 focus:ring-ocean-teal"
                  >
                    <option value="consulting">Software Consulting</option>
                    <option value="staffing">Talent & Staffing</option>
                    <option value="delivery">Delivery & Scaling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 focus:outline-none focus:ring-2 focus:ring-ocean-teal resize-none"
                  />
                </div>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-ocean-teal text-white rounded-lg font-semibold hover:bg-deep-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Contact Info & Calendar */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                Other Ways to Reach Us
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ocean-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-ocean-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-1">Email</h3>
                    <a
                      href="mailto:hello@akvi.ai"
                      className="text-ocean-teal hover:text-deep-blue transition-colors"
                    >
                      hello@akvi.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ocean-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-ocean-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-1">Phone</h3>
                    <a
                      href="tel:+911234567890"
                      className="text-ocean-teal hover:text-deep-blue transition-colors"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ocean-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-ocean-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-1">Location</h3>
                    <p className="text-neutral-dark/70">India & Global</p>
                  </div>
                </div>
              </div>

              {/* Calendly Integration Placeholder */}
              <div className="bg-sand rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-ocean-teal" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-neutral-dark">Book a Consultation</h3>
                </div>
                <p className="text-neutral-dark/70 mb-4">
                  Schedule a free 30-minute consultation to discuss your needs and see how we can help.
                </p>
                <Link
                  href="https://akviai.zohobookings.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-ocean-teal text-white rounded-lg font-semibold hover:bg-deep-blue transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book with Akvi.ai</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

