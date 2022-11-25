import { titlesFont, contentFont } from './fonts'
import 'styles/globals.scss'
import { LayoutProps } from 'interfaces/Layout'

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`container ${titlesFont.variable} ${contentFont.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
