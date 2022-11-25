import 'styles/globals.scss'
import { LayoutProps } from 'interfaces/Layout'

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <html>
      <head></head>
      <body className="container">{children}</body>
    </html>
  )
}
