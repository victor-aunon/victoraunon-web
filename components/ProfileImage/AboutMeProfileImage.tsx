'use client'

import { type JSX } from 'react'
import Image from 'next/image'

// Dark mode is permanent — always use the lavanda variant
export default function AboutMeProfileImage(): JSX.Element {
  return (
    <Image
      src="/images/aboutme/recorte_cuadrado_lavanda.jpg"
      alt={'Foto de Víctor Auñón'}
      fill={true}
      style={{
        objectFit: 'contain',
        borderRadius: '10px',
      }}
      loading="eager"
    />
  )
}
