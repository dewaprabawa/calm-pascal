import {
  PRIVATE_ADULT_MIN2_IDR,
  PRIVATE_ADULT_SOLO_IDR,
  PRIVATE_KIDS_IDR,
  SHARED_ADULT_GROUP_IDR,
  SHARED_ADULT_SOLO_IDR,
  toFullIdr,
} from '@/lib/pricing'

type ActivityLike = {
  title?: string | null
  price?: number | null
  groupPrice?: number | null
  kidsPrice?: number | null
}

const LEGACY_SHARED = new Set([300, 300_000, 350, 350_000])
const LEGACY_PRIVATE = new Set([650, 650_000])
/** Old discounted kids rates (before kids = adult) */
const LEGACY_KIDS_DISCOUNT = new Set([550, 550_000])

function isPrivateTitle(title: string | null | undefined): boolean {
  return String(title || '').toLowerCase().includes('private')
}

/**
 * Normalize activity prices from CMS (legacy thousands or stale 350/650)
 * to the current adult tiered rates. Private kids = adult private rate.
 */
export function normalizeActivityPricing<T extends ActivityLike>(activity: T): T & {
  price: number
  groupPrice: number
  kidsPrice?: number
} {
  const privateActivity = isPrivateTitle(activity.title)
  const rawPrice = toFullIdr(activity.price)
  const rawGroup = toFullIdr(activity.groupPrice)

  const priceLooksLegacy =
    rawPrice == null ||
    LEGACY_SHARED.has(rawPrice) ||
    LEGACY_PRIVATE.has(rawPrice) ||
    LEGACY_KIDS_DISCOUNT.has(rawPrice)

  if (privateActivity) {
    return {
      ...activity,
      price:
        priceLooksLegacy &&
        (rawPrice == null || LEGACY_PRIVATE.has(rawPrice) || LEGACY_SHARED.has(rawPrice))
          ? PRIVATE_ADULT_SOLO_IDR
          : (rawPrice ?? PRIVATE_ADULT_SOLO_IDR),
      groupPrice:
        rawGroup == null ||
        LEGACY_PRIVATE.has(rawGroup) ||
        LEGACY_SHARED.has(rawGroup) ||
        LEGACY_KIDS_DISCOUNT.has(rawGroup)
          ? PRIVATE_ADULT_MIN2_IDR
          : rawGroup,
      // Kids pay the same as adults on private bookings
      kidsPrice: PRIVATE_KIDS_IDR,
    }
  }

  const rawKids = toFullIdr(activity.kidsPrice)

  return {
    ...activity,
    price:
      rawPrice == null || LEGACY_SHARED.has(rawPrice) || LEGACY_PRIVATE.has(rawPrice)
        ? SHARED_ADULT_SOLO_IDR
        : rawPrice,
    groupPrice:
      rawGroup == null || LEGACY_SHARED.has(rawGroup) || LEGACY_PRIVATE.has(rawGroup)
        ? SHARED_ADULT_GROUP_IDR
        : rawGroup,
    kidsPrice:
      rawKids != null && !LEGACY_KIDS_DISCOUNT.has(rawKids) ? rawKids : undefined,
  }
}
