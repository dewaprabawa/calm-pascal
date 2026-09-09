import Script from 'next/script'

export const GTM_ID = 'GTM-W79WCBZS'

// Preview and local builds would otherwise report into the same container as
// the live site, which would corrupt the traffic data we use to steer SEO work.
const analyticsEnabled = process.env.VERCEL_ENV === 'production'

/**
 * Official GTM bootstrap. Place {@link GoogleTagManagerScript} on the root
 * `<html>` (Next.js injects it after hydration) and
 * {@link GoogleTagManagerNoscript} immediately after the opening `<body>` tag.
 *
 * Keep the existing gtag GA4 tag (`G-WXH5VLNNKS`) out of this GTM container
 * while `GoogleAnalytics` still loads it, or pageviews will double-count.
 */
export function GoogleTagManagerScript() {
  if (!analyticsEnabled) return null

  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  )
}

export function GoogleTagManagerNoscript() {
  if (!analyticsEnabled) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
