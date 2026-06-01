'use client'

import useLightbox from 'hooks/useLightbox'
import { useRef, type JSX } from 'react'
import Image from 'next/image'
import { SlClose } from 'react-icons/sl'
import { cn } from 'lib/utils'

interface LightboxProps {
  image: string
  alt: string
  imageBlur?: string
}

export default function Lightbox(props: LightboxProps): JSX.Element {
  const { image, alt, imageBlur } = props
  const { isLightboxVisible, toggleLightbox } = useLightbox()
  const lightboxRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  function hideLightBox(): void {
    if (lightboxRef.current == null) return
    if (isLightboxVisible) {
      toggleLightbox()
    }
  }

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target !== imageRef.current) toggleLightbox()
  }

  return (
    <>
      <div
        className={cn(
          'fixed top-0 left-0 w-0 h-0 invisible opacity-0 bg-black/93 z-10 transition-all duration-300 cursor-default',
          isLightboxVisible && 'w-screen h-screen visible opacity-100 z-[200]'
        )}
        onClick={handleClick}
        ref={lightboxRef}
      >
        <button
          className="absolute right-[2vw] top-[2vw] bg-transparent border-none text-white text-5xl z-10 hover:rotate-90 hover:drop-shadow-[0px_0px_10px_#818cf8] active:scale-90 transition-all"
          onClick={hideLightBox}
        >
          <SlClose />
        </button>
        <div className="relative max-w-[1200px] w-[90%] h-[calc(100%-200px)] max-h-[90%] mx-auto mt-[10%] cursor-default">
          <Image
            src={image}
            alt={alt}
            fill={true}
            style={{
              objectFit: 'contain',
            }}
            ref={imageRef}
          />
        </div>
      </div>
      <Image
        src={image}
        alt={alt}
        fill={true}
        style={{
          objectFit: 'contain',
          backgroundSize: '70% 70%',
        }}
        placeholder={imageBlur === undefined ? undefined : 'blur'}
        blurDataURL={imageBlur}
        onPointerDown={toggleLightbox}
        className="cursor-zoom-in"
      />
    </>
  )
}
