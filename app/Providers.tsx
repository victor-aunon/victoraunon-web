'use client'

import { useState } from 'react'
import { ThemeContext } from 'contexts/ThemeContext'
import { LayoutProps } from 'interfaces/Layout'

export default function Providers({ children }: LayoutProps): JSX.Element {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
