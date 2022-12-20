interface Cookie {
  name: string
  description: string
  persistence: string
  type: string
  typeSlug: string
}

const cookies: Cookie[] = [
  {
    name: 'theme',
    description:
      'Variable que se almacena en el almacenamiento local del navegador y guarda las preferencias del tema (claro u oscuro) al ser definido por el usuario',
    persistence: 'Hasta ser eliminada por el usuario',
    type: 'Técnica, del dominio',
    typeSlug: 'Functional',
  },
  {
    name: 'cookieConsent',
    description:
      'Cookie propia que guarda las preferencias del usuario relativas al consentimiento del uso de cookies',
    persistence: '3 meses',
    type: 'Técnica, del dominio',
    typeSlug: 'Functional',
  },
  {
    name: '_ga',
    description:
      'Cookie de Google para medir el uso que hace el usuario al navegar por el sitio. Registra eventos como las páginas visitadas dentro del dominio',
    persistence: '2 años',
    type: 'Análisis, de terceros',
    typeSlug: 'Analytics',
  },
  {
    name: '_ga_*',
    description:
      'Cookie de Google para medir el uso que hace el usuario al navegar por el sitio. Registra eventos como las páginas visitadas dentro del dominio',
    persistence: '2 años',
    type: 'Análisis, de terceros',
    typeSlug: 'Analytics',
  },
  {
    name: 'csrftoken',
    description:
      'Cookie de Disqus para garantizar la seguridad del usuario en el sistema de comentarios. Sólo se guarda al iniciar sesión en Disqus',
    persistence: '1 año',
    type: 'Técnica, de terceros',
    typeSlug: 'Functional',
  },
  {
    name: 'disqus_unique',
    description:
      'Cookie de Disqus que identifica al usuario en el sistema de comentarios. Sólo se guarda al iniciar sesión en Disqus',
    persistence: '1 año',
    type: 'Técnica, de terceros',
    typeSlug: 'Functional',
  },
  {
    name: 'disqusauth',
    description:
      'Cookie de Disqus que identifica al usuario en el sistema de comentarios. Sólo se guarda al iniciar sesión en Disqus',
    persistence: '3 meses',
    type: 'Técnica, de terceros',
    typeSlug: 'Functional',
  },
  {
    name: 'disqusauths',
    description:
      'Cookie de Disqus que identifica al usuario en el sistema de comentarios. Sólo se guarda al iniciar sesión en Disqus',
    persistence: '3 meses',
    type: 'Técnica, de terceros',
    typeSlug: 'Functional',
  },
  {
    name: 'sessionid',
    description:
      'Cookie de Disqus que identifica la sesión iniciada por el usuario en el servicio de Disqus. Sólo se guarda al iniciar sesión en Disqus',
    persistence: '3 meses',
    type: 'Técnica, de terceros',
    typeSlug: 'Functional',
  },
  {
    name: '__jid',
    description:
      'Cookie de Disqus que identifica la sesión iniciada por el usuario en el servicio de Disqus. Sólo se guarda al iniciar sesión en Disqus',
    persistence: '30 minutos',
    type: 'Técnica, de terceros',
    typeSlug: 'Functional',
  },
  {
    name: 'intercom-id-*',
    description:
      'Cookie anónima de Intercom que identifica la sesión iniciada por el usuario en el servicio de Disqus. Sólo se guarda al iniciar sesión en Disqus',
    persistence: '9 meses',
    type: 'Técnica, de terceros',
    typeSlug: 'Functional',
  },
  {
    name: 'intercom-session-*',
    description:
      'Cookie de Intercom que identifica la sesión iniciada por el usuario en el servicio de Disqus en un único navegador. Sólo se guarda al iniciar sesión en Disqus',
    persistence: '1 semana',
    type: 'Técnica, de terceros',
    typeSlug: 'Functional',
  },
  {
    name: 'intercom-device-id-*',
    description:
      'Cookie de Intercom que identifica el dispositivo en el que el usuario ha iniciado sesión en el servicio de Disqus. Sólo se guarda al iniciar sesión en Disqus',
    persistence: '9 meses',
    type: 'Técnica, de terceros',
    typeSlug: 'Functional',
  },
]

export default cookies
