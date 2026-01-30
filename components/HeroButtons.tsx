'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'

export default function HeroButtons() {
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      
      {/* Hire Talent Now Button - with arrow animation */}
      <Link
        href="/contact"
        className="group relative px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg flex items-center gap-3 overflow-hidden transition-all duration-300 hover:border-[rgb(255,92,57)] hover:text-[rgb(255,92,57)]"
      >
        <motion.span
          className="relative z-10 flex items-center"
          initial={{ x: 0 }}
          whileHover={{ x: -8 }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
        >
          <Users className="w-5 h-5 transition-colors duration-300" />
        </motion.span>
        <span className="relative z-10 transition-colors duration-300">
          Hire Talent Now
        </span>
        <motion.span
          className="relative z-10 flex items-center"
          initial={{ x: 0 }}
          whileHover={{ x: 8 }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
        >
          <ArrowRight className="w-5 h-5 transition-colors duration-300" />
        </motion.span>
        {/* Hover background */}
        <motion.div
          className="absolute inset-0 bg-[rgb(255,92,57)]/10 border-2 border-[rgb(255,92,57)] rounded-lg"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  )
}

