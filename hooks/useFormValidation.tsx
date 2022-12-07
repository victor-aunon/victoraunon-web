import { useEffect, useState } from 'react'

interface FormTargetProps extends EventTarget {
  name: { value: string }
  email: { value: string }
  message: { value: string }
}

export interface UseFormValidation {
  message: string
  handleSubmit: (e: React.SyntheticEvent) => void
  verifyCaptcha: VoidFunction
}

const RECAPTCHA_TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

export default function useFormValidation(
  formId: string,
  reCaptchaSiteKey: string
): UseFormValidation {
  const [message, setMessage] = useState('')
  const [captchaOk, setCaptchaOk] = useState(false)

  function verifyCaptcha(): void {
    setMessage('')
    setCaptchaOk(true)
  }

  useEffect(() => {
    if (reCaptchaSiteKey === RECAPTCHA_TEST_SITE_KEY) setCaptchaOk(true)
  }, [])

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault()

    if (!captchaOk) {
      setMessage('🤖 Verifica que eres humano')
      return
    }

    const target = e.target as FormTargetProps

    fetch(`https://submit-form.com/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        '1-name': target.name.value,
        '2-email': target.email.value,
        '3-message': target.message.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setMessage('✅ Formulario enviado correctamente')
        }
      })
      .catch(() => setMessage('❌ Ha sucedido un error, inténtalo más tarde'))
  }

  return { message, handleSubmit, verifyCaptcha }
}
