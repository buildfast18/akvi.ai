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
  title: 'Akvi.ai - AI-Powered Software Consulting & Talent Staffing',
  description: 'Akvi.ai helps startups and SMEs build high-performing software teams faster using AI-driven talent matching and hands-on consulting.',
  keywords: 'software consulting, AI staffing, talent acquisition, startup hiring, SME software teams, India tech talent',
  authors: [{ name: 'Akvi.ai' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
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
    title: 'Akvi.ai - AI-Powered Software Consulting & Talent Staffing',
    description: 'Build Better Software Teams. Faster. Smarter.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akvi.ai - AI-Powered Software Consulting & Talent Staffing',
    description: 'Build Better Software Teams. Faster. Smarter.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Akvi.ai',
              description: 'AI-enabled software consulting and staffing partner',
              url: 'https://akvi.ai',
              logo: 'https://akvi.ai/logo.png',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
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

