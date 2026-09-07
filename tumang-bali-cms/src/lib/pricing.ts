/**
 * Canonical Tumang Bali cooking-class adult prices (full IDR).
 * Same rates on direct booking and OTAs — no commission markup.
 */

/** Shared / regular class — 1 adult participant */
export const SHARED_ADULT_SOLO_IDR = 616_032

/** Shared / regular class — each adult when 2+ participants */
export const SHARED_ADULT_GROUP_IDR = 506_370

/** Private class — 1 adult participant */
export const PRIVATE_ADULT_SOLO_IDR = 633_090

/** Private class — adult rate for minimum 2 participants (package for 2) */
export const PRIVATE_ADULT_MIN2_IDR = 1_266_180

/** Default shared rate used in “from” marketing copy (typical 2+ booking). */
export const DIRECT_SHARED_CLASS_IDR = SHARED_ADULT_GROUP_IDR

export function formatIdr(amount: number): string {
  return `IDR ${amount.toLocaleString('id-ID')}`
}

export function formatIdrShort(amount: number): string {
  if (amount >= 1_000_000) {
    const millions = amount / 1_000_000
    return `IDR ${millions.toLocaleString('id-ID', { maximumFractionDigits: 2 })}Jt`
  }
  return formatIdr(amount)
}

/** Normalize CMS values: legacy “thousands of IDR” (e.g. 350) → full IDR. */
export function toFullIdr(value: number | null | undefined): number | undefined {
  if (value == null || Number.isNaN(value)) return undefined
  if (value > 0 && value < 10_000) return Math.round(value * 1_000)
  return Math.round(value)
}

export const SHARED_PRICING_SUMMARY =
  `${formatIdr(SHARED_ADULT_SOLO_IDR)} for 1 adult; ${formatIdr(SHARED_ADULT_GROUP_IDR)} per adult for 2+ participants`

export const PRIVATE_PRICING_SUMMARY =
  `${formatIdr(PRIVATE_ADULT_SOLO_IDR)} for 1 adult; ${formatIdr(PRIVATE_ADULT_MIN2_IDR)} for a minimum of 2 participants`

export const OTA_SAME_PRICE_NOTE =
  'Prices are the same whether you book on tumangbaliclass.com, WhatsApp, GetYourGuide, Viator, or Airbnb Experiences — we do not add platform commission or overcharge. Use an OTA when you want instant checkout; use WhatsApp when you prefer a personal confirmation.'
