/**
 * Tests for the refactored PostCardSimple component.
 * After Scriptora redesign: shadcn Card + FallbackCover fallback.
 * No SCSS.
 *
 * Strict TDD — approval tests written before refactoring.
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import type { PostMetadata } from 'types/Post'

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    href,
    children,
    className,
  }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}))

// Mock next/image
// Mock FallbackCover
jest.mock('components/Posts/PostCard/FallbackCover', () => ({
  __esModule: true,
  default: () => <div data-testid="fallback-cover" />,
}))

import PostCardSimple from 'components/Posts/PostCard/PostCardSimple'

const basePost: PostMetadata = {
  slug: 'simple-post',
  title: 'Simple Post Title',
  author: 'Author',
  excerpt: 'Excerpt text here.',
  description: 'Description',
  date: '2024-03-01',
  tags: ['css', 'design'],
  readTime: 3,
}

describe('PostCardSimple', () => {
  it('renders the post title', () => {
    render(<PostCardSimple {...basePost} />)
    expect(screen.getByText('Simple Post Title')).toBeInTheDocument()
  })

  it('links to the correct post URL', () => {
    render(<PostCardSimple {...basePost} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/posts/simple-post')
  })

  it('renders FallbackCover when imageUrl is absent', () => {
    render(<PostCardSimple {...basePost} />)
    expect(screen.getByTestId('fallback-cover')).toBeInTheDocument()
  })

  it('renders an img when imageUrl is present', () => {
    const postWithImage = { ...basePost, imageUrl: '/simple-image.jpg' }
    render(<PostCardSimple {...postWithImage} />)
    const img = screen.getByAltText('simple-post')
    expect(img).toBeInTheDocument()
    expect(screen.queryByTestId('fallback-cover')).toBeNull()
  })
})
