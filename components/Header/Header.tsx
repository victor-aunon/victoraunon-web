import Image from 'next/image'
import Link from 'next/link'
import { SquareChevronLeft } from 'lucide-react'
import { Social } from 'components/Social'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
} from 'components/ui/sheet'

import type { JSX } from 'react'

export default function Header(): JSX.Element {
  const imageSize = 80
  return (
    <header className="sticky top-0 z-50 w-[calc(100%+32px)] -ml-[16px] bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex flex-col md:flex-row items-center justify-between md:gap-6 px-6 py-4">
      <div className="flex flex-row items-center justify-between w-full md:w-auto gap-6">
        <Image
          src={`https://github.com/victor-aunon.png?size=${imageSize}`}
          width={imageSize}
          height={imageSize}
          alt="Photo of Víctor Auñón"
          className="rounded-full ring-2 ring-zinc-400 w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
        />
        <Link href="/">
          <p
            id="site-name"
            className="text-3xl md:text-4xl font-semibold font-display text-zinc-100 hover:text-white transition-colors"
          >
            Víctor Auñón
          </p>
        </Link>
        <Sheet>
          <SheetTrigger>
            <SquareChevronLeft
              className="text-xl text-zinc-300 md:hidden"
              aria-label="Menu"
            />
          </SheetTrigger>
          <SheetContent className="flex flex-col bg-zinc-950 w-fit pl-6 pr-9 border-l-white border-l-6">
            <ul className="flex flex-col gap-8 flex-1 items-start py-10">
              <li className="text-xl font-display font-semibold text-zinc-300 group hover:text-white transition-colors">
                <Link href={'/'}>
                  <span className="text-3xl text-indigo-400 font-bold group-hover:text-indigo-500">
                    /{' '}
                  </span>
                  Home
                </Link>
              </li>

              <li className="text-xl font-display font-semibold text-zinc-300 hover:text-white transition-colors">
                <Link href={'/about'}>
                  <span className="text-3xl text-indigo-400 font-bold group-hover:text-indigo-500">
                    /{' '}
                  </span>
                  Sobre mí
                </Link>
              </li>
              <li className="text-xl font-display font-semibold text-zinc-300 hover:text-white transition-colors">
                <Link href={'/contact'}>
                  <span className="text-3xl text-indigo-400 font-bold group-hover:text-indigo-500">
                    /{' '}
                  </span>
                  Contáctame
                </Link>
              </li>
            </ul>
            <SheetFooter>
              <Social parent="navbar" />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <nav className="flex flex-col items-center gap-4 hidden md:block">
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
