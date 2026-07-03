/**
 * Tests for PostHero component.
 * Strict TDD — tests written BEFORE implementation.
 *
 * Spec: full-width banner area at the top of each post page.
 * - Renders the post title as an <h1>
 * - Uses FallbackCover (with seed derived from slug) when imageUrl is absent
 * - Uses next/image when imageUrl is present
 * - Has a dark gradient overlay for legibility
 */
import { render, screen } from '@testing-library/react'

// Mock next/image
// Mock FallbackCover
jest.mock('components/Posts/PostCard/FallbackCover', () => ({
  __esModule: true,
  default: ({ seed }: { seed?: number }) => (
    <div data-testid="fallback-cover" data-seed={seed} />
  ),
}))

import PostHero from 'components/Posts/Article/PostHero'

describe('PostHero', () => {
  it('renders the post title as an h1', () => {
    render(<PostHero title="My Test Post" slug="my-test-post" />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('My Test Post')
  })

  it('renders FallbackCover when imageUrl is absent', () => {
    render(<PostHero title="Cover Post" slug="cover-post" />)
    expect(screen.getByTestId('fallback-cover')).toBeInTheDocument()
  })

  it('does NOT render an img when imageUrl is absent', () => {
    render(<PostHero title="Cover Post" slug="cover-post" />)
    expect(screen.queryByRole('img')).toBeNull()
  })

  it('renders next/image (img) when imageUrl is present', () => {
    render(
      <PostHero
        title="Image Post"
        slug="image-post"
        imageUrl="/hero-image.jpg"
      />
    )
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(screen.queryByTestId('fallback-cover')).toBeNull()
  })

  it('passes the correct seed to FallbackCover (sum of char codes % 100 + 1)', () => {
    // "abc" → 97+98+99 = 294, 294 % 100 + 1 = 95
    render(<PostHero title="ABC Post" slug="abc" />)
    const fallback = screen.getByTestId('fallback-cover')
    expect(fallback).toHaveAttribute('data-seed', '95')
  })

  it('passes a different seed for a different slug', () => {
    // "hello" → 104+101+108+108+111 = 532, 532 % 100 + 1 = 33
    render(<PostHero title="Hello Post" slug="hello" />)
    const fallback = screen.getByTestId('fallback-cover')
    expect(fallback).toHaveAttribute('data-seed', '33')
  })

  it('renders a dark gradient overlay element', () => {
    const { container } = render(
      <PostHero title="Gradient Test" slug="gradient-test" />
    )
    // The gradient overlay must be present — detected by its role as a decorative div
    // We check for a div with a class containing "gradient" or "bg-gradient"
    const gradientEl = container.querySelector('[class*="gradient"]')
    expect(gradientEl).toBeInTheDocument()
  })
})
