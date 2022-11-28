'use client'

import { useEffect, useState } from 'react'
import { ThemeContext } from 'contexts/ThemeContext'
import { LayoutProps } from 'interfaces/Layout'

export default function Providers({ children }: LayoutProps): JSX.Element {
  const [theme, setTheme] = useState('dark')

  function getDefaultTheme(): string {
    let isBrowserDark = true
    let localStorageTheme: string | null = null
    if (typeof window !== 'undefined') {
      // Detect if the system default mode is dark or not
      isBrowserDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      // Get theme value from local storage
      localStorageTheme = localStorage.getItem('theme')
    }
    const browserDefaultTheme = isBrowserDark ? 'dark' : 'light'
    return localStorageTheme ?? browserDefaultTheme
  }

  useEffect(() => setTheme(getDefaultTheme()), [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
