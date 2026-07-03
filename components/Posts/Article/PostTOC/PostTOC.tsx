'use client'

import { useEffect, useState, type JSX } from 'react'
import { cn } from 'lib/utils'

const keys = [...Array(9).keys()].map((k) => `${k + 1}`)

// Tailwind indent classes by heading level
const headingIndent: Record<string, string> = {
  H1: 'font-semibold ml-0',
  H2: 'font-semibold ml-2 before:content-["•"] before:text-zinc-400 before:mr-1',
  H3: 'font-semibold ml-4 before:content-["•"] before:text-zinc-400 before:mr-1',
  H4: 'ml-6 before:content-["•"] before:text-zinc-400 before:mr-1',
  H5: 'ml-8',
  H6: 'ml-10 before:content-["•"] before:text-zinc-400 before:mr-1',
}

interface TOCElement {
  type?: string
  value?: string | null
}

export default function PostTOC(): JSX.Element {
  const [TOC, setTOC] = useState<TOCElement[]>([])

  useEffect(() => {
    const headings = document.querySelectorAll(
      '.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6'
    )
    const TOC = Array.from(headings).map((el) => ({
      type: el.nodeName,
      value: el.textContent,
    }))
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
    return `#${value.toLowerCase().replace(/ /g, '-').replace(/\./g, '')}`
  }

  return (
    <details className="group w-fit ml-auto -mr-4 px-4 py-2 sticky top-32 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-xl z-40 max-w-sm shadow-xl">
      <summary className="text-lg text-zinc-300 hover:text-white transition-colors cursor-pointer list-none flex items-center gap-2 select-none [&::-webkit-details-marker]:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-open:rotate-90"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        Índice de contenidos
      </summary>
      <div className="mt-4 flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
        {TOC.map(({ type, value }) => (
          <a
            className={cn(
              'block text-sm md:text-base text-zinc-400 hover:text-white transition-colors cursor-pointer',
              headingIndent[type ?? ''] ?? ''
            )}
            href={getID(value ?? '')}
            key={`${type ?? ''}-${value ?? ''}`}
          >
            {value}
          </a>
        ))}
      </div>
    </details>
  )
}
