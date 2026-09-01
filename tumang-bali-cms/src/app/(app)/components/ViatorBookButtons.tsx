'use client'

import TrackedBookingLink from './TrackedBookingLink'
import { OTA_LINKS } from '@/lib/otaBookingLinks'

const viatorBtn =
  'inline-flex items-center justify-center bg-[#00A19C] hover:bg-[#008a86] text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg'

type Props = {
  /** GA4 / booking tracking label prefix, e.g. "TripAdvisor page" */
  context?: string
  layout?: 'row' | 'stack'
}

export default function ViatorBookButtons({ context = 'Page', layout = 'stack' }: Props) {
  const wrapClass =
    layout === 'row'
      ? 'flex flex-col sm:flex-row flex-wrap gap-3 justify-center'
      : 'flex flex-col gap-3 max-w-md mx-auto'

  return (
    <div className={wrapClass}>
      <TrackedBookingLink
        href={OTA_LINKS.viator.marketToTable}
        channel="viator"
        linkLabel={`${context} — Viator Market to Table`}
        className={viatorBtn}
      >
        Book on Viator — Market to Table Class
      </TrackedBookingLink>
      <TrackedBookingLink
        href={OTA_LINKS.viator.marketToTableDirect}
        channel="viator"
        linkLabel={`${context} — Viator direct link`}
        className={`${viatorBtn} bg-[#008a86] hover:bg-[#007570]`}
      >
        Book on Viator — Check dates and pay
      </TrackedBookingLink>
    </div>
  )
}
