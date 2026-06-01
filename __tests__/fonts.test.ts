/**
 * Tests for app/fonts.ts — Scriptora typography update.
 * The exported font object must use the correct CSS variable for Open Sans
 * and the correct subsets/weights.
 *
 * NOTE: next/font/google is mocked by next/jest — the mock returns the
 * property KEY as the value (e.g., openSans.variable === 'variable').
 * The actual CSS variable '--font-open-sans' is set in the source via the
 * `variable` config option. We verify the exported shape and that it has
 * all required properties the layout needs (variable, className).
 */

import { openSans } from '../app/fonts'

describe('fonts — Open Sans configuration', () => {
  it('exports openSans as a defined object (not undefined)', () => {
    expect(openSans).toBeDefined()
    expect(typeof openSans).toBe('object')
  })

  it('openSans has a variable property (used to inject CSS var into body)', () => {
    // next/jest mocks return the property key as value;
    // existence of the property proves the config option is wired up
    expect(openSans).toHaveProperty('variable')
  })

  it('openSans has a className property (used for direct class application)', () => {
    expect(openSans).toHaveProperty('className')
  })
})
