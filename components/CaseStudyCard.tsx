'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CaseStudyCardProps {
  title: string
  company: string
  challenge: string
  solution: string
  outcome: string[]
  image?: string
  href?: string
  delay?: number
}

export default function CaseStudyCard({
  title,
  company,
  challenge,
  solution,
  outcome,
  image,
  href = '/case-studies',
  delay = 0,
}: CaseStudyCardProps) {
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <motion.article
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={prefersReducedMotion ? {} : { y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      {image && (
        <div className="relative h-48 w-full bg-gradient-to-br from-ocean-teal to-light-aqua">
          <Image
            src={image}
            alt={`${company} case study`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <span className="text-sm text-ocean-teal font-semibold uppercase tracking-wide">
            {company}
          </span>
          <h3 className="text-2xl font-bold text-neutral-dark mt-2">{title}</h3>
        </div>

        <div className="space-y-4 mb-6 flex-1">
          <div>
            <h4 className="text-sm font-semibold text-neutral-dark mb-1">Challenge</h4>
            <p className="text-sm text-neutral-dark/70">{challenge}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-dark mb-1">Solution</h4>
            <p className="text-sm text-neutral-dark/70">{solution}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-dark mb-2">Outcome</h4>
            <ul className="space-y-1">
              {outcome.map((item, index) => (
                <li key={index} className="text-sm text-neutral-dark/70 flex items-start space-x-2">
                  <span className="text-ocean-teal mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={href}
          className="group inline-flex items-center space-x-2 text-ocean-teal font-semibold hover:text-deep-blue transition-colors mt-auto"
        >
          <span>See the full case study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  )
}

