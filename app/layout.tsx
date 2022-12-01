import 'styles/globals.scss'
import nextConfig from 'next.config'
import { LayoutProps } from 'interfaces/Layout'
import { SiteConfig } from 'interfaces/SiteConfig'
import Providers from './Providers'
import BodyThemed from './BodyThemed'
import Header from 'components/Header'
import Social from 'components/Social'
import Footer from 'components/Footer'
import SideBar from 'components/SideBar'
import SearchBar from 'components/SearchBar'

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  const { siteImage, website } = nextConfig.siteConfig as SiteConfig
  return (
    <html lang="en">
      <head>
        {/* <!-- Google business logo snippet --> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          "url": 'https://${website}',
          "logo": '${siteImage}',
        }`,
          }}
        ></script>
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
