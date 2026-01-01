import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Akvi.ai | Get in Touch',
  description: 'Contact Akvi.ai to discuss your software consulting and talent staffing needs. Schedule a free consultation or send us a message.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

