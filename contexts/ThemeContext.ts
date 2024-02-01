import { createContext } from 'react'
import type { Theme } from 'types/SiteConfig'

export const ThemeContext = createContext({
  theme: 'dark' as Theme,
  setTheme: (theme: Theme) => {},
})
