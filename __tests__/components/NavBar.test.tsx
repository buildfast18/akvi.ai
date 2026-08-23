import { render, screen } from '@testing-library/react'
import NavBar from '@/components/NavBar'
import { usePathname } from 'next/navigation'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ priority, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('NavBar', () => {
  beforeEach(() => {
    ;(usePathname as jest.Mock).mockReturnValue('/')
  })

  it('renders the logo', () => {
    render(<NavBar />)
    const logo = screen.getByAltText('Akvi.ai Logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<NavBar />)
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Careers').length).toBeGreaterThan(0)
    expect(screen.queryByRole('link', { name: /^Contact$/i })).not.toBeInTheDocument()
  })

  it('renders the CTA button to the contact page', () => {
    render(<NavBar />)
    const cta = screen.getByRole('link', { name: 'Talk to an Expert' })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/contact')
  })

  it('renders the AI Recruiting Agent link to the ATS app', () => {
    render(<NavBar />)
    const agentLinks = screen.getAllByRole('link', {
      name: /open akvi ai recruiting agent/i,
    })
    expect(agentLinks.length).toBeGreaterThan(0)
    agentLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://agent-ats.akvi.ai/')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('has proper ARIA labels', () => {
    render(<NavBar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()
  })
})

