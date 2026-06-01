/**
 * Tests for FallbackCover component.
 * Strict TDD — specs define behavior before implementation.
 *
 * Spec: renders an SVG with organic mesh/lava gradient (radialGradient blobs)
 * + prominent feTurbulence noise. Accepts an optional `seed` prop for per-post variation.
 */
import React from 'react'
import { render } from '@testing-library/react'
import FallbackCover from 'components/Posts/PostCard/FallbackCover'
import { getGradientConfig } from 'components/Posts/PostCard/FallbackCover'

describe('FallbackCover', () => {
  it('renders an SVG element', () => {
    render(<FallbackCover />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders a feTurbulence filter element inside the SVG', () => {
    render(<FallbackCover />)
    const feTurbulence = document.querySelector('feTurbulence')
    expect(feTurbulence).toBeInTheDocument()
  })

  it('uses the default seed of 1 when no seed prop is provided', () => {
    render(<FallbackCover />)
    const feTurbulence = document.querySelector('feTurbulence')
    expect(feTurbulence?.getAttribute('seed')).toBe('1')
  })

  it('uses the provided seed prop for variation', () => {
    render(<FallbackCover seed={42} />)
    const feTurbulence = document.querySelector('feTurbulence')
    expect(feTurbulence?.getAttribute('seed')).toBe('42')
  })

  it('renders with a descriptive aria-label for accessibility', () => {
    render(<FallbackCover />)
    const svg = document.querySelector('svg')
    expect(svg?.getAttribute('aria-label')).toBe('Post cover placeholder')
  })

  it('grain overlay has opacity of at least 0.8 for strong visual effect (lava style)', () => {
    render(<FallbackCover />)
    // The grain rect is the last rect in the document — background rects precede it
    const rects = document.querySelectorAll('rect')
    expect(rects.length).toBeGreaterThanOrEqual(2)
    const grainRect = rects[rects.length - 1]
    const opacity = parseFloat(grainRect.getAttribute('opacity') ?? '0')
    expect(opacity).toBeGreaterThanOrEqual(0.8)
  })

  it('feTurbulence baseFrequency is set for prominent grain (>= 0.6)', () => {
    render(<FallbackCover />)
    const feTurbulence = document.querySelector('feTurbulence')
    const baseFreq = parseFloat(
      feTurbulence?.getAttribute('baseFrequency') ?? '0'
    )
    expect(baseFreq).toBeGreaterThanOrEqual(0.6)
  })

  it('renders at least 2 radialGradient elements for mesh/lava blob effect', () => {
    render(<FallbackCover />)
    const radialGradients = document.querySelectorAll('radialGradient')
    expect(radialGradients.length).toBeGreaterThanOrEqual(2)
  })

  it('renders blob circles positioned at different coordinates for organic feel', () => {
    render(<FallbackCover />)
    // Circles are used as blob overlays — at least 2 must exist
    const circles = document.querySelectorAll('circle')
    expect(circles.length).toBeGreaterThanOrEqual(2)
  })
})

describe('getGradientConfig — pure function for per-post palette selection', () => {
  it('returns an object with a baseColor string for seed 0', () => {
    const config = getGradientConfig(0)
    expect(config).toHaveProperty('baseColor')
    expect(typeof config.baseColor).toBe('string')
  })

  it('returns an object with a blobs array for seed 0', () => {
    const config = getGradientConfig(0)
    expect(config).toHaveProperty('blobs')
    expect(Array.isArray(config.blobs)).toBe(true)
    expect(config.blobs.length).toBeGreaterThanOrEqual(2)
  })

  it('each blob has a color property (vibrant fill color)', () => {
    const config = getGradientConfig(1)
    config.blobs.forEach((blob: { color: string }) => {
      expect(typeof blob.color).toBe('string')
      expect(blob.color).toMatch(/^#/)
    })
  })

  it('returns different palettes for seed 0 vs seed 1 (gradient varies by seed)', () => {
    const config0 = getGradientConfig(0)
    const config1 = getGradientConfig(1)
    expect(config0.baseColor).not.toBe(config1.baseColor)
  })

  it('cycles through exactly 4 patterns — seed 4 matches seed 0', () => {
    const config0 = getGradientConfig(0)
    const config4 = getGradientConfig(4)
    expect(config4.baseColor).toBe(config0.baseColor)
    expect(config4.blobs).toEqual(config0.blobs)
  })

  it('seed 3 returns the same palette as seed 7 (7 % 4 === 3)', () => {
    const config3 = getGradientConfig(3)
    const config7 = getGradientConfig(7)
    expect(config7.baseColor).toBe(config3.baseColor)
    expect(config7.blobs).toEqual(config3.blobs)
  })
})
