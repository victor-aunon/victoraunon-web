/**
 * Tests for the refactored CloudTag component.
 * After Scriptora redesign: uses shadcn Badge for each tag link.
 * No SCSS imports.
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
  }: {
    href: string
    children: React.ReactNode
  }) => <a href={href}>{children}</a>,
}))

import CloudTag from 'components/CloudTag/CloudTag'

const mockPosts: PostMetadata[] = [
  {
    slug: 'post-1',
    title: 'Post 1',
    author: 'Author',
    excerpt: 'Excerpt',
    description: 'Desc',
    date: '2024-01-01',
    tags: ['react', 'typescript', 'next'],
    readTime: 5,
  },
  {
    slug: 'post-2',
    title: 'Post 2',
    author: 'Author',
    excerpt: 'Excerpt',
    description: 'Desc',
    date: '2024-01-02',
    tags: ['react', 'css'],
    readTime: 3,
  },
]

describe('CloudTag', () => {
  it('renders a section heading "Tags populares"', () => {
    render(<CloudTag posts={mockPosts} parent="main" />)
    expect(screen.getByText('Tags populares')).toBeInTheDocument()
  })

  it('renders a link for each unique tag', () => {
    render(<CloudTag posts={mockPosts} parent="main" />)
    // mockPosts has: react, typescript, next, css (4 unique)
    expect(screen.getByText('react')).toBeInTheDocument()
    expect(screen.getByText('typescript')).toBeInTheDocument()
    expect(screen.getByText('next')).toBeInTheDocument()
    expect(screen.getByText('css')).toBeInTheDocument()
  })

  it('links each tag to the correct posts?tag= URL', () => {
    render(<CloudTag posts={mockPosts} parent="main" />)
    const reactLink = screen.getByRole('link', { name: 'react' })
    expect(reactLink).toHaveAttribute('href', '/posts?tag=react')
  })

  it('renders no tags when posts array is empty', () => {
    render(<CloudTag posts={[]} parent="sideBar" />)
    const heading = screen.getByText('Tags populares')
    expect(heading).toBeInTheDocument()
    // No tag links
    const links = screen.queryAllByRole('link')
    expect(links).toHaveLength(0)
  })
})
