import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Build Better Software Teams/i)).toBeInTheDocument()
  })

  it('renders the subheadline', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Akvi.ai helps enterprises hire top software talent/i)
    ).toBeInTheDocument()
  })

  it('renders primary CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Hire Talent Now')).toBeInTheDocument()
  })

  it('renders trust line', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Trusted by enterprises and growing SMEs/i)
    ).toBeInTheDocument()
  })
})
