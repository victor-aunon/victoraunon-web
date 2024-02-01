import { ContactForm } from 'components/ContactForm'
import {
  siteConfig,
  commonMetadata,
  commonMetaOpenGraph,
} from 'app/commonMetadata'
import type { Metadata } from 'next'

const { name, website } = siteConfig

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${name} - Contáctame`,
  alternates: {
    canonical: `https://${website}/contact`,
  },
  openGraph: {
    ...commonMetaOpenGraph,
    url: `https://${website}/contact`,
    title: `${name} - Contáctame`,
  },
}

export default function Contact(): JSX.Element {
  return (
    <>
      <div style={{ margin: '2rem auto 0 auto', width: '90%' }}>
        <h1>¡Hola!</h1>
        <p>Usa el formulario de abajo para ponerte en contacto conmigo.</p>
      </div>
      <ContactForm
        formId={process.env.REACT_APP_FORM_ID as string}
        reCaptchaSiteKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY as string}
      />
    </>
  )
}
