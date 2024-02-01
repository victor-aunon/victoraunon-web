import path from 'path'
import { readFileSync } from 'fs'
import styles from 'styles/AboutMe.module.scss'
import AboutMeProfileImage from 'components/AboutMeProfileImage'
import ResumeList from 'components/ResumeList'
import {
  siteConfig,
  commonMetadata,
  commonMetaOpenGraph,
} from 'app/commonMetadata'
import type { Metadata } from 'next'
import type { ResumeItemProps } from 'interfaces/ResumeItem'

const { name, website } = siteConfig

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${name} - Sobre mí`,
  alternates: {
    canonical: `https://${website}/about`,
  },
  openGraph: {
    ...commonMetaOpenGraph,
    url: `https://${website}/about`,
    title: `${name} - Sobre mí`,
  },
}

const aboutDir = path.join(process.cwd(), 'app', 'about')

function getResume(): ResumeItemProps[] {
  const resumeRaw = readFileSync(path.join(aboutDir, 'resume.json'))
  return JSON.parse(resumeRaw.toString()).resume as ResumeItemProps[]
}

export default function AboutMe(): JSX.Element {
  const resumeItems = getResume()

  return (
    <>
      <section className={styles.aboutMeIntroduction}>
        <div className={styles.aboutMeMainImage}>
          <AboutMeProfileImage />
        </div>
        <p>
          Bienvenid@, mi nombre es Víctor Auñón y me gustaría aprovechar este
          espacio para que me conozcas un poco más.
        </p>
      </section>
      <ResumeList resumeItems={resumeItems} />
    </>
  )
}
