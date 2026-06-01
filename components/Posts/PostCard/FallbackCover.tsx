import type { JSX } from 'react'

interface BlobConfig {
  /** Hex color for the radial gradient center */
  color: string
  /** Center X as SVG percentage string, e.g. "20%" */
  cx: string
  /** Center Y as SVG percentage string, e.g. "30%" */
  cy: string
}

interface GradientConfig {
  /** Dark base fill color for the background rect */
  baseColor: string
  /** 2–3 vibrant blob definitions for radialGradient overlays */
  blobs: BlobConfig[]
}

const GRADIENT_PATTERNS: GradientConfig[] = [
  // 0 — Lava: dark red base, bright orange + hot yellow + crimson blobs
  {
    baseColor: '#1a0000',
    blobs: [
      { color: '#ff4500', cx: '20%', cy: '30%' },
      { color: '#ffcc00', cx: '80%', cy: '80%' },
      { color: '#cc0000', cx: '50%', cy: '100%' },
    ],
  },
  // 1 — Neon Green: very dark green base, neon green + cyan + emerald blobs
  {
    baseColor: '#001a08',
    blobs: [
      { color: '#00ff66', cx: '75%', cy: '20%' },
      { color: '#00ffff', cx: '15%', cy: '70%' },
      { color: '#00cc44', cx: '55%', cy: '90%' },
    ],
  },
  // 2 — Cyber Pink: deep purple base, hot magenta + electric blue blobs
  {
    baseColor: '#0d0020',
    blobs: [
      { color: '#ff00ff', cx: '25%', cy: '25%' },
      { color: '#0044ff', cx: '80%', cy: '60%' },
      { color: '#aa00ff', cx: '50%', cy: '95%' },
    ],
  },
  // 3 — Solar Flare: magenta base, bright gold + deep orange blobs
  {
    baseColor: '#1a0010',
    blobs: [
      { color: '#ffd700', cx: '70%', cy: '15%' },
      { color: '#ff6600', cx: '20%', cy: '75%' },
      { color: '#ff0088', cx: '55%', cy: '50%' },
    ],
  },
]

/**
 * Returns the gradient configuration for a given seed value.
 * Cycles through 4 distinct patterns using `seed % 4`.
 * Pure function — deterministic, no side effects.
 */
export function getGradientConfig(seed: number): GradientConfig {
  return GRADIENT_PATTERNS[seed % GRADIENT_PATTERNS.length]
}

interface FallbackCoverProps {
  seed?: number
}

/**
 * FallbackCover — SVG mesh/lava gradient placeholder for posts without cover images.
 *
 * Uses a dark base rect + 2–3 overlapping radialGradient circles (blobs) to
 * create an organic "lava lamp" / mesh gradient feel. feTurbulence noise is
 * composited over the top at high opacity for a harsh, editorial grain effect.
 *
 * The `seed` prop controls:
 *  1. The turbulence noise pattern (unique per-post texture)
 *  2. The color palette (4 vibrant palettes via seed % 4)
 */
const blobGradId = (seed: number, index: number) => `blob-${seed}-${index}`

export default function FallbackCover({
  seed = 1,
}: FallbackCoverProps): JSX.Element {
  const filterId = `grain-${seed}`
  const { baseColor, blobs } = getGradientConfig(seed)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      aria-label="Post cover placeholder"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        {/* Radial gradient blobs — one per palette entry */}
        {blobs.map((blob, i) => {
          const gradId = blobGradId(seed, i)
          return (
            <radialGradient
              key={gradId}
              id={gradId}
              cx={blob.cx}
              cy={blob.cy}
              r="70%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={blob.color} stopOpacity="1" />
              <stop offset="100%" stopColor={blob.color} stopOpacity="0" />
            </radialGradient>
          )
        })}

        {/* Noise grain filter */}
        <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            seed={seed}
            result="noise"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            in="noise"
            result="greyNoise"
          />
          <feBlend
            in="SourceGraphic"
            in2="greyNoise"
            mode="overlay"
            result="blended"
          />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      {/* Dark base */}
      <rect width="100%" height="100%" fill={baseColor} />

      {/* Vibrant blob overlays — stacked circles with radial gradients */}
      {blobs.map((blob, i) => {
        const gradId = blobGradId(seed, i)
        return (
          <circle
            key={gradId}
            cx={blob.cx}
            cy={blob.cy}
            r="70%"
            fill={`url(#${gradId})`}
            style={{ mixBlendMode: 'screen' }}
          />
        )
      })}

      {/* Harsh noise overlay — high opacity for pronounced lava grain */}
      <rect
        width="100%"
        height="100%"
        fill="transparent"
        filter={`url(#${filterId})`}
        opacity="0.85"
      />
    </svg>
  )
}
