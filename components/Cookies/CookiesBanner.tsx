'use client'
import useCookieConsent from 'hooks/useCookieConsent'
import CookiesTable from './CookiesTable'
import Link from 'next/link'
import { SlClose } from 'react-icons/sl'

import type { JSX } from 'react'

const btnPrimary =
  'bg-indigo-600 text-white border border-indigo-600 rounded-md px-3 py-1.5 font-semibold text-base hover:bg-indigo-700 active:scale-95 transition-all'
const btnSecondary =
  'bg-zinc-950 text-indigo-400 border border-indigo-600 rounded-md px-3 py-1.5 font-semibold text-base hover:text-indigo-300 active:scale-95 transition-all'

export default function CookieBanner(): JSX.Element {
  const {
    shouldShowBanner,
    isPreferencesVisible,
    setIsPreferencesVisible,
    acceptConsent,
    acceptConsentAll,
    handleAnalyticsChange,
    allowAnalytics,
  } = useCookieConsent()

  return (
    <>
      {shouldShowBanner && (
        <div className="flex flex-col md:flex-row gap-6 fixed bottom-1 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] bg-zinc-950 text-zinc-100 p-4 rounded-2xl border border-zinc-700 items-center z-10 opacity-0 animate-[appear_0.5s_linear_0.8s_forwards]">
          <style>{`@keyframes appear { 0% { opacity:0 } 100% { opacity:1 } }`}</style>
          <div>
            <h3>Esta página utiliza cookies</h3>
            <p>
              Utilizamos cookies propias y de terceros para fines funcionales
              dirigidos a permitir la correcta navegación por nuestra página
              web, guardar información de sus preferencias de usuario, analizar
              cómo interactúa con nosotros, medir qué uso hace de los servicios
              que le proporcionamos y poder mejorarlos.
            </p>
            <p>
              Para consentir su utilización y confirmar que ha leído la
              información proporcionada, pulse el botón &quot;Aceptar
              todas&quot;. Puede obtener más información consultando nuestra{' '}
              <Link href="/cookies" className="font-semibold underline">
                Pólitica de Cookies
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-3 w-[80%] max-w-[400px]">
            <button className={btnPrimary} onClick={() => acceptConsentAll()}>
              Aceptar todas
            </button>
            <button
              className={btnPrimary}
              onClick={() => setIsPreferencesVisible(true)}
            >
              Configurar
            </button>
          </div>
        </div>
      )}
      {isPreferencesVisible && (
        <div className="flex flex-col fixed top-0 left-0 w-screen h-screen bg-black/80 z-20">
          <div className="w-[90%] max-w-[1000px] m-auto min-h-[600px] max-h-[80vh] flex flex-col bg-zinc-950 rounded-2xl border border-zinc-700">
            <div className="flex flex-row items-center p-4 pb-2 justify-between border-b border-zinc-700">
              <h3>Preferencias de cookies</h3>
              <button
                className="bg-transparent border-none text-indigo-400 text-3xl hover:drop-shadow-[0_0_10px_#818cf8] active:scale-90 transition-all"
                onClick={() => setIsPreferencesVisible(false)}
              >
                <SlClose />
              </button>
            </div>
            <div className="p-4 mb-auto overflow-y-auto">
              <h3>Uso de cookies</h3>
              <p>
                Aquí puede elegir qué categoría de cookies permitir. Puede
                obtener más información consultando nuestra{' '}
                <Link href="/cookies" className="font-semibold underline">
                  Pólitica de Cookies
                </Link>
              </p>
              {/* Required cookies accordion */}
              <div className="bg-zinc-900 mb-2 rounded-xl overflow-hidden">
                <div className="flex flex-col overflow-hidden">
                  <input
                    className="absolute opacity-0 -z-10 peer/required"
                    type="checkbox"
                    id="required-tab"
                  />
                  <label
                    className="w-full flex p-4 justify-between items-center cursor-pointer before:content-['\276F'] before:text-indigo-400 before:font-bold before:text-2xl before:transition-all peer-checked/required:before:rotate-90"
                    htmlFor="required-tab"
                  >
                    <h3 className="m-0 ml-4">Cookies técnicas necesarias</h3>
                    <label className="relative inline-block w-[60px] h-[34px]">
                      <input
                        type="checkbox"
                        name="required-cookies-check"
                        id="required-cookies-check"
                        checked={true}
                        readOnly={true}
                        className="opacity-0 w-0 h-0"
                      />
                      <span className="absolute cursor-pointer inset-0 bg-indigo-600 rounded-full transition-all before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all" />
                    </label>
                  </label>
                  <div className="max-h-0 px-4 transition-all overflow-hidden peer-checked/required:max-h-[999px]">
                    <p>
                      Son aquellas que permiten al usuario la navegación a
                      través de una página web. La página web no puede funcionar
                      adecuadamente sin estas cookies por lo que se consideran
                      necesarias y no requieren su consentimiento.
                    </p>
                    <CookiesTable cookieType="Functional" />
                  </div>
                </div>
              </div>
              {/* Analytics cookies accordion */}
              <div className="bg-zinc-900 mb-2 rounded-xl overflow-hidden">
                <div className="flex flex-col overflow-hidden">
                  <input
                    className="absolute opacity-0 -z-10 peer/analytics"
                    type="checkbox"
                    id="analytics-tab"
                  />
                  <label
                    className="w-full flex p-4 justify-between items-center cursor-pointer before:content-['\276F'] before:text-indigo-400 before:font-bold before:text-2xl before:transition-all peer-checked/analytics:before:rotate-90"
                    htmlFor="analytics-tab"
                  >
                    <h3 className="m-0 ml-4">Cookies de análisis o medición</h3>
                    <label className="relative inline-block w-[60px] h-[34px]">
                      <input
                        type="checkbox"
                        id="analytics-cookies-check"
                        name="analytics-cookies-check"
                        onChange={handleAnalyticsChange}
                        checked={allowAnalytics}
                        className="opacity-0 w-0 h-0 peer/analytics-check"
                      />
                      <span className="absolute cursor-pointer inset-0 bg-zinc-600 rounded-full transition-all before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all peer-checked/analytics-check:bg-indigo-600 peer-checked/analytics-check:before:translate-x-[26px]" />
                    </label>
                  </label>
                  <div className="max-h-0 px-4 transition-all overflow-hidden peer-checked/analytics:max-h-[999px]">
                    <p>
                      Son aquellas que permiten comprender cómo interactúan los
                      visitantes con las páginas web y así realizar el análisis
                      estadístico del uso que hacen los usuarios de la web de
                      los servicios prestados. La información recogida se
                      utiliza en la medición de la actividad de los sitios web o
                      aplicación con el fin de introducir mejoras en los
                      productos y servicios ofrecidos por el responsable.
                    </p>
                    <CookiesTable cookieType="Analytics" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center p-3 border-t border-zinc-700 gap-3">
              <button className={btnPrimary} onClick={() => acceptConsentAll()}>
                Aceptar todas
              </button>
              <button
                className={btnSecondary}
                onClick={() => acceptConsent(true)}
              >
                Aceptar necesarias
              </button>
              <button
                className={`${btnSecondary} ml-auto`}
                onClick={() => acceptConsent()}
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
