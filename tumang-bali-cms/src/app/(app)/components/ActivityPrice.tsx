import React from 'react'
import {
  formatIdr,
  toFullIdr,
  PROMO_ACTIVE,
  PROMO_SHARED_SOLO_IDR,
  PROMO_LABEL,
  SHARED_ADULT_SOLO_IDR,
} from '@/lib/pricing'

type Props = {
  price?: number | null
  groupPrice?: number | null
  kidsPrice?: number | null
  /** When true, treat as private (min-2 package wording). */
  isPrivate?: boolean
  className?: string
}

/**
 * Activity card price block.
 * Shared: lead with the cheaper 2+ rate so couples see the best price first.
 * Private: lead with 1-person rate; show min-2 package below.
 * Accepts full IDR or legacy thousands-of-IDR CMS values.
 */
export default function ActivityPrice({
  price,
  groupPrice,
  kidsPrice,
  isPrivate = false,
  className = '',
}: Props) {
  const solo = toFullIdr(price)
  const group = toFullIdr(groupPrice)
  const kids = toFullIdr(kidsPrice)
  const privateGuess =
    isPrivate ||
    (solo != null && group != null && group >= solo * 1.5)

  if (solo == null) return null

  // Only discount the standard shared-class solo rate, not private or custom-priced activities.
  const showPromo = PROMO_ACTIVE && !privateGuess && solo === SHARED_ADULT_SOLO_IDR

  // Shared with a cheaper group rate: emphasize 2+ price first
  if (!privateGuess && group != null && group < solo) {
    return (
      <div className={`text-right flex-shrink-0 ${className}`}>
        <span className="text-xl sm:text-2xl font-black text-orange-500 leading-tight block">
          {formatIdr(group)}
        </span>
        <p className="text-[11px] sm:text-xs font-semibold text-stone-500 mt-0.5">
          per adult · 2+ guests
        </p>
        {showPromo ? (
          <p className="text-[11px] sm:text-xs text-stone-500 mt-1.5 leading-snug">
            1 guest{' '}
            <span className="line-through text-stone-400">{formatIdr(solo)}</span>{' '}
            <span className="font-bold text-orange-600">{formatIdr(PROMO_SHARED_SOLO_IDR)}</span>{' '}
            <span className="uppercase text-[9px] font-black text-white bg-orange-500 px-1.5 py-0.5 rounded-full align-middle">
              {PROMO_LABEL}
            </span>
          </p>
        ) : (
          <p className="text-[11px] sm:text-xs text-stone-500 mt-1.5 leading-snug">
            1 guest {formatIdr(solo)}
          </p>
        )}
        {kids != null ? (
          <p className="text-xs font-semibold text-stone-500 mt-1">Kids {formatIdr(kids)}</p>
        ) : null}
      </div>
    )
  }

  return (
    <div className={`text-right flex-shrink-0 ${className}`}>
      {showPromo ? (
        <span className="text-xs font-bold text-stone-400 line-through block">
          {formatIdr(solo)}
        </span>
      ) : null}
      <span className="text-xl sm:text-2xl font-black text-orange-500 leading-tight block">
        {formatIdr(showPromo ? PROMO_SHARED_SOLO_IDR : solo)}
      </span>
      <p className="text-[11px] sm:text-xs font-semibold text-stone-500 mt-0.5">
        1 participant
        {showPromo ? (
          <span className="ml-1 uppercase text-[9px] font-black text-white bg-orange-500 px-1.5 py-0.5 rounded-full align-middle">
            {PROMO_LABEL}
          </span>
        ) : null}
      </p>
      {group != null ? (
        <>
          <span className="text-sm sm:text-base font-bold text-orange-500/90 leading-tight block mt-1.5">
            {formatIdr(group)}
          </span>
          <p className="text-[11px] sm:text-xs font-semibold text-stone-500 mt-0.5">
            {privateGuess ? 'min. 2 participants' : '2+ participants'}
          </p>
        </>
      ) : null}
      {privateGuess ? (
        <p className="text-[11px] sm:text-xs font-semibold text-stone-500 mt-1.5">
          Kids same as adult
        </p>
      ) : kids != null ? (
        <p className="text-xs font-semibold text-stone-500 mt-1">Kids {formatIdr(kids)}</p>
      ) : null}
    </div>
  )
}
