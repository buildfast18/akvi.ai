'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: LucideIcon
  className?: string
}

export default function AnimatedButton({
  href,
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
}: AnimatedButtonProps) {
  const baseClasses = 'group relative inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold text-lg overflow-hidden shadow-lg'
  
  const variantClasses = {
    primary: 'bg-white text-ocean-teal',
    secondary: 'bg-ocean-teal text-white',
    outline: 'bg-transparent border-2 border-white text-white',
  }

  const fillColors = {
    primary: 'bg-gradient-to-r from-ocean-teal to-light-aqua',
    secondary: 'bg-deep-blue',
    outline: 'bg-white',
  }

  const textHoverColors = {
    primary: 'group-hover:text-white',
    secondary: 'group-hover:text-white',
    outline: 'group-hover:text-ocean-teal',
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {/* Background fill animation */}
      <motion.div
        className={`absolute inset-0 ${fillColors[variant]}`}
        initial={{ y: '100%' }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
      {Icon && (
        <motion.span
          className="relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Icon className={`w-5 h-5 ${textHoverColors[variant]} transition-colors duration-300`} />
        </motion.span>
      )}
      <span className={`relative z-10 ${textHoverColors[variant]} transition-colors duration-300`}>
        {children}
      </span>
      {!Icon && (
        <motion.span
          className="relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <ArrowRight className={`w-5 h-5 ${textHoverColors[variant]} transition-colors duration-300`} />
        </motion.span>
      )}
    </Link>
  )
}

