'use client'

import { useState, useEffect } from 'react'
import { setCookie, hasCookie, getCookie } from 'cookies-next'

interface UseCookieConsent {
  acceptConsent: (onlyRequired?: boolean) => void
  acceptConsentAll: () => void
  denyConsent: () => void
  isPreferencesVisible: boolean
  setIsPreferencesVisible: React.Dispatch<React.SetStateAction<boolean>>
  handleAnalyticsChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  allowAnalytics: boolean
  shouldShowBanner: boolean
}

interface CookieConsent {
  accepted: boolean
  categories: string[]
}

type Gtag = (arg0: string, arg1: string, arg2: any) => void

export default function useCookieConsent(): UseCookieConsent {
  const [shouldShowBanner, setShouldShowBanner] = useState(true)
  const [isPreferencesVisible, setIsPreferencesVisible] = useState(false)
  const [allowAnalytics, setAllowAnalytics] = useState(false)
  const [, setConsent] = useState<CookieConsent>({
    accepted: false,
    categories: ['required'],
  })

  const threeMonths = 60 * 60 * 24 * 30 * 3

  useEffect(() => {
    if (hasCookie('cookieConsent')) {
      const cookieConsent = getCookie('cookieConsent')?.valueOf()
      const cookieObject: CookieConsent = JSON.parse(cookieConsent as string)
      setConsent((prevConsent) => {
        if (cookieObject.accepted) setShouldShowBanner(false)
        if (cookieObject?.categories.includes('analytics')) {
          setAllowAnalytics(true)
          const gtag = getGtag()
          gtag('consent', 'update', {
            ad_storage: 'denied',
            analytics_storage: 'granted',
          })
        }
        return {
          ...prevConsent,
          accepted: cookieObject.accepted,
          categories: cookieObject.categories,
        }
      })
    }
  }, [shouldShowBanner])

  function getGtag(): Gtag {
    return window.dataLayer.filter((data: any) => 'gtagfun' in data)[0].gtagfun
  }

  function handleAnalyticsChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const analyticsValue = e.target.checked
    setAllowAnalytics(analyticsValue)
  }

  function acceptConsentAll(): void {
    const categories = ['required', 'analytics']
    setAllowAnalytics(true)
    setConsent((prevConsent) => {
      const consent = { ...prevConsent, accepted: true, categories }
      setCookie('cookieConsent', consent, { maxAge: threeMonths })
      return consent
    })
    const gtag = getGtag()
    gtag('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'granted',
    })
    setIsPreferencesVisible(false)
    setShouldShowBanner(false)
  }

  function acceptConsent(onlyRequired: boolean = false): void {
    const categories = ['required']
    if (!onlyRequired && allowAnalytics) categories.push('analytics')
    if (onlyRequired) setAllowAnalytics(false)
    setConsent((prevConsent) => {
      const consent = { ...prevConsent, accepted: true, categories }
      setCookie('cookieConsent', consent, { maxAge: threeMonths })
      return consent
    })
    setIsPreferencesVisible(false)
    setShouldShowBanner(false)
    if (allowAnalytics) {
      const gtag = getGtag()
      gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'granted',
      })
    }
  }

  function denyConsent(): void {
    setConsent((prevConsent) => {
      const consent = { ...prevConsent, accepted: false, categories: [] }
      setCookie('cookieConsent', consent, { maxAge: threeMonths })
      return consent
    })

    setIsPreferencesVisible(true)
    setShouldShowBanner(true)
    const gtag = getGtag()
    gtag('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
    })
    window.location.reload()
  }

  return {
    shouldShowBanner,
    acceptConsent,
    acceptConsentAll,
    denyConsent,
    isPreferencesVisible,
    setIsPreferencesVisible,
    handleAnalyticsChange,
    allowAnalytics,
  }
}
