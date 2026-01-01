'use client'

import { motion } from 'framer-motion'
import { Search, Sparkles, Rocket, LucideIcon } from 'lucide-react'

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: Search,
    title: 'Understand Your Needs',
    description: 'We analyze your business goals, tech stack, and team requirements.',
  },
  {
    icon: Sparkles,
    title: 'AI-Driven Matching',
    description: 'Our AI engine + expert review identifies the best-fit talent or solution.',
  },
  {
    icon: Rocket,
    title: 'Deliver & Scale',
    description: 'Onboard quickly, track performance, and scale as you grow.',
  },
]

export default function HowItWorks() {
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <section className="py-20 bg-white" aria-label="How it works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Three simple steps to build your high-performing software team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-ocean-teal to-light-aqua rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-ocean-teal to-light-aqua transform -translate-y-1/2 -translate-x-1/2" />
                  )}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ocean-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-3">{step.title}</h3>
                <p className="text-neutral-dark/70 leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

