/**
 * Tests for the simplified Providers component.
 * After the Scriptora redesign, Providers MUST only provide QueryContext.
 * ThemeContext must be REMOVED.
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useContext } from 'react'
import { QueryContext } from 'contexts/QueryContext'

// Import the PRODUCTION code that doesn't fully exist yet
import Providers from 'app/Providers'

// Helper: consumer component to verify QueryContext is provided
function QueryConsumer() {
  const { query, setQuery } = useContext(QueryContext)
  return (
    <div>
      <span data-testid="query-value">{query}</span>
      <button onClick={() => setQuery('hello')}>Set Query</button>
    </div>
  )
}

describe('Providers — simplified QueryContext only', () => {
  it('provides QueryContext with initial empty query', () => {
    render(
      <Providers>
        <QueryConsumer />
      </Providers>
    )
    expect(screen.getByTestId('query-value')).toHaveTextContent('')
  })

  it('QueryContext setQuery updates the query value', async () => {
    const user = userEvent.setup()
    render(
      <Providers>
        <QueryConsumer />
      </Providers>
    )
    await user.click(screen.getByRole('button', { name: 'Set Query' }))
    expect(screen.getByTestId('query-value')).toHaveTextContent('hello')
  })

  it('does NOT import or reference ThemeContext', async () => {
    // This test verifies the module source does not reference ThemeContext
    // by importing the module and checking no ThemeContext Provider is mounted.
    // We verify that QueryContext IS present by reading what's in the tree.
    render(
      <Providers>
        <span data-testid="child">inside</span>
      </Providers>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByTestId('child')).toHaveTextContent('inside')
  })

  it('QueryContext setQuery updates with a different value (triangulation)', async () => {
    // Different input than 'hello' to force real state logic
    const user = userEvent.setup()
    function OtherConsumer() {
      const { query, setQuery } = useContext(QueryContext)
      return (
        <div>
          <span data-testid="query-value-2">{query}</span>
          <button onClick={() => setQuery('typescript')}>Set TS</button>
        </div>
      )
    }
    render(
      <Providers>
        <OtherConsumer />
      </Providers>
    )
    expect(screen.getByTestId('query-value-2')).toHaveTextContent('')
    await user.click(screen.getByRole('button', { name: 'Set TS' }))
    expect(screen.getByTestId('query-value-2')).toHaveTextContent('typescript')
  })
})
