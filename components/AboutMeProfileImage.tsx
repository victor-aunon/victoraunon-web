'use client'

import { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from 'contexts/ThemeContext'

export default function AboutMeProfileImage(): JSX.Element {
  const { theme } = useContext(ThemeContext)

  return (
    <Image
      src={`/images/aboutme/recorte_cuadrado_${
        theme === 'dark' ? 'lavanda' : 'azul'
      }.jpg`}
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
