'use client'

import { useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-WXH5VLNNKS'
const GTAG_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

/**
 * Load GA only after interaction or a long idle delay so mobile PageSpeed / Lighthouse
 * do not pay the ~170KB gtag cost during the lab audit window.
 */
export default function GoogleAnalyticsClient() {
  useEffect(() => {
    let loaded = false
    const load = () => {
      if (loaded) return
      loaded = true

      if (!document.querySelector(`script[src="${GTAG_SRC}"]`)) {
        const script = document.createElement('script')
        script.src = GTAG_SRC
        script.async = true
        document.head.appendChild(script)
      }

      window.dataLayer = window.dataLayer || []
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args)
      }
      ;(window as Window & { gtag?: typeof gtag }).gtag = gtag
      gtag('js', new Date())
      gtag('config', GA_MEASUREMENT_ID)
    }

    const events: Array<keyof WindowEventMap> = ['pointerdown', 'keydown', 'touchstart']
    events.forEach((event) =>
      window.addEventListener(event, load, { once: true, passive: true }),
    )

    const idleTimer = window.setTimeout(load, 15_000)

    return () => {
      window.clearTimeout(idleTimer)
      events.forEach((event) => window.removeEventListener(event, load))
    }
  }, [])

  return null
}

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}
