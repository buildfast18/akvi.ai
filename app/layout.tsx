import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.akvi.ai'),
  title: {
    default: 'Akvi.ai - AI-Powered Software Consulting & Talent Staffing Solutions',
    template: '%s | Akvi.ai',
  },
  description: 'Akvi.ai combines AI-powered talent intelligence with expert consulting to help startups and SMEs build high-performing teams faster. From leadership hiring and RPO to software development and learning solutions, we deliver end-to-end talent and technology services.',
  keywords: [
    'software consulting',
    'AI staffing',
    'talent acquisition',
    'startup hiring',
    'SME software teams',
    'India tech talent',
    'leadership hiring',
    'RPO recruitment',
    'Hire Train Deploy',
    'MSP managed services',
    'software development',
    'IT consulting',
    'remote teams',
    'technical recruitment',
    'AI-powered hiring',
    'talent staffing',
    'software engineering teams',
    'tech talent sourcing',
  ],
  authors: [{ name: 'Akvi.ai', url: 'https://www.akvi.ai' }],
  creator: 'Akvi.ai',
  publisher: 'Akvi.ai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      // Primary: 96x96 PNG for Google Search (must be multiple of 48px)
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.akvi.ai',
    siteName: 'Akvi.ai',
    title: 'Akvi.ai - AI-Powered Software Consulting & Talent Staffing Solutions',
    description: 'Build Better Software Teams. Faster. Smarter. AI-powered talent intelligence with expert consulting for startups and SMEs.',
    images: [
      {
        url: '/Akvi_logo_3.png',
        width: 1200,
        height: 630,
        alt: 'Akvi.ai - AI-Powered Software Consulting & Talent Staffing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akvi.ai - AI-Powered Software Consulting & Talent Staffing',
    description: 'Build Better Software Teams. Faster. Smarter. AI-powered talent intelligence with expert consulting.',
    creator: '@akvi_ai',
    images: ['/Akvi_logo_3.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.akvi.ai',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Primary favicon for Google Search: 96x96 PNG (Google requires multiple of 48px, recommends 48/96/192) */}
        <link rel="icon" type="image/png" sizes="96x96" href="https://www.akvi.ai/favicon-96x96.png" />
        <link rel="icon" href="https://www.akvi.ai/favicon.ico" sizes="any" />
        <link rel="icon" href="https://www.akvi.ai/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="https://www.akvi.ai/apple-touch-icon.png" />
        <link rel="manifest" href="https://www.akvi.ai/site.webmanifest" />
        <link rel="canonical" href="https://www.akvi.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Akvi.ai',
              description: 'AI-enabled software consulting and staffing partner helping enterprises build high-performing software teams',
              url: 'https://www.akvi.ai',
              logo: 'https://www.akvi.ai/Akvi_logo_3.png',
              foundingDate: '2025',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '8-41/22/2/1, West Balaji Hills',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                postalCode: '500039',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9951827530',
                contactType: 'Customer Service',
                email: 'hello@akvi.ai',
                areaServed: 'IN',
                availableLanguage: ['en', 'hi'],
              },
              sameAs: [
                'https://www.linkedin.com/in/akvi-ai',
                'https://x.com/akvi_ai',
                'https://www.instagram.com/akvi.ai/',
              ],
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
              serviceType: [
                'Software Consulting',
                'AI-Powered Talent Staffing',
                'Leadership Hiring',
                'Recruitment Process Outsourcing',
                'Hire Train Deploy',
                'Managed Service Provider',
                'Learning & Development',
                'Software Development',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <NavBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

