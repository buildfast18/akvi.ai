'use client'

import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4 placeholder
    if (process.env.NEXT_PUBLIC_GA_ID) {
      // Initialize GA4
      // gtag('config', process.env.NEXT_PUBLIC_GA_ID)
    }

    // Hotjar placeholder
    if (process.env.NEXT_PUBLIC_HOTJAR_ID) {
      // Initialize Hotjar
    }
  }, [])

  return null
}

