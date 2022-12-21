import Script from 'next/script'

export default function CommonHead(): JSX.Element {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible, refresh" content="IE=edge" />

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#603cba" />
      <meta
        name="msapplication-config"
        content="/images/favicon/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
      {/* End of favicon */}

      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
        });

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtagfun':
        gtag});w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${
          process.env.REACT_APP_GOOGLE_TAG_ID as string
        }');
      `,
        }}
      />
    </>
  )
}
