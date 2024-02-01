'use client'

import { useEffect, useState } from 'react'
import { ThemeContext } from 'contexts/ThemeContext'
import { QueryContext } from 'contexts/QueryContext'
import type { LayoutProps } from 'types/Layout'
import type { Theme } from 'types/SiteConfig'

export default function Providers({ children }: LayoutProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('dark')
  const [query, setQuery] = useState('')

  function getDefaultTheme(): Theme {
    let isBrowserDark = true
    let localStorageTheme: string | null = null
    if (typeof window !== 'undefined') {
      // Detect if the system default mode is dark or not
      isBrowserDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      // Get theme value from local storage
      localStorageTheme = localStorage.getItem('theme')
    }
    const browserDefaultTheme: Theme = isBrowserDark ? 'dark' : 'light'
    return (localStorageTheme as Theme) ?? browserDefaultTheme
  }

  useEffect(() => {
    setTheme(getDefaultTheme())
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <QueryContext.Provider value={{ query, setQuery }}>
        {children}
      </QueryContext.Provider>
    </ThemeContext.Provider>
  )
}
