import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Akvi.ai | Software Consulting & AI-Powered Staffing',
  description: 'Comprehensive software consulting, AI-powered talent staffing, and delivery services for startups and SMEs.',
}

const services = [
  {
    title: 'Software Consulting',
    description: 'From idea to execution: product engineering, architecture, cloud & AI solutions, and interim technical leadership.',
    icon: 'Code',
    features: [
      'Product engineering & architecture design',
      'Cloud migration & infrastructure optimization',
      'AI/ML solution development',
      'Interim CTO and technical leadership',
      'Technical due diligence & audits',
      'DevOps & CI/CD pipeline setup',
    ],
    href: '#consulting',
  },
  {
    title: 'AI-Powered Talent & Staffing',
    description: 'Full-time & contract engineers, dedicated remote teams, skill-verified and interview-ready talent sourced with AI + human vetting.',
    icon: 'Users',
    features: [
      'Full-time & contract engineers',
      'Dedicated remote development teams',
      'AI-driven candidate matching',
      'Expert human vetting & interviews',
      'Skill assessments & verification',
      'Fast onboarding & integration',
    ],
    href: '#staffing',
  },
  {
    title: 'Delivery & Scaling',
    description: 'Project delivery support, build/scale teams, and technical operations to drive outcomes.',
    icon: 'TrendingUp',
    features: [
      'End-to-end project delivery',
      'Team building & scaling strategies',
      'Technical operations & support',
      'Performance tracking & optimization',
      'Agile & DevOps practices',
      'Outcome-driven project management',
    ],
    href: '#delivery',
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, technical requirements, and team needs through detailed consultations.',
  },
  {
    step: '2',
    title: 'AI Matching & Vetting',
    description: 'Our AI engine analyzes requirements and matches candidates, followed by expert review and skill verification.',
  },
  {
    step: '3',
    title: 'Onboarding & Integration',
    description: 'Streamlined onboarding process ensures your new team members are productive from day one.',
  },
  {
    step: '4',
    title: 'Ongoing Support & Scaling',
    description: 'Continuous support, performance tracking, and scaling strategies to help you grow efficiently.',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-teal to-light-aqua text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Comprehensive Software Solutions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From AI-powered talent matching to hands-on consulting, we provide end-to-end solutions to build and scale your software teams.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" aria-label="Our services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                href={service.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-sand" aria-label="Our process">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
              Our Process
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              A streamlined approach to deliver results faster
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-ocean-teal text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-3">{item.title}</h3>
                <p className="text-neutral-dark/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-blue to-ocean-teal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you build your software team faster and smarter.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-ocean-teal rounded-lg font-semibold text-lg hover:bg-light-aqua transition-colors shadow-lg"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

