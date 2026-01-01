import CaseStudyCard from '@/components/CaseStudyCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Akvi.ai | Success Stories',
  description: 'See how Akvi.ai has helped startups and SMEs build better software teams and deliver successful projects.',
}

const caseStudies = [
  {
    title: 'Scaling Engineering Team for FinTech Startup',
    company: 'FinTech Startup',
    challenge: 'Needed to scale from 5 to 25 engineers in 3 months to support rapid product growth and new market expansion.',
    solution: 'Leveraged AI-driven matching to identify 20 qualified candidates across full-stack, DevOps, and mobile roles. Expert vetting ensured cultural fit and technical excellence. Streamlined onboarding process reduced ramp-up time.',
    outcome: [
      'Reduced time-to-hire by 65% (from 6 weeks to 2 weeks average)',
      'Hired 20 engineers in 10 weeks',
      '95% retention rate after 6 months',
      'Zero compromise on quality — all hires passed technical assessments',
    ],
    href: '/case-studies/fintech-scaling',
  },
  {
    title: 'Cloud Migration & Architecture Redesign',
    company: 'E-commerce SME',
    challenge: 'Legacy monolith needed migration to cloud-native architecture to support 10x growth and improve scalability.',
    solution: 'Provided interim CTO, architecture consulting, and dedicated team for 6-month migration project. Designed microservices architecture, implemented CI/CD pipelines, and ensured zero-downtime migration.',
    outcome: [
      'Reduced infrastructure costs by 40%',
      'Improved system performance by 3x',
      'Zero downtime during migration',
      'Enabled 10x traffic handling capacity',
    ],
    href: '/case-studies/cloud-migration',
  },
  {
    title: 'AI-Powered Product Development',
    company: 'Healthcare Tech Startup',
    challenge: 'Needed AI/ML engineers and product engineers to build a new AI-driven diagnostic platform from scratch.',
    solution: 'Assembled a dedicated team of 8 engineers (ML engineers, full-stack developers, and DevOps) using AI matching. Provided product engineering consulting to ensure scalable architecture.',
    outcome: [
      'Launched MVP in 4 months',
      'Team productivity 30% above industry average',
      'Successfully raised Series A with product demo',
      'Scaled to 15 engineers within 6 months',
    ],
    href: '/case-studies/ai-product',
  },
  {
    title: 'Interim Technical Leadership',
    company: 'SaaS ScaleUp',
    challenge: 'CTO left suddenly, needed interim leadership and team restructuring to maintain product velocity.',
    solution: 'Provided interim CTO with 15+ years experience, restructured engineering teams, implemented best practices, and hired permanent replacement through our network.',
    outcome: [
      'Maintained 100% product delivery timeline',
      'Improved team efficiency by 25%',
      'Hired permanent CTO in 8 weeks',
      'Zero disruption to customer commitments',
    ],
    href: '/case-studies/interim-cto',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-teal to-light-aqua text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              See how we've helped startups and SMEs build better software teams, deliver projects faster, and scale efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white" aria-label="Case studies">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </section>
    </div>
  )
}

