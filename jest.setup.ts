import '@testing-library/jest-dom'
import React from 'react'

// Mock next/image globally to prevent React console errors on native img elements
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    alt,
    fill: _fill,
    priority: _priority,
    blurDataURL: _blurDataURL,
    placeholder: _placeholder,
    sizes: _sizes,
    ...props
  }: {
    alt: string
    fill?: boolean
    priority?: boolean
    blurDataURL?: string
    placeholder?: string
    sizes?: string
    [key: string]: unknown
  }) => React.createElement('img', { alt, ...props }),
}))
jest.mock('react', () => {
  const originalReact = jest.requireActual('react')
  return {
    ...originalReact,
    ViewTransition: ({ children }: any) =>
      React.createElement(React.Fragment, null, children),
  }
})
