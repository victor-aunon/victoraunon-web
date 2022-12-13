'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { SlClose } from 'react-icons/sl'
import useLightbox from 'hooks/useLightbox'
import styles from 'styles/Lightbox.module.scss'

interface LightboxProps {
  image: string
  alt: string
  imageBlur?: string
}

export default function Lightbox(props: LightboxProps): JSX.Element {
  const { image, alt, imageBlur } = props
  const { isLightboxVisible, showLightbox } = useLightbox()
  const lightboxRef = useRef<HTMLDivElement>(null)

  function hideLightBox(): void {
    if (lightboxRef.current == null) return
    if (lightboxRef.current.classList.contains(`${styles.visible}`)) {
      lightboxRef.current.classList.remove(`${styles.visible}`)
      showLightbox()
    }
  }

  return (
    <>
      <div
        className={`${styles.lightbox} ${
          isLightboxVisible ? styles.visible : ''
        }`}
        ref={lightboxRef}
      >
        <button className={styles.closeButton} onClick={hideLightBox}>
          <SlClose />
        </button>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={alt}
            fill={true}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <Image
        src={image}
        alt={alt}
        fill={true}
        style={{
          objectFit: 'contain',
        }}
        placeholder={imageBlur === undefined ? undefined : 'blur'}
        blurDataURL={imageBlur}
        onPointerDown={showLightbox}
        className={styles.imageOutsideLightbox}
      />
    </>
  )
}
