'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Users, TrendingUp, type LucideIcon } from 'lucide-react'

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Code,
  Users,
  TrendingUp,
}

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  features: string[]
  href?: string
  delay?: number
}

export default function ServiceCard({
  title,
  description,
  icon: iconName,
  features,
  href = '/services',
  delay = 0,
}: ServiceCardProps) {
  const Icon = iconMap[iconName] || Code
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-ocean-teal to-light-aqua rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-dark mb-3">{title}</h3>
        <p className="text-neutral-dark/70 leading-relaxed">{description}</p>
      </div>

      <ul className="flex-1 space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-ocean-teal mt-1">✓</span>
            <span className="text-neutral-dark/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="group inline-flex items-center space-x-2 text-ocean-teal font-semibold hover:text-deep-blue transition-colors"
      >
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}

