import 'styles/globals.scss'
import { LayoutProps } from 'interfaces/Layout'
import Providers from './Providers'
import BodyThemed from './BodyThemed'
import Header from 'components/Header'
import Social from 'components/Social'
import Footer from 'components/Footer'
import SideBar from 'components/SideBar'
import SearchBar from 'components/SearchBar'

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>Mi web</title>
      </head>
      <Providers>
        <BodyThemed>
          <Header />
          <SearchBar parent="main" />
          <main className="main">
            <Social parent="main" />
            <section className="content-section">{children}</section>
            <SideBar />
          </main>
          <Footer />
        </BodyThemed>
      </Providers>
    </html>
  )
}
