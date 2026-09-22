export const GTM_ID = 'GTM-W79WCBZS'

/**
 * Official GTM snippets as raw HTML so Google's install check (view-source)
 * can see `GTM-W79WCBZS` without waiting for hydration or user interaction.
 *
 * Included on every production build (Vercel production and preview). Local
 * `next dev` omits it so localhost hits do not pollute the container.
 *
 * Keep the GA4 Measurement ID (`G-WXH5VLNNKS`) out of this GTM container —
 * it is loaded via the official gtag snippet in `GoogleAnalyticsScript`,
 * and adding it again in GTM would double-count pageviews.
 */
const gtmEnabled = process.env.NODE_ENV !== 'development'

export function GoogleTagManagerScript() {
  if (!gtmEnabled) return null

  return (
    // Official GTM snippet in the initial HTML. `@next/third-parties` injects
    // after hydration, which makes Google's install check report "tag wasn't detected".
    // eslint-disable-next-line @next/next/next-script-for-ga
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  )
}

export function GoogleTagManagerNoscript() {
  if (!gtmEnabled) return null

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
