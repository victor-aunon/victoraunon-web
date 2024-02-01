import styles from './CodeFrame.module.scss'

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
  return (
    <section className={styles.codeFrame}>
      <h2>{`${file} // ${language}`}</h2>
      <div>{children}</div>
    </section>
  )
}
