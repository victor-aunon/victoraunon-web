import Image from 'next/image'
import Link from 'next/link'
import { Social } from 'components/Social'
import styles from './Header.module.scss'

export default function Header(): JSX.Element {
  const imageSize = 80
  return (
    <header className={styles.header}>
      <div className={styles.siteIdentity}>
        <Image
          src={`https://github.com/victor-aunon.png?size=${imageSize}`}
          width={imageSize}
          height={imageSize}
          alt="Photo of Víctor Auñón"
          className={`with-theme ${styles.profileImage}`}
        />
        <Link href="/">
          <p className={`${styles.siteName} with-theme`} id="site-name">
            Víctor Auñón
          </p>
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href={'/about'}>Sobre mí</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contáctame</Link>
          </li>
        </ul>
        <Social parent="navbar" />
      </nav>
    </header>
  )
}
