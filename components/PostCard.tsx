'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef, useContext } from 'react'
import styles from 'styles/PostCard.module.scss'
import { QueryContext } from 'contexts/QueryContext'
import { PostMetadata } from 'interfaces/Post'
import PostDate from './PostDate'

export default function PostCard(postInfo: PostMetadata): JSX.Element {
  const [gridRowEnd, setGridRowEnd] = useState(15)
  const [windowWidth, setWindowWidth] = useState(1000)
  const { query } = useContext(QueryContext)
  const gridItemRef = useRef<HTMLLIElement>(null)

  const resizeElement = (): void => {
    const grid = document.querySelector('[data-grid]')
    if (grid !== null) {
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
      )
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
      )
      let rowSpan = 0
      const itemHeight =
        gridItemRef.current?.querySelector('a')?.getBoundingClientRect()
          .height ?? 400
      rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap))
      setGridRowEnd(rowSpan)
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', resizeElement)
        resizeElement()
        setWindowWidth(window.innerWidth)
      }
    }, 50)
    return () => {
      window.removeEventListener('resize', resizeElement)
      clearTimeout(timeOut)
    }
  }, [windowWidth, query])

  return (
    <li
      style={{
        gridRowEnd: `span ${gridRowEnd}`,
      }}
      ref={gridItemRef}
    >
      <Link href={`/posts/${postInfo.slug}`} className={styles.postCard}>
        {postInfo.imageUrl !== undefined && (
          <Image
            src={postInfo.imageUrl}
            alt={postInfo.slug}
            fill={true}
            style={{
              objectFit: 'cover',
              zIndex: '0',
            }}
            placeholder={
              postInfo.imageBlurUrl === undefined ? undefined : 'blur'
            }
            blurDataURL={postInfo.imageBlurUrl}
          ></Image>
        )}
        <div
          className={
            postInfo.imageUrl !== undefined
              ? styles.postCardInfo
              : styles.postCardInfoNoImage
          }
        >
          <h2 className={styles.postCardTitle}>{postInfo.title}</h2>
          <div className={styles.postDate}>
            <PostDate date={postInfo.date} />
          </div>
          <p className={styles.postCardText}>{postInfo.excerpt}</p>
        </div>
      </Link>
    </li>
  )
}
