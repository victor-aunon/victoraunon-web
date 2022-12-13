import { useState } from 'react'

interface UseLightBox {
  isLightboxVisible: boolean
  showLightbox: VoidFunction
}

export default function useLightbox(): UseLightBox {
  const [lightboxVisible, setLightboxVisible] = useState(false)

  function showLightbox(): void {
    return setLightboxVisible(!lightboxVisible)
  }

  return { isLightboxVisible: lightboxVisible, showLightbox }
}
