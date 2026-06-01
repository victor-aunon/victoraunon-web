/**
 * Tests for the refactored PostCard component.
 * After Scriptora redesign: shadcn Card + FallbackCover when no image.
 * No SCSS, no gridRowEnd resize logic.
 *
 * Strict TDD — approval tests written before refactoring.
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import type { PostMetadata } from 'types/Post'

// Mock next/image
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

// Mock QueryContext
jest.mock('contexts/QueryContext', () => ({
  QueryContext: require('react').createContext({
    query: '',
    setQuery: jest.fn(),
  }),
}))

// Mock FallbackCover
jest.mock('components/Posts/PostCard/FallbackCover', () => ({
  __esModule: true,
  default: () => <div data-testid="fallback-cover" />,
}))

import PostCard from 'components/Posts/PostCard/PostCard'

const basePost: PostMetadata = {
  slug: 'test-post',
  title: 'Test Post Title',
  author: 'Author',
  excerpt: 'This is the excerpt text.',
  description: 'Description',
  date: '2024-01-15',
  tags: ['react', 'typescript'],
  readTime: 5,
}

describe('PostCard', () => {
  it('renders the post title', () => {
    render(<PostCard {...basePost} />)
    expect(screen.getByText('Test Post Title')).toBeInTheDocument()
  })

  it('renders the post excerpt', () => {
    render(<PostCard {...basePost} />)
    expect(screen.getByText('This is the excerpt text.')).toBeInTheDocument()
  })

  it('links to the correct post URL', () => {
    render(<PostCard {...basePost} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/posts/test-post')
  })

  it('renders FallbackCover when imageUrl is absent', () => {
    render(<PostCard {...basePost} />)
    expect(screen.getByTestId('fallback-cover')).toBeInTheDocument()
  })

  it('renders an img when imageUrl is present', () => {
    const postWithImage = { ...basePost, imageUrl: '/test-image.jpg' }
    render(<PostCard {...postWithImage} />)
    const img = screen.getByAltText('test-post')
    expect(img).toBeInTheDocument()
    expect(screen.queryByTestId('fallback-cover')).toBeNull()
  })
})
