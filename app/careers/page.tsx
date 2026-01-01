import Link from 'next/link'
import { ArrowRight, Users, Heart, Zap, Globe } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Akvi.ai | Join Our Team',
  description: 'Join Akvi.ai and help startups and SMEs build better software teams. Open positions and career opportunities.',
}

const benefits = [
  {
    icon: Zap,
    title: 'Fast-Paced Growth',
    description: 'Work in a dynamic environment where you can make a real impact.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Join a team that values collaboration, innovation, and continuous learning.',
  },
  {
    icon: Globe,
    title: 'Remote-First',
    description: 'Work from anywhere with flexible hours and timezone-aligned collaboration.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'We believe in sustainable work practices and supporting your well-being.',
  },
]

const openPositions = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote (India/Global)',
    type: 'Full-time',
    description: 'We are looking for experienced software engineers to join our team and help build innovative solutions for our clients.',
  },
  {
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote (India/Global)',
    type: 'Full-time',
    description: 'Join our AI team to develop and improve our talent matching algorithms and ML-powered solutions.',
  },
  {
    title: 'Technical Recruiter',
    department: 'Talent',
    location: 'Remote (India/Global)',
    type: 'Full-time',
    description: 'Help us find and vet top software talent using our AI-powered platform combined with expert human judgment.',
  },
  {
    title: 'Software Consultant',
    department: 'Consulting',
    location: 'Remote (India/Global)',
    type: 'Contract/Full-time',
    description: 'Provide technical consulting and leadership to startups and SMEs, helping them build and scale their teams.',
  },
]

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-teal to-light-aqua text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Join the Akvi.ai Team
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Help us build better software teams for startups and SMEs. Work on cutting-edge AI technology and make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 bg-white" aria-label="Why work at Akvi.ai">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
              Why Work at Akvi.ai?
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Join a mission-driven team that's transforming how startups and SMEs build software teams
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-sand rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-teal to-light-aqua rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">{benefit.title}</h3>
                  <p className="text-neutral-dark/70 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-sand" aria-label="Open positions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-neutral-dark/60">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-dark/70 mb-4 leading-relaxed">{position.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-ocean-teal font-semibold hover:text-deep-blue transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-blue to-ocean-teal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Don't See a Role That Fits?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We're always interested in connecting with talented individuals. Send us your resume and let's start a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-ocean-teal rounded-lg font-semibold text-lg hover:bg-light-aqua transition-colors shadow-lg"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

