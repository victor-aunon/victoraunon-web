'use client'
import Link from 'next/link'
import ReCAPTCHA from 'react-google-recaptcha'
import useFormValidation from 'hooks/useFormValidation'

import type { JSX } from 'react'

interface ContactFormProps {
  formId: string
  reCaptchaSiteKey: string
}

const inputClass =
  'border border-zinc-600 rounded-xl px-3 py-2 font-sans text-base text-zinc-100 bg-zinc-900 w-full focus:outline-none focus:border-indigo-500 transition-colors placeholder-transparent peer'
const labelClass =
  'absolute left-3 top-1 text-zinc-400 text-sm rounded bg-zinc-900 px-1 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm'

export default function ContactForm({
  formId,
  reCaptchaSiteKey,
}: ContactFormProps): JSX.Element {
  const { message, handleSubmit, verifyCaptcha } = useFormValidation(
    formId,
    reCaptchaSiteKey
  )

  return (
    <>
      <form
        className="w-[95%] max-w-[700px] mx-auto my-8 px-6 py-8 flex flex-col items-center rounded-xl shadow-[3px_3px_6px] shadow-zinc-700"
        onSubmit={handleSubmit}
      >
        <div className="w-full my-4 flex flex-col relative">
          <input
            type="text"
            name="1-name"
            id="name"
            placeholder=" "
            required
            className={inputClass}
          />
          <label htmlFor="name" className={labelClass}>
            Tu nombre
          </label>
        </div>
        <div className="w-full my-4 flex flex-col relative">
          <input
            type="email"
            name="2-email"
            id="email"
            placeholder=" "
            required
            className={inputClass}
          />
          <label htmlFor="email" className={labelClass}>
            Tu email
          </label>
        </div>
        <div className="w-full my-4 flex flex-col relative">
          <textarea
            name="3-message"
            id="message"
            placeholder=" "
            cols={30}
            rows={10}
            required
            className="border border-zinc-600 rounded-xl px-3 py-2 font-sans text-base text-zinc-100 bg-zinc-900 w-full resize-y focus:outline-none focus:border-indigo-500 transition-colors placeholder-transparent peer"
          />
          <label htmlFor="message" className={labelClass}>
            Cuéntame
          </label>
        </div>
        <div className="flex flex-row-reverse items-center justify-start gap-3 w-full my-2">
          <label htmlFor="privacy">
            Sí, he leído y acepto la{' '}
            <Link
              target="_blank"
              href="/privacy"
              className="text-indigo-400 font-bold hover:underline"
            >
              Política de privacidad
            </Link>
          </label>
          <input
            type="checkbox"
            name="privacy"
            id="privacy"
            data-testid="privacy-checkbox"
            required
            className="w-6 h-6"
          />
        </div>
        <div className="w-full mt-4 flex flex-col items-center">
          <ReCAPTCHA sitekey={reCaptchaSiteKey} onChange={verifyCaptcha} />
          <p>{message}</p>
        </div>
        <div className="w-full my-4 flex flex-col items-center">
          <input
            type="submit"
            value="Enviar"
            className="w-1/2 max-w-[300px] my-4 py-2 text-zinc-100 font-semibold text-xl border-2 border-zinc-600 rounded-xl bg-transparent cursor-pointer hover:text-indigo-400 hover:border-indigo-400 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all"
          />
        </div>
      </form>
    </>
  )
}
