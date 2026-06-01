import Image from 'next/image'
import Link from 'next/link'
import { Social } from 'components/Social'

import type { JSX } from 'react'

export default function Header(): JSX.Element {
  const imageSize = 80
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-4 mb-8">
      <div className="flex flex-row items-center gap-6">
        <Image
          src={`https://github.com/victor-aunon.png?size=${imageSize}`}
          width={imageSize}
          height={imageSize}
          alt="Photo of Víctor Auñón"
          className="rounded-full ring-2 ring-zinc-400"
        />
        <Link href="/">
          <p
            id="site-name"
            className="text-4xl font-semibold font-display text-zinc-100 hover:text-white transition-colors"
          >
            Víctor Auñón
          </p>
        </Link>
      </div>
      <nav className="flex flex-col items-center gap-4">
        <ul className="flex flex-row items-center gap-8">
          <li className="text-lg font-semibold text-zinc-300 hover:text-white transition-colors">
            <Link href={'/about'}>Sobre mí</Link>
          </li>
          <li className="text-lg font-semibold text-zinc-300 hover:text-white transition-colors">
            <Link href={'/contact'}>Contáctame</Link>
          </li>
        </ul>
        <Social parent="navbar" />
      </nav>
    </header>
  )
}
