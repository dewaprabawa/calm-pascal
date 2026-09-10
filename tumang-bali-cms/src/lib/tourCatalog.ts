import {
  PRIVATE_ADULT_SOLO_IDR,
  PROMO_PRIVATE_IDR,
  PROMO_SHARED_IDR,
  SHARED_ADULT_GROUP_IDR,
  isPromoActive,
} from '@/lib/pricing'

export type TourFilterId = 'all' | 'shared' | 'private' | 'vegetarian' | 'family' | 'culture'

export type TourPriceKind = 'shared' | 'private'

export type TourCatalogItem = {
  id: string
  title: string
  href: string
  image: string
  imageAlt: string
  categoryLabel: string
  location: string
  filters: Exclude<TourFilterId, 'all'>[]
  searchText: string
  badge?: string
  priceKind: TourPriceKind
}

export const TOUR_FILTERS: { id: TourFilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'shared', label: 'Shared' },
  { id: 'private', label: 'Private' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'family', label: 'Family' },
  { id: 'culture', label: 'Culture' },
]

/** Bookable cooking-class experiences shown on /tours (IG / Facebook catalog). */
export const TOUR_CATALOG: TourCatalogItem[] = [
  {
    id: 'market-tour',
    title: 'Morning Market Tour & Cooking Class',
    href: '/cooking-class-with-market-tour-ubud',
    image: '/images/img2.jpg',
    imageAlt: 'Guests at the Ubud morning market during a Tumang Bali cooking class',
    categoryLabel: 'Morning class',
    location: 'Ubud',
    filters: ['shared'],
    searchText:
      'morning market tour pasar traditional cooking class shared group 10 dishes hotel pickup kelas memasak pagi pasar ubud',
    badge: 'Market tour',
    priceKind: 'shared',
  },
  {
    id: 'half-day',
    title: 'Half-Day Cooking Class in Bali',
    href: '/half-day-cooking-class-bali',
    image: '/images/gallery-satay.jpg',
    imageAlt: 'Balinese satay grilling during a half-day cooking class in Ubud',
    categoryLabel: 'Half-day',
    location: 'Ubud',
    filters: ['shared'],
    searchText:
      'afternoon half day cooking class 3 hours dinner packed itinerary kelas memasak sore half-day',
    priceKind: 'shared',
  },
  {
    id: 'private',
    title: 'Private Cooking Class in Ubud',
    href: '/private-cooking-class-ubud',
    image: '/images/gallery-group.jpg',
    imageAlt: 'Private group cooking Balinese dishes together in Ubud',
    categoryLabel: 'Private class',
    location: 'Ubud',
    filters: ['private'],
    searchText:
      'private exclusive kitchen couples honeymoon solo chef your pace kelas privat pasangan',
    badge: 'Your kitchen',
    priceKind: 'private',
  },
  {
    id: 'vegetarian',
    title: 'Vegetarian Cooking Class in Ubud',
    href: '/vegetarian-cooking-class-ubud',
    image: '/images/gallery-chopping.jpg',
    imageAlt: 'Fresh vegetables and spices for a vegetarian Balinese cooking class',
    categoryLabel: 'Vegetarian',
    location: 'Ubud',
    filters: ['shared', 'vegetarian'],
    searchText:
      'vegetarian vegan plant based tempe tahu sayur urab sambal matah no meat kelas vegetarian vegan',
    priceKind: 'shared',
  },
  {
    id: 'family',
    title: 'Family Cooking Class in Bali',
    href: '/family-cooking-class-bali',
    image: '/images/gallery-girls.jpg',
    imageAlt: 'Family enjoying a hands-on Balinese cooking class in Ubud',
    categoryLabel: 'Family',
    location: 'Ubud',
    filters: ['shared', 'family'],
    searchText:
      'family kids children parents cooking class kid friendly keluarga anak-anak',
    priceKind: 'shared',
  },
  {
    id: 'tumpeng',
    title: 'Tumpeng Making Class in Bali',
    href: '/tumpeng-making-class',
    image: '/images/img4.jpg',
    imageAlt: 'Traditional Balinese tumpeng cone rice prepared in a cooking class',
    categoryLabel: 'Ceremonial',
    location: 'Ubud',
    filters: ['shared', 'culture'],
    searchText:
      'tumpeng cone rice ceremonial yellow rice culture temple celebration nasi tumpeng budaya',
    badge: 'Culture',
    priceKind: 'shared',
  },
]

export function tourFromPrice(item: TourCatalogItem, now: Date = new Date()): number {
  const promo = isPromoActive(now)
  if (item.priceKind === 'private') {
    return promo ? PROMO_PRIVATE_IDR : PRIVATE_ADULT_SOLO_IDR
  }
  return promo ? PROMO_SHARED_IDR : SHARED_ADULT_GROUP_IDR
}

export function tourWasPrice(item: TourCatalogItem): number | undefined {
  if (!isPromoActive()) return undefined
  return item.priceKind === 'private' ? PRIVATE_ADULT_SOLO_IDR : SHARED_ADULT_GROUP_IDR
}

export function filterTourCatalog(
  items: TourCatalogItem[],
  opts: { query: string; filter: TourFilterId },
): TourCatalogItem[] {
  const q = opts.query.trim().toLowerCase()
  return items.filter((item) => {
    if (opts.filter !== 'all' && !item.filters.includes(opts.filter)) return false
    if (!q) return true
    const haystack = `${item.title} ${item.categoryLabel} ${item.location} ${item.searchText} ${item.badge ?? ''}`.toLowerCase()
    return haystack.includes(q)
  })
}
