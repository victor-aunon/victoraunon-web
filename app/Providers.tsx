'use client'

import { useState, type JSX } from 'react'
import { QueryContext } from 'contexts/QueryContext'
import type { LayoutProps } from 'types/Layout'

export default function Providers({ children }: LayoutProps): JSX.Element {
  const [query, setQuery] = useState('')

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  )
}
