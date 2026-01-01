import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Akvi.ai | Transparent Pricing Plans',
  description: 'Flexible pricing plans for software consulting and AI-powered talent staffing. Startup-friendly pricing with transparent costs.',
}

const plans = [
  {
    name: 'Staffing',
    description: 'AI-powered talent matching and placement',
    price: 'Custom',
    features: [
      'AI-driven candidate matching',
      'Expert vetting & skill assessment',
      'Full-time & contract options',
      'Fast onboarding support',
      '30-day guarantee',
      'Dedicated account manager',
    ],
    cta: 'Hire Talent Now',
    popular: false,
  },
  {
    name: 'Consulting',
    description: 'Software consulting and technical leadership',
    price: 'Project-based',
    features: [
      'Architecture & design consulting',
      'Cloud migration support',
      'Interim CTO services',
      'Technical due diligence',
      'DevOps & CI/CD setup',
      'Ongoing support',
    ],
    cta: 'Talk to an Expert',
    popular: true,
  },
  {
    name: 'Dedicated Team',
    description: 'Full remote team for your projects',
    price: 'Monthly',
    features: [
      'Dedicated remote team',
      'Full-time availability',
      'Project management included',
      'Scalable team size',
      'Performance tracking',
      'Flexible engagement terms',
    ],
    cta: 'Build Your Team',
    popular: false,
  },
]

const benefits = [
  'No hidden fees or markups',
  'Transparent pricing from day one',
  'Flexible payment terms',
  'Cancel anytime with 30-day notice',
  'Dedicated support included',
  'Outcome-based pricing available',
]

export default function PricingPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-teal to-light-aqua text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Transparent, Startup-Friendly Pricing
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Flexible pricing plans designed for startups and SMEs. No enterprise markups, no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white" aria-label="Pricing plans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow ${
                  plan.popular ? 'ring-2 ring-ocean-teal relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ocean-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-dark mb-2">{plan.name}</h3>
                  <p className="text-neutral-dark/70 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-ocean-teal mb-2">{plan.price}</div>
                  <p className="text-sm text-neutral-dark/60">Starting from</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-ocean-teal mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-neutral-dark/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-ocean-teal text-white hover:bg-deep-blue'
                      : 'bg-sand text-ocean-teal hover:bg-light-aqua'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-sand" aria-label="Pricing benefits">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-8 text-center">
              Why Our Pricing Works for Startups
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 flex items-start space-x-3">
                  <Check className="w-6 h-6 text-ocean-teal mt-1 flex-shrink-0" aria-hidden="true" />
                  <p className="text-neutral-dark font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-white" aria-label="ROI">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-8">
              Save 20–40% vs Enterprise Agencies
            </h2>
            <p className="text-lg text-neutral-dark/70 mb-8 leading-relaxed">
              Our transparent pricing model eliminates hidden markups and agency fees. You get quality talent and consulting services at startup-friendly rates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Time-to-Hire', value: '50–70% faster' },
                { label: 'Cost Savings', value: '20–40% lower' },
                { label: 'Quality Match', value: '95%+ retention' },
              ].map((stat, index) => (
                <div key={index} className="bg-sand rounded-xl p-6">
                  <div className="text-3xl font-bold text-ocean-teal mb-2">{stat.value}</div>
                  <div className="text-neutral-dark/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-blue to-ocean-teal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get a Custom Quote
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your needs and provide a tailored pricing plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-ocean-teal rounded-lg font-semibold text-lg hover:bg-light-aqua transition-colors shadow-lg"
          >
            <span>Schedule a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

