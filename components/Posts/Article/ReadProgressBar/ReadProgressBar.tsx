'use client'

import { RefObject, useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import styles from './ReadProgressBar.module.scss'

interface ReadProgressBarProps {
  articleRef: RefObject<HTMLElement>
}

export default function ReadProgressBar({
  articleRef,
}: ReadProgressBarProps): JSX.Element {
  const { scrollYProgress } = useScroll({
    target: articleRef,
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.01,
  })
  const [barDisplay, setbarDisplay] = useState('block')
  let post: HTMLElement | null

  const handleWindowResize = (): void => {
    if (typeof window !== 'undefined') {
      const height = window.innerHeight
      const postHeight = post?.getBoundingClientRect().height ?? 0

      // Show the progressbar only if the post height is larger than
      // window height
      if (postHeight <= height) setbarDisplay('none')
      else setbarDisplay('block')
    }
  }

  useEffect(() => {
    // Do not show progress bar if post height is lower than window height
    const timeOut = setTimeout(() => {
      if (typeof window !== 'undefined') {
        post = document.querySelector('article')
        window.addEventListener('resize', handleWindowResize)
        handleWindowResize()
      }
    }, 10)
    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('resize', handleWindowResize)
      clearTimeout(timeOut)
    }
  }, [])

  return (
    <motion.div
      className={styles.progressBar}
      style={{ scaleX, display: barDisplay }}
    ></motion.div>
  )
}
