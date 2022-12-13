'use client'

import styles from 'styles/ReadProgressBar.module.scss'
import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ReadProgressBar(): JSX.Element {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  })
  const [windowDim, setWindowDim] = useState({ width: 1000, height: 800 })
  const [postHeight, setPostHeight] = useState(800)
  const [barDisplay, setbarDisplay] = useState('block')

  const handleWindowResize = (): void => {
    if (postHeight <= windowDim.height) setbarDisplay('none')
    else setbarDisplay('block')
  }

  useEffect(() => {
    // Do not show progress bar if post height is lower than window height
    const timeOut = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth
        const height = window.innerHeight
        window.addEventListener('resize', handleWindowResize)
        handleWindowResize()
        setWindowDim({ width, height })
        const post = document.querySelector('main')
        setPostHeight(post?.getBoundingClientRect().height ?? 0)
      }
    }, 10)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
      clearTimeout(timeOut)
    }
  }, [windowDim])

  return (
    <motion.div
      className={styles.progressBar}
      style={{ scaleX, display: barDisplay }}
    ></motion.div>
  )
}
