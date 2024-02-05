'use client'

import { useEffect, useState } from 'react'
import styles from './PostTOC.module.scss'

const tagNames = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
const keys = [...Array(9).keys()].map((k) => `${k + 1}`)

interface TOCElement {
  type?: string
  value?: string | null
}

export default function PostTOC(): JSX.Element {
  const [TOC, setTOC] = useState<TOCElement[]>([])

  useEffect(() => {
    let nextChild = document.querySelector('article')?.firstChild
    const TOC = []
    while (nextChild) {
      nextChild = nextChild?.nextSibling
      if (tagNames.includes(nextChild?.nodeName ?? ''))
        TOC.push({ type: nextChild?.nodeName, value: nextChild?.textContent })
    }
    setTOC(TOC)
  }, [])

  useEffect(() => {
    if (TOC.length === 0) return
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [TOC])

  function onKeyDown(event: KeyboardEvent): void {
    if (!keys.includes(event.key)) return
    const element = TOC.at(Number(event.key) - 1)
    if (!element) return
    const DOMElement = document.querySelector(getID(element?.value ?? ''))
    if (DOMElement) DOMElement.scrollIntoView()
  }

  function getID(value: string): string {
    return `#${value.toLowerCase().replace(' ', '-').replace('.', '')}`
  }

  return (
    <details className={styles.postTOC}>
      <summary className={styles.TOCHeader}>Índice de contenidos</summary>
      {TOC.map(({ type, value }) => (
        <a
          className={styles[type ?? '']}
          href={getID(value ?? '')}
          key={`${type ?? ''}-${value ?? ''}`}
        >
          {value}
        </a>
      ))}
    </details>
  )
}
