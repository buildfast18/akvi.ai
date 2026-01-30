import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import HowItWorks from '@/components/HowItWorks'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CaseStudyCard from '@/components/CaseStudyCard'
import AnimatedButton from '@/components/AnimatedButton'
import Link from 'next/link'
import { Zap, Target, Heart, Globe, ShieldCheck } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Akvi.ai | AI-Powered Software Consulting & Talent Staffing',
  description: 'Build Better Software Teams. Faster. Smarter. Akvi.ai helps startups and SMEs hire top software talent and deliver projects using AI-driven staffing and expert consulting.',
}

const services = [
  {
    title: 'Software Development',
    description: 'End-to-end software development services from concept to deployment. We build scalable, high-quality software solutions tailored to your business needs.',
    icon: 'Code',
    features: [
      'Custom software development',
      'Web & mobile application development',
      'Cloud-native solutions & architecture',
      'Quality assurance & testing',
    ],
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
  },
  {
    title: 'Leadership Hiring',
    description: 'Finding leaders who build the future. We partner with founders, boards, and senior leadership teams to identify, assess, and secure transformative leaders who deliver impact from day one.',
    icon: 'Briefcase',
    features: [
      'CEOs, COOs, CTOs, CIOs & CXO-level leadership',
      'Technology & Digital Leaders placement',
      'Product, Engineering & Data Heads',
      'Finance, HR, and Operations Leadership',
    ],
  },
  // {
  //   title: 'RPO (Recruitment Process Outsourcing)',
  //   description: 'Scalable hiring with predictable outcomes. We act as an extension of your talent acquisition function, managing your recruitment lifecycle while improving quality and reducing time-to-hire.',
  //   icon: 'UserPlus',
  //   features: [
  //     'Workforce planning & hiring strategy',
  //     'Talent sourcing & market mapping',
  //     'Screening, assessment & interview coordination',
  //     'Recruitment analytics & reporting',
  //   ],
  // },
  {
    title: 'HTD (Hire-Train-Deploy)',
    description: 'Job-ready talent with faster deployment and reduced hiring risk. We build reliable talent pipelines by hiring high-potential candidates, training them on required skills, and deploying them as job-ready professionals.',
    icon: 'GraduationCap',
    features: [
      'Entry-level and early-career hiring',
      'Technology & digital skills training',
      'Role-based curriculum design',
      'Deployment & performance tracking',
    ],
  },
  // {
  //   title: 'MSP (Managed Service Provider)',
  //   description: 'Smarter management of your contingent workforce. We bring structure, visibility, and control to your non-permanent workforce while improving quality, reducing costs, and ensuring compliance.',
  //   icon: 'Settings',
  //   features: [
  //     'Contingent workforce strategy & planning',
  //     'Vendor management & consolidation',
  //     'Contract, compliance & risk management',
  //     'Workforce analytics & reporting',
  //   ],
  // },
  {
    title: 'Learning & Development',
    description: 'Building skills for today, preparing talent for tomorrow. We design and deliver practical, role-based learning programs aligned to real business needs—not just theoretical training.',
    icon: 'BookOpen',
    features: [
      'Technology & Digital Skills training',
      'Leadership & Manager Development',
      'Functional & Role-Based Training',
      'Continuous Upskilling & Reskilling',
    ],
  },
]

const benefits = [
  { icon: Zap, text: 'Faster Hiring — AI-assisted screening reduces time-to-hire from weeks to days.' },
  { icon: Target, text: 'Quality-First Talent — Every engineer is skill-assessed and vetted by experts.' },
  { icon: Heart, text: 'Startup-Friendly — Flexible engagements, transparent pricing, outcome-focused.' },
  { icon: Globe, text: 'Global Reach — Access top talent from India and worldwide, timezone-aligned.' },
  { icon: ShieldCheck, text: 'Governance & Compliance — Robust policy adherence and ethical practices ensure trust, transparency, and risk mitigation.' },
]

const caseStudies = [
  {
    title: 'Scaling Engineering Team for FinTech Startup',
    company: 'FinTech Startup',
    challenge: 'Needed to scale from 5 to 25 engineers in 3 months to support rapid product growth.',
    solution: 'Leveraged AI-driven matching to identify 20 qualified candidates, followed by expert vetting and streamlined onboarding.',
    outcome: [
      'Reduced time-to-hire by 65%',
      'Hired 20 engineers in 10 weeks',
      '95% retention rate after 6 months',
    ],
    href: '/case-studies/fintech-scaling',
  },
  {
    title: 'Cloud Migration & Architecture Redesign',
    company: 'E-commerce SME',
    challenge: 'Legacy monolith needed migration to cloud-native architecture to support 10x growth.',
    solution: 'Provided interim CTO, architecture consulting, and dedicated team for 6-month migration project.',
    outcome: [
      'Reduced infrastructure costs by 40%',
      'Improved system performance by 3x',
      'Zero downtime during migration',
    ],
    href: '/case-studies/cloud-migration',
  },
]

const testimonials = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'CTO',
    company: 'TechStart India',
    content: 'Akvi.ai transformed our hiring process. We went from 6-week cycles to onboarding quality engineers in just 10 days. The AI matching combined with expert review is a game-changer.',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'Global SaaS Co',
    content: 'As a startup, we needed flexible, high-quality talent without enterprise agency costs. Akvi.ai delivered exactly that — transparent pricing and engineers who hit the ground running.',
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    role: 'VP Engineering',
    company: 'ScaleUp Inc',
    content: 'The consulting team helped us redesign our architecture and scale our team simultaneously. Their outcome-focused approach aligned perfectly with our growth goals.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Why Akvi.ai Section */}
      <section className="py-20 bg-white" aria-label="Why choose Akvi.ai">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
              Why Akvi.ai?
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Akvi.ai combines AI-powered talent intelligence with expert consulting to help startups and SMEs build high-performing teams faster. From leadership hiring and AI-powered talent & staffing to software development and learning solutions, we deliver end-to-end talent and technology services with transparency, speed, and measurable outcomes- without enterprise-level costs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-sand rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 text-ocean-teal mb-4" aria-hidden="true" />
                  <p className="text-neutral-dark leading-relaxed">{benefit.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-sand" aria-label="Our services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Comprehensive talent and technology solutions to build and scale your organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-teal to-light-aqua text-white" aria-label="Business outcomes">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Measurable Business Outcomes
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Real results that drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Reduce time-to-hire by 50–70%',
              'Cut recruiting overhead — save 20–40% vs enterprise placements',
              'Accelerate time-to-market with verified engineers',
              'Improve retention via better role-fit and ongoing support',
            ].map((outcome, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <p className="text-white leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/* <section className="py-20 bg-white" aria-label="Case studies">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              See how we've helped startups and SMEs build better teams
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                company={study.company}
                challenge={study.challenge}
                solution={study.solution}
                outcome={study.outcome}
                href={study.href}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="text-center">
            <AnimatedButton href="/case-studies" variant="secondary">
              View All Case Studies
            </AnimatedButton>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <TestimonialCarousel testimonials={testimonials} /> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-blue to-ocean-teal text-white" aria-label="Call to action">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation and discover how Akvi.ai can accelerate your hiring and delivery.
          </p>
          <AnimatedButton href="/contact" variant="primary">
            Schedule a Free Consultation
          </AnimatedButton>
        </div>
      </section>
    </>
  )
}

