import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact Akvi.ai for software consulting, AI-powered talent staffing, and technology solutions. Get in touch with our team to discuss your hiring and consulting needs. We serve startups and SMEs across India and globally.',
  keywords: [
    'contact Akvi.ai',
    'software consulting contact',
    'talent staffing inquiry',
    'hire software engineers',
    'IT consulting contact',
    'startup hiring consultation',
  ],
  openGraph: {
    title: 'Contact Us - Akvi.ai | Get in Touch',
    description: 'Contact Akvi.ai for software consulting, AI-powered talent staffing, and technology solutions. Get in touch with our team.',
    url: 'https://www.akvi.ai/contact',
    type: 'website',
    images: [
      {
        url: '/Akvi_logo_3.png',
        width: 1200,
        height: 630,
        alt: 'Contact Akvi.ai - Get in Touch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Akvi.ai | Get in Touch',
    description: 'Contact Akvi.ai for software consulting and AI-powered talent staffing solutions.',
    images: ['/Akvi_logo_3.png'],
  },
  alternates: {
    canonical: 'https://www.akvi.ai/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
