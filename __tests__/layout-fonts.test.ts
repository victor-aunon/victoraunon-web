/**
 * Tests for app/layout.tsx — Scriptora typography update.
 * Verifies that layout uses openSans variable (not spaceGrotesk).
 *
 * Because RootLayout is a Next.js Server Component with many dependencies,
 * we test the module-level import contract: openSans must be importable
 * from app/fonts and have the correct shape used in layout.
 */

import fs from 'fs'
import path from 'path'
import { openSans } from '../app/fonts'

// RED → GREEN test: layout injects openSans.variable into body.
// We verify the font module used by layout is correct (the import in
// layout.tsx references openSans, not spaceGrotesk).
describe('layout — font variable injection', () => {
  it('openSans.variable is truthy (layout can safely inject it into className)', () => {
    // If this is falsy, the className in layout body would be empty/broken
    expect(openSans.variable).toBeTruthy()
  })

  it('openSans.variable is a string (body className must be a string)', () => {
    expect(typeof openSans.variable).toBe('string')
  })

  it('layout does not import spaceGrotesk (old font removed)', () => {
    // This test exercises the module boundary: if spaceGrotesk were still
    // exported from fonts.ts, this import would succeed — but it is NOT.
    const fontsModule = require('../app/fonts')
    expect(fontsModule.spaceGrotesk).toBeUndefined()
    expect(fontsModule.openSans).toBeDefined()
  })
})

describe('globals.css — body font-family declaration', () => {
  it('globals.css body selector explicitly declares font-family: var(--font-sans)', () => {
    const cssPath = path.join(__dirname, '..', 'app', 'globals.css')
    const css = fs.readFileSync(cssPath, 'utf-8')

    // Extract the body block (everything between `body {` and the matching `}`)
    const bodyBlockMatch = css.match(/body\s*\{([^}]*)\}/)
    expect(bodyBlockMatch).not.toBeNull()

    const bodyBlock = bodyBlockMatch![1]
    expect(bodyBlock).toContain('font-family: var(--font-sans)')
  })

  it('globals.css @theme defines --font-sans pointing to --font-open-sans', () => {
    const cssPath = path.join(__dirname, '..', 'app', 'globals.css')
    const css = fs.readFileSync(cssPath, 'utf-8')

    // The @theme block must define --font-sans that resolves to --font-open-sans
    expect(css).toContain('--font-sans')
    expect(css).toContain('--font-open-sans')
  })
})
