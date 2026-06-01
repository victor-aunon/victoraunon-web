import { type JSX, ViewTransition } from 'react'
import Image from 'next/image'
import FallbackCover from 'components/Posts/PostCard/FallbackCover'

interface PostHeroProps {
  title: string
  slug: string
  imageUrl?: string
}

/**
 * Computes the FallbackCover seed the same way PostCard does:
 * sum of char codes of the slug % 100 + 1
 * Pure function — deterministic, no side effects.
 */
export function computeSeed(slug: string): number {
  return (slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 100) + 1
}

/**
 * PostHero — full-width banner shown at the top of each post page.
 *
 * - Uses next/image when imageUrl is provided (object-fit cover)
 * - Falls back to the animated FallbackCover SVG otherwise
 * - Overlays a dark gradient so the <h1> title is always legible
 */
export default function PostHero({
  title,
  slug,
  imageUrl,
}: PostHeroProps): JSX.Element {
  const seed = computeSeed(slug)

  return (
    <ViewTransition name={`post-cover-${slug}`}>
      <div className="w-full aspect-video md:aspect-[21/9] max-h-[500px] relative overflow-hidden rounded-2xl mb-8">
        {/* Background: real image or FallbackCover */}
        {imageUrl !== undefined ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        ) : (
          <FallbackCover seed={seed} />
        )}

        {/* Dark gradient overlay — ensures title text is legible */}
        <div className="bg-gradient-to-t from-zinc-950 to-transparent absolute inset-0" />

        {/* Post title — absolute, bottom-left, large */}
        <h1 className="absolute bottom-0 left-0 text-4xl md:text-5xl font-bold font-display text-white p-6 md:p-10 text-balance">
          {title}
        </h1>
      </div>
    </ViewTransition>
  )
}
