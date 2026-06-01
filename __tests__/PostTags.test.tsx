/**
 * Tests for the refactored PostTags component.
 * After Scriptora redesign: uses shadcn Badge for each tag link.
 * No SCSS imports.
 *
 * Strict TDD — approval tests written before refactoring.
 */
import React from 'react'
import { render, screen } from '@testing-library/react'

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

import PostTags from 'components/Posts/Article/PostTags/PostTags'

describe('PostTags', () => {
  it('renders the "Tags relacionados:" heading', () => {
    render(<PostTags tags={['react', 'typescript']} />)
    expect(screen.getByText('Tags relacionados:')).toBeInTheDocument()
  })

  it('renders a link for each tag', () => {
    render(<PostTags tags={['react', 'typescript']} />)
    expect(screen.getByText('react')).toBeInTheDocument()
    expect(screen.getByText('typescript')).toBeInTheDocument()
  })

  it('links each tag to the correct /posts?tag= URL', () => {
    render(<PostTags tags={['next', 'css']} />)
    const nextLink = screen.getByRole('link', { name: 'next' })
    expect(nextLink).toHaveAttribute('href', '/posts?tag=next')
    const cssLink = screen.getByRole('link', { name: 'css' })
    expect(cssLink).toHaveAttribute('href', '/posts?tag=css')
  })

  it('renders nothing meaningful when tags array is empty', () => {
    render(<PostTags tags={[]} />)
    const heading = screen.getByText('Tags relacionados:')
    expect(heading).toBeInTheDocument()
    // No tag links rendered
    const links = screen.queryAllByRole('link')
    expect(links).toHaveLength(0)
  })
})
