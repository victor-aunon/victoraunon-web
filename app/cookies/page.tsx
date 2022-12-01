import nextConfig from 'next.config'
import { SiteConfig } from 'interfaces/SiteConfig'
import CookiesTable from './CookiesTable'

export default function Cookies(): JSX.Element {
  const { name } = nextConfig.siteConfig as SiteConfig
  return (
    <section className="legal-content">
      <h1 className="legal-title">Política de cookies</h1>
      <p>
        En <strong>{name}</strong> utilizamos las cookies u otros archivos de
        funcionalidad similar (en adelante, “cookies”) para saber cómo utilizas
        nuestros servicios y poder mejorarlos.
        <strong>{name}</strong> es responsable de las cookies y del tratamiento
        de los datos obtenidos a través de estas, ya sean propias o de terceros,
        decidiendo sobre la finalidad, contenido y uso del tratamiento de la
        información recabada.
      </p>
      <p>
        El objetivo de esta política es informarle de manera clara y detallada
        de qué es una cookie, cuál es su finalidad, qué tipo de cookies
        utilizamos y cómo configurarlas o en su caso deshabilitarlas.
      </p>
      <p>
        Una cookie es un pequeño archivo de texto que se almacena en su
        navegador cuando visita nuestra página web y que guarda información
        sobre la navegación que realiza. Algunas cookies resultan esenciales
        para el buen funcionamiento de las páginas web, como es el caso de las
        cookies técnicas o de personalización de la interfaz de usuario, aunque
        otras, como las cookies de análisis o las de publicidad comportamental,
        requieren que le informemos y recabar su consentimiento para ser
        utilizadas por nuestra parte.
      </p>
      <p>
        A continuación, y con el objetivo de que pueda prestar un consentimiento
        plenamente informado, le detallamos la información de en qué consiste y
        cuál es la finalidad de cada tipo de cookie.
      </p>
      <ul>
        <li>
          <p>
            Las <strong>Cookies técnicas</strong> son aquellas que permiten al
            usuario la navegación a través de una página web, plataforma o
            aplicación y la utilización de las diferentes opciones o servicios
            que en ella existan, incluyendo la gestión y operativa de la página
            web y habilitar sus funciones y servicios, como, por ejemplo,
            identificar la sesión, acceder a partes de acceso restringido,
            recordar los elementos que integran un pedido, realizar el proceso
            de compra de un pedido, gestionar el pago, … La página web no puede
            funcionar adecuadamente sin estas cookies por lo que se consideran
            necesarias y no requieren su consentimiento.
          </p>
        </li>
        <li>
          <p>
            Las <strong>Cookies de preferencias o personalización</strong>{' '}
            permiten a la página web recordar información que cambia la forma en
            que la página se comporta o el aspecto que tiene de modo que el
            usuario acceda al servicio con determinadas características que
            pueden diferenciar sus opciones de uso del sitio web a las de otros
            usuarios, como, por ejemplo, el idioma, el número de resultados a
            mostrar cuando el usuario realiza una búsqueda o la región en la que
            el usuario se encuentra. Si es el propio usuario quien elige esas
            características, por ejemplo, marcando la bandera del idioma, se
            considera un servicio expresamente solicitado siempre y cuando las
            cookies obedezcan exclusivamente a la finalidad seleccionada de
            personalización. Como en el caso anterior, estas cookies no
            requieren su consentimiento.
          </p>
        </li>{' '}
        <li>
          <p>
            Las <strong>Cookies de análisis o medición</strong> son aquellas que
            permiten comprender cómo interactúan los visitantes con las páginas
            web y así realizar el análisis estadístico del uso que hacen los
            usuarios de la web de los servicios prestados. La información
            recogida se utiliza en la medición de la actividad de los sitios web
            o aplicación con el fin de introducir mejoras en los productos y
            servicios ofrecidos por el responsable.
          </p>
        </li>
        <li>
          <p>
            Las{' '}
            <strong>Cookies de márketing o publicidad comportamental </strong>{' '}
            almacenan información del comportamiento de los usuarios obtenida a
            través de la observación continuada de sus hábitos de navegación, lo
            que permite desarrollar un perfil específico para mostrar anuncios
            relevantes y atractivos para el usuario individual, y por lo tanto,
            más valiosos para los terceros anunciantes.
          </p>
        </li>
      </ul>
      <p>
        <strong>{name}</strong> está utilizando cookies propias y de terceros de
        tipo técnicas, personalización, análisis, para las finalidades que a
        continuación se exponen en la siguiente declaración de cookies:
      </p>
      <CookiesTable />
      <p>
        Para las cookies de análisis necesitamos su consentimiento que podremos
        obtener si pulsa en el botón “Acepto” en el mensaje de información que
        se muestra al acceder a nuestra página web.
      </p>
      <p>
        Si desactiva las cookies, podrá seguir accediendo a la web pero puede
        que la navegación por esta no sea óptima y alguno de los servicios
        ofrecidos no funcionen correctamente.
      </p>
      <p>
        Si en un futuro <strong>{name}</strong> llegara a utilizar tipos de
        cookies diferentes a las contempladas en esta Política de Cookies para
        prestar nuevos servicios o fuera necesario adaptarla a nuevas exigencias
        legislativas, se lo notificaremos.
      </p>
      <p>
        Puede permitir, bloquear o eliminar las cookies instaladas en su
        dispositivo a través del menú de configuración de su navegador de
        internet, pudiendo configurarlo para que bloquee las cookies o alerte al
        usuario cuando un servidor quiera guardarla. Los siguientes enlaces
        proporcionan información en relación con cómo configurar y/o
        deshabilitar las cookies para cada uno de los principales navegadores
        del mercado a fin de que el usuario pueda decidir si acepta o no el uso
        de cookies.
      </p>
      <ul>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/proteccion-antirrastreo-mejorada-en-firefox-para-e"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Firefox: menú Ajustes &gt; Privacidad & Seguridad &gt; Cookies y
            datos del sitio
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Microsoft Edge: menú Configuración y más &gt; Configuración &gt;
            Privacidad, búsqueda y servicios
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/accounts/answer/61416?hl=es"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Google Chrome: menú Ajustes &gt; Configuración &gt; Seguridad y
            privacidad
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Microsoft Internet Explorer: menú Herramientas &gt; Opciones de
            Internet &gt; Privacidad &gt; Configuración
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Safari: Safari &gt; Preferencias &gt; Privacidad
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=es-419"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Chrome para Android: menú Ajustes &gt; Configuración &gt;
            Configuración de sitios web &gt; Cookies
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/HT201265"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Safari para iOS: menú Ajustes &gt; Safari &gt; Avanzado &gt; Datos
            de sitios web
          </a>
        </li>
      </ul>
      <p>
        Puede gestionar sus preferencias de cookies en esta web pulsando el
        siguiente botón
      </p>
      {/* button#revoke-consent.cookie-consent-btn(data-cc="c-settings") Gestionar
      cookies */}
    </section>
  )
}
