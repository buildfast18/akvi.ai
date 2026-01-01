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
  default: (props: any) => {
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
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<NavBar />)
    expect(screen.getByText('Talk to an Expert')).toBeInTheDocument()
  })

  it('has proper ARIA labels', () => {
    render(<NavBar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()
  })
})

