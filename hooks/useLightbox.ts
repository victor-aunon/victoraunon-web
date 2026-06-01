import { useState } from 'react'

interface UseLightBox {
  isLightboxVisible: boolean
  toggleLightbox: VoidFunction
}

export default function useLightbox(): UseLightBox {
  const [lightboxVisible, setLightboxVisible] = useState(false)

  function toggleLightbox(): void {
    return setLightboxVisible(!lightboxVisible)
  }

  return { isLightboxVisible: lightboxVisible, toggleLightbox }
}
