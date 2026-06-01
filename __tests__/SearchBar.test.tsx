/**
 * Tests for the refactored SearchBar component.
 * After Scriptora redesign: uses shadcn Input + lucide-react Search icon.
 * No SCSS imports.
 *
 * Strict TDD — approval tests written before refactoring.
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/posts'),
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}))

// Mock QueryContext — factory must not reference out-of-scope variables (hoisting)
jest.mock('contexts/QueryContext', () => ({
  QueryContext: require('react').createContext({
    query: '',
    setQuery: jest.fn(),
  }),
}))

const mockSetQuery = jest.fn()

import SearchBar from 'components/SearchBar/SearchBar'

describe('SearchBar', () => {
  beforeEach(() => {
    mockSetQuery.mockClear()
  })

  it('renders a search input element', () => {
    render(<SearchBar parent="main" />)
    const input = screen.getByPlaceholderText('Buscar posts')
    expect(input).toBeInTheDocument()
  })

  it('renders a clear/delete button', () => {
    render(<SearchBar parent="main" />)
    // The clear button should be present
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('updates the search value when user types', async () => {
    render(<SearchBar parent="main" />)
    const input = screen.getByPlaceholderText('Buscar posts')
    await userEvent.type(input, 'react')
    expect(input).toHaveValue('react')
  })

  it('clears the search input when the clear button is clicked', async () => {
    render(<SearchBar parent="main" />)
    const input = screen.getByPlaceholderText('Buscar posts')
    await userEvent.type(input, 'angular')
    expect(input).toHaveValue('angular')

    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(input).toHaveValue('')
  })
})
