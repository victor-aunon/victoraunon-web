/**
 * Tests for the refactored PostsList component.
 * After Scriptora redesign: Tailwind responsive grid, no SCSS, no JS masonry.
 *
 * Strict TDD — approval tests written before refactoring.
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import type { PostMetadata } from 'types/Post'

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => null), // no tag filter by default
  })),
  usePathname: jest.fn(() => '/'),
}))

// Mock QueryContext — factory must not reference out-of-scope variables
jest.mock('contexts/QueryContext', () => ({
  QueryContext: require('react').createContext({
    query: '',
    setQuery: jest.fn(),
  }),
}))

// Mock child card components to isolate PostsList logic
jest.mock('components/Posts/PostCard', () => ({
  PostCard: ({ postInfo }: { postInfo: { title: string } }) => (
    <li data-testid="post-card">{postInfo.title}</li>
  ),
  PostCardSimple: ({ title }: { title: string }) => (
    <li data-testid="post-card-simple">{title}</li>
  ),
}))

import PostsList from 'components/Posts/PostsList'

const mockPosts: PostMetadata[] = [
  {
    slug: 'post-1',
    title: 'Post One',
    author: 'Author',
    excerpt: 'First excerpt',
    description: 'Desc',
    date: '2024-01-01',
    tags: ['react'],
    readTime: 3,
  },
  {
    slug: 'post-2',
    title: 'Post Two',
    author: 'Author',
    excerpt: 'Second excerpt',
    description: 'Desc',
    date: '2024-01-02',
    tags: ['css'],
    readTime: 5,
  },
]

describe('PostsList', () => {
  it('renders a PostCard for each post on the home page (/)', () => {
    render(<PostsList allPosts={mockPosts} />)
    const cards = screen.getAllByTestId('post-card')
    expect(cards).toHaveLength(2)
  })

  it('renders all post titles', () => {
    render(<PostsList allPosts={mockPosts} />)
    expect(screen.getByText('Post One')).toBeInTheDocument()
    expect(screen.getByText('Post Two')).toBeInTheDocument()
  })

  it('renders the no-results message when no posts match', () => {
    render(<PostsList allPosts={[]} />)
    expect(
      screen.getByText('No hay posts que coincidan con tu búsqueda 🫂')
    ).toBeInTheDocument()
  })
})
