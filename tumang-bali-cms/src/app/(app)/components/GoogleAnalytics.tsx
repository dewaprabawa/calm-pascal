import GoogleAnalyticsClient from './GoogleAnalyticsClient'

// Preview and local builds would otherwise report into the same property as the live site,
// which would corrupt the traffic data we use to steer SEO work.
const analyticsEnabled = process.env.VERCEL_ENV === 'production'

export default function GoogleAnalytics() {
  if (!analyticsEnabled) return null
  return <GoogleAnalyticsClient />
}
