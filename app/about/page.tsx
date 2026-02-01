import Link from 'next/link'
import { ArrowRight, Target, Users, Globe, Zap } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Values',
  description: 'Learn about Akvi.ai - an AI-enabled software consulting and staffing partner for startups and SMEs. Discover our mission, values, and commitment to building high-performing software teams with transparency, speed, and measurable outcomes.',
  keywords: [
    'about Akvi.ai',
    'software consulting company',
    'talent staffing company',
    'AI-powered recruitment',
    'startup hiring partner',
    'SME technology solutions',
  ],
  openGraph: {
    title: 'About Us - Akvi.ai | Our Mission & Values',
    description: 'Learn about Akvi.ai - an AI-enabled software consulting and staffing partner for startups and SMEs.',
    url: 'https://www.akvi.ai/about',
    type: 'website',
    images: [
      {
        url: '/Akvi_logo_3.png',
        width: 1200,
        height: 630,
        alt: 'About Akvi.ai - Our Mission & Values',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Akvi.ai | Our Mission & Values',
    description: 'Learn about Akvi.ai - an AI-enabled software consulting and staffing partner.',
    images: ['/Akvi_logo_3.png'],
  },
  alternates: {
    canonical: 'https://www.akvi.ai/about',
  },
}

const values = [
  {
    icon: Target,
    title: 'Outcome-Focused',
    description: 'We measure success by the results we deliver, not just the services we provide.',
  },
  {
    icon: Users,
    title: 'Quality First',
    description: 'Every engineer is skill-assessed and vetted by experts to ensure the highest standards.',
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    description: 'AI-driven processes reduce time-to-hire and accelerate project delivery.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access top talent from India and worldwide, with timezone-aligned support.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-teal to-light-aqua text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Akvi.ai
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Akvi.ai combines AI-powered talent intelligence with expert consulting to help enterprises build high-performing teams faster. From leadership hiring and AI-powered talent & staffing to software development and learning solutions, we deliver end-to-end talent and technology services with transparency, speed, and measurable outcomes - without enterprise-level costs or delays.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white" aria-label="Our mission">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-8 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-dark/70 leading-relaxed mb-6">
                Akvi.ai empowers enterprises and SMEs to build and scale high-performing software teams through AI-driven talent matching and hands-on technology consulting.
              </p>
              <p className="text-lg text-neutral-dark/70 leading-relaxed mb-6">
                We combine intelligent talent insights with real-world engineering expertise to help growing businesses hire smarter, scale faster, and deliver high-impact digital products — without enterprise-level costs or long hiring cycles.
              </p>
              <p className="text-lg text-neutral-dark/70 leading-relaxed">
              We work with early-stage startups, scaling SMEs, product companies, and tech-driven organizations across India and global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-sand" aria-label="Our values">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-teal to-light-aqua rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">{value.title}</h3>
                  <p className="text-neutral-dark/70 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="py-20 bg-white" aria-label="Why choose us">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-8 text-center">
              Why Choose Akvi.ai?
            </h2>
            <div className="space-y-6">
              <div className="bg-sand rounded-xl p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  ⚡ Faster Hiring
                </h3>
                <p className="text-neutral-dark/70">
                  AI-assisted screening reduces time-to-hire from weeks to days, without compromising on quality.
                </p>
              </div>
              <div className="bg-sand rounded-xl p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  🎯 Quality-First Talent
                </h3>
                <p className="text-neutral-dark/70">
                  Every engineer is skill-assessed and vetted by experts, ensuring you get the right fit for your team.
                </p>
              </div>
              <div className="bg-sand rounded-xl p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  🤝 Startup-Friendly
                </h3>
                <p className="text-neutral-dark/70">
                  Flexible engagements, transparent pricing, and outcome-focused approach tailored for growing businesses.
                </p>
              </div>
              <div className="bg-sand rounded-xl p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  🌍 Global Reach
                </h3>
                <p className="text-neutral-dark/70">
                  Access top talent from India and worldwide, with timezone-aligned support for distributed teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-blue to-ocean-teal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you build your software team faster and smarter.
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

