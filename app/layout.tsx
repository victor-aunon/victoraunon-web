import 'styles/globals.scss'
import { LayoutProps } from 'interfaces/Layout'
import Providers from './Providers'
import BodyThemed from './BodyThemed'
import Header from 'components/Header'
import Social from 'components/Social'

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>Mi web</title>
      </head>
      <Providers>
        <BodyThemed>
          <Header />
          <main className="main">
            <Social parent="main" />
            {children}
          </main>
        </BodyThemed>
      </Providers>
    </html>
  )
}
