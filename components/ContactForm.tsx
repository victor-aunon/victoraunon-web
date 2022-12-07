'use client'

import Link from 'next/link'
import ReCAPTCHA from 'react-google-recaptcha'
import React, { useEffect, useState } from 'react'
import useFormValidation from 'hooks/useFormValidation'
import styles from 'styles/ContactForm.module.scss'

interface ContactFormProps {
  formId: string
  reCaptchaSiteKey: string
}

export default function ContactForm({
  formId,
  reCaptchaSiteKey,
}: ContactFormProps): JSX.Element {
  const [mounted, setMounted] = useState(false)
  const { message, handleSubmit, verifyCaptcha } = useFormValidation(
    formId,
    reCaptchaSiteKey
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formElement}>
            <input
              type="text"
              name="1-name"
              id="name"
              placeholder=" "
              required
            />
            <label htmlFor="name">Tu nombre</label>
          </div>
          <div className={styles.formElement}>
            <input
              type="email"
              name="2-email"
              id="email"
              placeholder=" "
              required
            />
            <label htmlFor="email">Tu email</label>
          </div>
          <div className={styles.formElement}>
            <textarea
              name="3-message"
              id="message"
              placeholder=" "
              cols={30}
              rows={10}
              required
            />
            <label htmlFor="message">Cuéntame</label>
          </div>
          <div className={styles.checkboxFormElement}>
            <label htmlFor="privacy">
              Sí, he leído y acepto la{' '}
              <Link target={'_blank'} href="/privacy">
                Política de privacidad
              </Link>
            </label>
            <input
              type="checkbox"
              name="privacy"
              id="privacy"
              data-testid="privacy-checkbox"
              required
            />
          </div>
          <div className={styles.formElementCaptcha}>
            <ReCAPTCHA sitekey={reCaptchaSiteKey} onChange={verifyCaptcha} />
            <p>{message}</p>
          </div>
          <div className={styles.formElement}>
            <input type="submit" value="Enviar" />
          </div>
        </form>
      )}
    </>
  )
}
