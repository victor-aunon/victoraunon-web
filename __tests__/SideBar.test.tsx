/**
 * Tests for the refactored SideBar component.
 * After Scriptora redesign: Tailwind aside layout, no SCSS.
 *
 * Strict TDD — approval tests written before refactoring.
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import type { PostMetadata } from 'types/Post'

// Mock child components to isolate SideBar structure
jest.mock('components/CloudTag', () => ({
  CloudTag: () => <div data-testid="cloud-tag-mock" />,
}))

jest.mock('components/SearchBar', () => ({
  SearchBar: () => <div data-testid="search-bar-mock" />,
}))

import SideBar from 'components/SideBar/SideBar'

const mockPosts: PostMetadata[] = [
  {
    slug: 'post-1',
    title: 'Post 1',
    author: 'Author',
    excerpt: 'Excerpt',
    description: 'Desc',
    date: '2024-01-01',
    tags: ['react'],
    readTime: 5,
  },
]

describe('SideBar', () => {
  it('renders the SearchBar child component', () => {
    render(<SideBar allPosts={mockPosts} />)
    expect(screen.getByTestId('search-bar-mock')).toBeInTheDocument()
  })

  it('renders the CloudTag child component', () => {
    render(<SideBar allPosts={mockPosts} />)
    expect(screen.getByTestId('cloud-tag-mock')).toBeInTheDocument()
  })

  it('renders an aside element as the root', () => {
    render(<SideBar allPosts={mockPosts} />)
    const aside = document.querySelector('aside')
    expect(aside).toBeInTheDocument()
  })
})
