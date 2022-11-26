'use client'

import { useContext } from 'react'
import { titlesFont, contentFont } from 'app/fonts'
import { LayoutProps } from 'interfaces/Layout'
import { ThemeContext } from 'contexts/ThemeContext'

export default function BodyThemed({ children }: LayoutProps): JSX.Element {
  const { theme } = useContext(ThemeContext)
  console.log(theme)
  return (
    <body
      className={`container ${titlesFont.variable} ${contentFont.variable} theme-${theme}`}
    >
      {children}
    </body>
  )
}
