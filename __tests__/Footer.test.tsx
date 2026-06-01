/**
 * Tests for the refactored Footer component.
 * After Scriptora redesign: uses Tailwind classes, no SCSS imports.
 * Must render legal nav links and copyright text.
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from 'components/Footer/Footer'

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

describe('Footer — Tailwind-based layout', () => {
  it('renders the copyright text with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(`Víctor Auñón © ${year}`)).toBeInTheDocument()
  })

  it('renders the "Aviso legal" navigation link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Aviso legal' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/legal')
  })

  it('renders the "Política de privacidad" navigation link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Política de privacidad' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/privacy')
  })

  it('renders the "Política de cookies" navigation link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Política de cookies' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/cookies')
  })
})
