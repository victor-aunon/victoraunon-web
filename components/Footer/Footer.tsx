import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href={'/legal'}>Aviso legal</Link>
          </li>
          <li>
            <Link href={'/privacy'}>Política de privacidad</Link>
          </li>
          <li>
            <Link href={'/cookies'}>Política de cookies</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.copyright}>{`Víctor Auñón © ${year}`}</p>
    </footer>
  )
}
