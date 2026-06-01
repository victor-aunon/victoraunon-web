import path from 'path'
import { readFileSync } from 'fs'
import { AboutMeProfileImage } from 'components/ProfileImage'
import { ResumeList } from 'components/Resume'
import {
  siteConfig,
  commonMetadata,
  commonMetaOpenGraph,
} from 'app/commonMetadata'
import type { Metadata } from 'next'
import type { ResumeItemProps } from 'types/ResumeItem'

import type { JSX } from 'react'

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
      <section className="flex flex-col md:flex-row gap-4 w-[95%] mx-auto mt-6 min-h-[350px]">
        <div className="relative flex-none w-[350px] h-[350px] mx-auto">
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
