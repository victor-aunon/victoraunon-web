'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/ResumeItem.module.scss'
import Lightbox from './Lightbox'
import { ResumeItemProps } from 'interfaces/ResumeItem'

export default function ResumeItem(props: ResumeItemProps): JSX.Element {
  const { title, images, imagesBlur, year, description, objectives, links } =
    props
  const [showMore, setShowMore] = useState(false)

  function handleVisibility(): void {
    setShowMore(!showMore)
  }

  return (
    <section className={styles.resumeItem}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <span>{year}</span>
      </div>
      <div className={styles.mainImageAndDescription}>
        <div className={styles.imageContainer}>
          <Lightbox image={images[0]} alt={title} imageBlur={imagesBlur[0]} />
        </div>
        <p>{description}</p>
      </div>
      {objectives !== undefined && (
        <>
          <button className={styles.showMoreButton} onClick={handleVisibility}>
            {showMore ? 'Mostrar menos' : 'Mostrar más'}
          </button>
          <div
            className={styles.objectives}
            style={{
              display: showMore ? 'flex' : 'none',
            }}
          >
            {/* start at index 1 since 0 is reserved for main image */}
            {images.slice(1).map((imageSrc, index) => (
              <div
                className={styles.imageContainer}
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
              className={styles.interestingLinks}
              style={{
                display: showMore ? 'flex' : 'none',
              }}
            >
              <p>Enlaces de interés:</p>
              {links.map((link, index) => (
                <Link
                  key={`interestingLink-${index}`}
                  className={styles.link}
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
