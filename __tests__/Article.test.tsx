/**
 * Tests for the refactored Article component.
 * After Scriptora redesign: MDContent wrapped in prose prose-zinc prose-invert.
 * PostHero renders at the top with title + cover image.
 * No SCSS imports.
 *
 * Strict TDD — approval tests written before refactoring.
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import type { Post } from 'types/Post'

// Mock all dynamic imports and child components
jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (_importFn: () => Promise<unknown>) => {
    // Return a no-op component for dynamic imports (ReadProgressBar, CommentsBox)
    return () => null
  },
}))

jest.mock(
  'components/Posts/Article/MDContent',
  () => ({
    __esModule: true,
    default: () => <div data-testid="md-content">MDX Content</div>,
  }),
  { virtual: false }
)

jest.mock('components/Posts/Article/PostInfo', () => ({
  PostInfo: () => <div data-testid="post-info" />,
}))

jest.mock('components/Posts/Article/PostTags', () => ({
  PostTags: () => <div data-testid="post-tags" />,
}))

jest.mock('components/Posts/Article/PostTOC', () => ({
  PostTOC: () => <div data-testid="post-toc" />,
}))

jest.mock('components/Posts/Article/PostHero', () => ({
  __esModule: true,
  default: ({
    title,
    slug,
  }: {
    title: string
    slug: string
    imageUrl?: string
  }) => <div data-testid="post-hero" data-title={title} data-slug={slug} />,
}))

import Article from 'components/Posts/Article/Article'

const mockContent = {
  compiledSource: '',
  frontmatter: {},
  scope: {},
} as unknown as Post['content']

const mockMetadata: Post['metadata'] = {
  slug: 'test-article',
  title: 'Test Article',
  author: 'Author',
  excerpt: 'Excerpt',
  description: 'Description',
  date: '2024-01-01',
  tags: ['react'],
  readTime: 5,
}

describe('Article', () => {
  it('renders the MDContent component', () => {
    render(
      <Article
        content={mockContent}
        metadata={mockMetadata}
        commentsBoxShortname="shortname"
      />
    )
    expect(screen.getByTestId('md-content')).toBeInTheDocument()
  })

  it('renders an article element as the root container', () => {
    render(
      <Article
        content={mockContent}
        metadata={mockMetadata}
        commentsBoxShortname="shortname"
      />
    )
    const article = document.querySelector('article')
    expect(article).toBeInTheDocument()
  })

  it('renders the PostInfo component', () => {
    render(
      <Article
        content={mockContent}
        metadata={mockMetadata}
        commentsBoxShortname="shortname"
      />
    )
    expect(screen.getByTestId('post-info')).toBeInTheDocument()
  })

  it('renders the PostTags component', () => {
    render(
      <Article
        content={mockContent}
        metadata={mockMetadata}
        commentsBoxShortname="shortname"
      />
    )
    expect(screen.getByTestId('post-tags')).toBeInTheDocument()
  })

  it('renders the PostHero component', () => {
    render(
      <Article
        content={mockContent}
        metadata={mockMetadata}
        commentsBoxShortname="shortname"
      />
    )
    expect(screen.getByTestId('post-hero')).toBeInTheDocument()
  })

  it('passes title and slug to PostHero', () => {
    render(
      <Article
        content={mockContent}
        metadata={mockMetadata}
        commentsBoxShortname="shortname"
      />
    )
    const hero = screen.getByTestId('post-hero')
    expect(hero).toHaveAttribute('data-title', 'Test Article')
    expect(hero).toHaveAttribute('data-slug', 'test-article')
  })
})
