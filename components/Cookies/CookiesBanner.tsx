'use client'

import useCookieConsent from 'hooks/useCookieConsent'
import CookiesTable from './CookiesTable'
import Link from 'next/link'
import { SlClose } from 'react-icons/sl'
import styles from './CookiesBanner.module.scss'

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
        <div className={styles.cookieBanner}>
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
              información proporcionada, pulse el botón “Aceptar todas”. Puede
              obtener más información consultando nuestra{' '}
              <Link href="/cookies">Pólitica de Cookies</Link>
            </p>
          </div>
          <div className={styles.cookieOptions}>
            <button
              className={styles.cookieButtonPrimary}
              onClick={() => acceptConsentAll()}
            >
              Aceptar todas
            </button>
            <button
              className={styles.cookieButtonPrimary}
              onClick={() => setIsPreferencesVisible(true)}
            >
              Configurar
            </button>
          </div>
        </div>
      )}
      {isPreferencesVisible && (
        <div className={styles.cookiesPreferencesFullWindow}>
          <div className={styles.cookiesPreferencesPanel}>
            <div className={styles.cookiesPreferencesTitle}>
              <h3>Preferencias de cookies</h3>
              <button
                className={styles.closeButton}
                onClick={() => setIsPreferencesVisible(false)}
              >
                <SlClose />
              </button>
            </div>
            <div className={styles.cookiesPreferencesSelectorContainer}>
              <h3>Uso de cookies</h3>

              <p>
                Aquí puede elegir qué categoría de cookies permitir. Puede
                obtener más información consultando nuestra{' '}
                <Link href="/cookies">Pólitica de Cookies</Link>
              </p>
              <div className={styles.cookiesSectionAccordionElement}>
                <div className={styles.accordionTitle}>
                  <input
                    className={styles.accordionTab}
                    type="checkbox"
                    id="required-tab"
                  />
                  <label
                    className={styles.accordionTabLabel}
                    htmlFor="required-tab"
                  >
                    <h3 className={styles.cookiesTypeTitle}>
                      Cookies técnicas necesarias
                    </h3>
                    <label
                      className={styles.switch}
                      htmlFor="required-cookies-check"
                    >
                      <input
                        type="checkbox"
                        name="required-cookies-check"
                        id="required-cookies-check"
                        checked={true}
                        readOnly={true}
                      />
                      <span className={styles.slider}></span>
                    </label>
                  </label>
                  <div className={styles.accordionTabContent}>
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
              <div className={styles.cookiesSectionAccordionElement}>
                <div className={styles.accordionTitle}>
                  <input
                    className={styles.accordionTab}
                    type="checkbox"
                    id="analytics-tab"
                  />
                  <label
                    className={styles.accordionTabLabel}
                    htmlFor="analytics-tab"
                  >
                    <h3 className={styles.cookiesTypeTitle}>
                      Cookies de análisis o medición
                    </h3>
                    <label
                      className={styles.switch}
                      htmlFor="analytics-cookies-check"
                    >
                      <input
                        type="checkbox"
                        id="analytics-cookies-check"
                        name="analytics-cookies-check"
                        onChange={handleAnalyticsChange}
                        checked={allowAnalytics}
                      />
                      <span className={styles.slider}></span>
                    </label>
                  </label>
                  <div className={styles.accordionTabContent}>
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
            <div className={styles.cookiesPreferencesOptions}>
              <button
                className={styles.cookieButtonPrimary}
                onClick={() => acceptConsentAll()}
              >
                Aceptar todas
              </button>
              <button
                className={styles.cookieButtonSecondary}
                onClick={() => acceptConsent(true)}
              >
                Aceptar necesarias
              </button>
              <button
                className={styles.cookieButtonSecondary}
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
