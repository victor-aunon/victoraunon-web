import Link from 'next/link'

import type { JSX } from 'react'

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-auto flex flex-col lg:flex-row items-center justify-between gap-6 px-6 py-6 border-t border-zinc-800 font-display">
      <nav>
        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <li className="text-base font-semibold text-zinc-400 hover:text-zinc-100 transition-colors">
            <Link href={'/legal'}>Aviso legal</Link>
          </li>
          <li className="text-base font-semibold text-zinc-400 hover:text-zinc-100 transition-colors">
            <Link href={'/privacy'}>Política de privacidad</Link>
          </li>
          <li className="text-base font-semibold text-zinc-400 hover:text-zinc-100 transition-colors">
            <Link href={'/cookies'}>Política de cookies</Link>
          </li>
        </ul>
      </nav>
      <p className="text-lg  text-zinc-400 mr-4">{`Víctor Auñón © ${year}`}</p>
    </footer>
  )
}
