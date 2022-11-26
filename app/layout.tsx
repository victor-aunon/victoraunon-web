import 'styles/globals.scss'
import { LayoutProps } from 'interfaces/Layout'
import Providers from './Providers'
import BodyThemed from './BodyThemed'

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="en">
      <head></head>
      <Providers>
        <BodyThemed>{children}</BodyThemed>
      </Providers>
    </html>
  )
}
