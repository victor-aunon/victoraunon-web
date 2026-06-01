'use client'

import { useRef, useState, type JSX } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeFrameProps {
  file: string
  language: string
  children: React.ReactNode
}

export default function CodeFrame({
  file,
  language,
  children,
}: CodeFrameProps): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  function handleCopy(): void {
    const text = contentRef.current?.textContent ?? ''
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="border-2 border-zinc-600 rounded-2xl w-[90%] mx-auto my-8 overflow-hidden">
      <div className="relative flex items-center bg-indigo-400 py-1 px-2">
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          title="Copy code"
          className="absolute right-2 p-1 rounded text-white/70 hover:text-white hover:bg-white/20 transition-colors"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <p className="text-white font-display font-bold text-xl w-full text-center mb-0 mt-0">
          {`${file} //`} <span className="capitalize"> {language}</span>
        </p>
      </div>

      <div ref={contentRef} className="[&_code]:text-base">
        {children}
      </div>
    </section>
  )
}
