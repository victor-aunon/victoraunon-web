import 'styles/globals.scss'
import { LayoutProps } from 'interfaces/Layout'
import Providers from './Providers'
import BodyThemed from './BodyThemed'
import Header from 'components/Header'

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>Mi web</title>
      </head>
      <Providers>
        <BodyThemed>
          <Header />
          <main className="main">{children}</main>
        </BodyThemed>
      </Providers>
    </html>
  )
}
