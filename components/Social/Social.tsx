'use client'

import {
  FaLinkedin,
  FaInstagram,
  FaArrowCircleUp,
  FaGithub,
} from 'react-icons/fa'

import type { JSX } from 'react'

interface SocialProps {
  parent: 'navbar' | 'main'
}

export default function Social({ parent }: SocialProps): JSX.Element {
  const linkClass =
    'text-zinc-400 hover:text-indigo-300 transition-colors flex items-center justify-center'

  if (parent === 'main')
    return (
      <aside className="hidden lg:flex flex-col gap-6 sticky top-40 self-start bg-zinc-900 rounded-2xl p-4 text-3xl">
        <a
          href="https://github.com/victor-aunon"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/angelaunon"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/victor.aunon/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          <FaInstagram />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={linkClass}
          aria-label="Ir al principio"
        >
          <FaArrowCircleUp />
        </button>
      </aside>
    )
  return (
    <div className="flex flex-row justify-center gap-6 w-full py-3 text-2xl lg:hidden">
      <a
        href="https://github.com/victor-aunon"
        target="_blank"
        rel="noreferrer"
        className={linkClass}
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/angelaunon"
        target="_blank"
        rel="noreferrer"
        className={linkClass}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/victor.aunon/"
        target="_blank"
        rel="noreferrer"
        className={linkClass}
      >
        <FaInstagram />
      </a>
    </div>
  )
}
