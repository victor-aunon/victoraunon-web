'use client'

import { useState, type JSX } from 'react'
import Link from 'next/link'
import { Lightbox } from 'components/Lightbox'
import type { ResumeItemProps } from 'types/ResumeItem'

export default function ResumeItem(props: ResumeItemProps): JSX.Element {
  const { title, images, imagesBlur, year, description, objectives, links } =
    props
  const [showMore, setShowMore] = useState(false)

  function handleVisibility(): void {
    setShowMore(!showMore)
  }

  return (
    <section className="flex flex-col p-6 rounded-xl mb-6 shadow-[3px_3px_6px] shadow-zinc-700">
      <div className="flex flex-row justify-between items-start">
        <h2 className="w-3/4">{title}</h2>
        <span className="font-semibold text-2xl text-zinc-400">{year}</span>
      </div>
      <div className="my-4 flex flex-col-reverse md:flex-row justify-start gap-4">
        <div className="relative flex-none w-[400px]">
          <Lightbox image={images[0]} alt={title} imageBlur={imagesBlur[0]} />
        </div>
        <p>{description}</p>
      </div>
      {objectives !== undefined && (
        <>
          <button
            className="bg-transparent w-40 py-1 px-2 my-4 text-lg border-2 border-zinc-600 rounded-xl text-zinc-200 hover:text-zinc-400 transition-colors"
            onClick={handleVisibility}
          >
            {showMore ? 'Mostrar menos' : 'Mostrar más'}
          </button>
          <div
            className="flex flex-col-reverse md:flex-row-reverse justify-start gap-4"
            style={{ display: showMore ? 'flex' : 'none' }}
          >
            {images.slice(1).map((imageSrc, index) => (
              <div
                className="relative flex-none w-[300px]"
                key={`objectivesImage-${index}`}
              >
                <Lightbox
                  image={imageSrc}
                  alt={title}
                  imageBlur={imagesBlur[index + 1]}
                />
              </div>
            ))}
            <p>{objectives}</p>
          </div>
          {links !== undefined && (
            <div
              className="flex flex-col gap-2"
              style={{ display: showMore ? 'flex' : 'none' }}
            >
              <p>Enlaces de interés:</p>
              {links.map((link, index) => (
                <Link
                  key={`interestingLink-${index}`}
                  className="font-semibold text-lg text-indigo-400 hover:text-indigo-300 before:content-['▶'] before:mr-2 before:text-indigo-400"
                  href={link.href}
                  target="_blank"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}
