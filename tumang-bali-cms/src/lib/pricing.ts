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

/** Private class — adult rate for a minimum of 2 participants (package for 2) */
export const PRIVATE_ADULT_MIN2_IDR = 1_266_180

/** Private kids — same as adult private solo rate (no kids discount). */
export const PRIVATE_KIDS_IDR = PRIVATE_ADULT_SOLO_IDR

/** Default shared rate used in “from” marketing copy (typical 2+ booking). */
export const DIRECT_SHARED_CLASS_IDR = SHARED_ADULT_GROUP_IDR

/**
 * September 2026 promo — Bali (WITA) calendar month only.
 * Regular/shared class: IDR 300,000 · Private class: IDR 700,000.
 * After September, isPromoActive() returns false and normal rates apply everywhere.
 */
const PROMO_TIME_ZONE = 'Asia/Makassar'
const PROMO_YEAR = 2026
const PROMO_MONTH = 9 // September

/** Promo price for the regular (shared) cooking class. */
export const PROMO_SHARED_IDR = 300_000

/** @deprecated Use PROMO_SHARED_IDR — kept for older call sites. */
export const PROMO_SHARED_SOLO_IDR = PROMO_SHARED_IDR

/** Promo price for the private cooking class (1 participant / lead rate). */
export const PROMO_PRIVATE_IDR = 700_000

export const PROMO_LABEL = 'September Promo'

export function isPromoActive(now: Date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: PROMO_TIME_ZONE,
    year: 'numeric',
    month: 'numeric',
  }).formatToParts(now)
  const year = Number(parts.find((p) => p.type === 'year')?.value)
  const month = Number(parts.find((p) => p.type === 'month')?.value)
  return year === PROMO_YEAR && month === PROMO_MONTH
}

/**
 * Request-time promo flag. Prefer isPromoActive() in render paths so static
 * builds do not permanently bake September in or out.
 */
export const PROMO_ACTIVE = isPromoActive()

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

/**
 * Promo-aware "shared class" price line for hero/intro copy on landing pages.
 * Change PROMO_SHARED_IDR / SHARED_ADULT_GROUP_IDR above and every page using
 * this helper updates automatically — no need to hunt down hardcoded prices.
 */
export function sharedHeroPriceText(now: Date = new Date()): string {
  return isPromoActive(now)
    ? `${formatIdr(PROMO_SHARED_IDR)} shared (${PROMO_LABEL})`
    : `${formatIdr(SHARED_ADULT_GROUP_IDR)} shared`
}

/** Short “from …” phrase for meta descriptions / OG titles. */
export function fromPriceMetaSnippet(now: Date = new Date()): string {
  return isPromoActive(now)
    ? `${formatIdr(PROMO_SHARED_IDR)} ${PROMO_LABEL}`
    : formatIdr(SHARED_ADULT_GROUP_IDR)
}

/**
 * Promo-aware shared/private summaries for booking + FAQ copy.
 * After September, falls back to regular SHARED_/PRIVATE_ summaries.
 */
export function sharedPricingSummaryForDisplay(now: Date = new Date()): string {
  if (!isPromoActive(now)) return SHARED_PRICING_SUMMARY
  return `${formatIdr(PROMO_SHARED_IDR)} shared (${PROMO_LABEL}; regular ${formatIdr(SHARED_ADULT_GROUP_IDR)} for 2+)`
}

export function privatePricingSummaryForDisplay(now: Date = new Date()): string {
  if (!isPromoActive(now)) return PRIVATE_PRICING_SUMMARY
  return `${formatIdr(PROMO_PRIVATE_IDR)} private (${PROMO_LABEL}; regular from ${formatIdr(PRIVATE_ADULT_SOLO_IDR)})`
}

export const SHARED_PRICING_SUMMARY =
  `${formatIdr(SHARED_ADULT_GROUP_IDR)} per adult for 2+ guests (1 adult ${formatIdr(SHARED_ADULT_SOLO_IDR)})`

export const PRIVATE_PRICING_SUMMARY =
  `${formatIdr(PRIVATE_ADULT_SOLO_IDR)} for 1 adult; ${formatIdr(PRIVATE_ADULT_MIN2_IDR)} for a minimum of 2 participants; kids same as adult (${formatIdr(PRIVATE_KIDS_IDR)})`

export const OTA_SAME_PRICE_NOTE =
  'Prices are the same whether you book on tumangbaliclass.com, WhatsApp, GetYourGuide, Viator, or Airbnb Experiences — we do not add platform commission or overcharge. Use an OTA when you want instant checkout; use WhatsApp when you prefer a personal confirmation.'
