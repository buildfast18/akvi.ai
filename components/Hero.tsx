'use client'

import { motion } from 'framer-motion'
import HeroButtons from './HeroButtons'

export default function Hero() {
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Blue Background matching other sections */}
      <div className="absolute inset-0 z-0">
        {/* Blue gradient matching pricing/about sections */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-ocean-teal" />
        <div className="absolute inset-0 bg-gradient-to-tr from-ocean-teal/80 to-light-aqua/60" />
        {/* Subtle animated elements */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-light-aqua/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-ocean-teal/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.svg
          className="absolute bottom-0 w-full h-1/3"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.path
            d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
            fill="rgba(255, 255, 255, 0.1)"
            initial={prefersReducedMotion ? {} : { d: "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z" }}
            animate={prefersReducedMotion ? {} : {
              d: [
                "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z",
                "M0,100 Q300,80 600,100 T1200,100 L1200,200 L0,200 Z",
                "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
        <motion.svg
          className="absolute bottom-0 w-full h-1/4"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <motion.path
            d="M0,80 Q400,40 800,80 T1200,80 L1200,150 L0,150 Z"
            fill="rgba(255, 255, 255, 0.15)"
            initial={prefersReducedMotion ? {} : { d: "M0,80 Q400,40 800,80 T1200,80 L1200,150 L0,150 Z" }}
            animate={prefersReducedMotion ? {} : {
              d: [
                "M0,80 Q400,40 800,80 T1200,80 L1200,150 L0,150 Z",
                "M0,80 Q400,60 800,80 T1200,80 L1200,150 L0,150 Z",
                "M0,80 Q400,40 800,80 T1200,80 L1200,150 L0,150 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
            Build Better Software Teams.
            <br />
            <span className="text-light-aqua drop-shadow-lg">Faster. Smarter.</span>
          </h1>
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-10 max-w-3xl mx-auto text-balance drop-shadow-lg"
          >
            Akvi.ai helps enterprises hire top software talent and deliver projects using AI-driven staffing and expert consulting.
          </motion.p>

          <HeroButtons />

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-white font-medium text-sm sm:text-base drop-shadow-md"
          >
            Trusted by enterprises and growing SMEs across India and the globe.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : {
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : {
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-white rounded-full mt-2 shadow-md"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

