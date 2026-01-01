import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Akvi.ai | Insights & Resources',
  description: 'Read insights, tips, and resources about software consulting, AI-powered staffing, and building high-performing teams.',
}

const blogPosts = [
  {
    title: 'How AI is Transforming Software Talent Acquisition',
    excerpt: 'Discover how AI-driven matching is revolutionizing the way startups and SMEs hire software engineers.',
    date: '2024-01-15',
    category: 'AI & Technology',
    href: '/blog/ai-talent-acquisition',
  },
  {
    title: '5 Tips for Scaling Your Engineering Team in 2024',
    excerpt: 'Practical strategies for growing your software team efficiently without compromising on quality.',
    date: '2024-01-10',
    category: 'Team Building',
    href: '/blog/scaling-engineering-teams',
  },
  {
    title: 'The Future of Remote Software Teams',
    excerpt: 'Exploring trends and best practices for building and managing distributed software teams.',
    date: '2024-01-05',
    category: 'Remote Work',
    href: '/blog/remote-software-teams',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-teal to-light-aqua text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Insights, tips, and resources to help you build better software teams and deliver successful projects.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white" aria-label="Blog posts">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-neutral-dark/5"
              >
                <div className="mb-4">
                  <span className="text-sm text-ocean-teal font-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-neutral-dark mb-3">
                  {post.title}
                </h2>
                <p className="text-neutral-dark/70 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-neutral-dark/60">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <Link
                    href={post.href}
                    className="inline-flex items-center space-x-2 text-ocean-teal font-semibold hover:text-deep-blue transition-colors"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-neutral-dark/70 mb-4">
              More blog posts coming soon!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-ocean-teal text-white rounded-lg font-semibold hover:bg-deep-blue transition-colors"
            >
              <span>Subscribe to Updates</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

