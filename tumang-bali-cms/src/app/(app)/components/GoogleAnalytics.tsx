import React from 'react'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-WXH5VLNNKS'

// Preview and local builds would otherwise report into the same property as the live site,
// which would corrupt the traffic data we use to steer SEO work.
const analyticsEnabled = process.env.VERCEL_ENV === 'production'

export default function GoogleAnalytics() {
  if (!analyticsEnabled) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
