/**
 * Tests for the refactored Header component.
 * After Scriptora redesign: uses Tailwind classes, no SCSS imports.
 * Must render nav links for "Sobre mí" and "Contáctame".
 * Must render the site name "Víctor Auñón".
 * Must render a profile image.
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from 'components/Header/Header'

// Mock next/image to avoid Next.js image optimization in tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, ...props }: { alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}))

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    href,
    children,
  }: {
    href: string
    children: React.ReactNode
  }) => <a href={href}>{children}</a>,
}))

// The Header currently imports from 'components/Social' — mock it
jest.mock('components/Social', () => ({
  Social: () => <div data-testid="social-mock" />,
}))

describe('Header — Tailwind-based nav', () => {
  it('renders the site name', () => {
    render(<Header />)
    expect(screen.getByText('Víctor Auñón')).toBeInTheDocument()
  })

  it('renders the profile image with correct alt text', () => {
    render(<Header />)
    const img = screen.getByAltText('Photo of Víctor Auñón')
    expect(img).toBeInTheDocument()
  })

  it('renders the "Sobre mí" navigation link', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: 'Sobre mí' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
  })

  it('renders the "Contáctame" navigation link', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: 'Contáctame' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/contact')
  })
})
