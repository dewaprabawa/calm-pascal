export const GA_MEASUREMENT_ID = 'G-WXH5VLNNKS'

/**
 * Official GA4 gtag snippets as raw HTML so Google's install / "data collection"
 * check (view-source + Tag Assistant) can see `G-WXH5VLNNKS` immediately.
 *
 * Production only — preview and local builds would otherwise mix into the live
 * property and corrupt SEO traffic data.
 *
 * Do not also fire this Measurement ID from the GTM container, or pageviews
 * will double-count. Keep GA4 either here (gtag) or in GTM — not both.
 */
const analyticsEnabled = process.env.VERCEL_ENV === 'production'

export function GoogleAnalyticsScript() {
  if (!analyticsEnabled) return null

  return (
    <>
      {/* eslint-disable-next-line @next/next/next-script-for-ga */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      {/* eslint-disable-next-line @next/next/next-script-for-ga */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
        }}
      />
    </>
  )
}

/** @deprecated Prefer GoogleAnalyticsScript in <head>. Kept for layout imports. */
export default function GoogleAnalytics() {
  return null
}
