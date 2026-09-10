import type { Metadata } from 'next'
import { buildPageMetadata, SITE, TRIPADVISOR_REVIEW_COUNT } from '@/lib/seoMetadata'
import { formatIdr } from '@/lib/pricing'
import { TOUR_CATALOG, tourFromPrice } from '@/lib/tourCatalog'
import { buildLandingBreadcrumb, buildLandingWebPageSchema } from '@/lib/landingPageSchema'
import ToursCatalog from './ToursCatalog'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  title: 'Cooking Class Tours Ubud — All Experiences',
  description:
    'See every Tumang Bali cooking class in one page: market tour, half-day, private, vegetarian, family, and tumpeng in Ubud. Tap a card to book or WhatsApp us.',
  path: '/tours',
  ogTitle: 'All Tumang Bali cooking class tours in Ubud',
  image: '/images/gallery-group.jpg',
  imageAlt: 'Guests at Tumang Bali Cooking Class in Ubud',
  keywords: [
    'ubud cooking class tours',
    'bali cooking class catalog',
    'tumang bali experiences',
    'cooking class ubud list',
  ],
})

export default function ToursPage() {
  const now = new Date()
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tumang Bali cooking class tours',
    description:
      'All bookable Balinese cooking-class experiences at Tumang Bali in Ubud — market tour, half-day, private, vegetarian, family, and tumpeng.',
    url: `${SITE}/tours`,
    numberOfItems: TOUR_CATALOG.length,
    itemListElement: TOUR_CATALOG.map((tour, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE}${tour.href}`,
      item: {
        '@type': 'Product',
        name: tour.title,
        url: `${SITE}${tour.href}`,
        image: `${SITE}${tour.image}`,
        offers: {
          '@type': 'Offer',
          price: tourFromPrice(tour, now),
          priceCurrency: 'IDR',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  }

  const breadcrumb = buildLandingBreadcrumb('Tours', '/tours')
  const webPage = buildLandingWebPageSchema({
    name: 'Cooking class tours in Ubud',
    description:
      'Mobile catalog of every Tumang Bali cooking class — share this page from Instagram and Facebook.',
    pagePath: '/tours',
  })

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <h1 className="sr-only">
        All Tumang Bali cooking class tours in Ubud — 5.0 from {TRIPADVISOR_REVIEW_COUNT}+ reviews, from{' '}
        {formatIdr(tourFromPrice(TOUR_CATALOG[0], now))}
      </h1>
      <ToursCatalog />
    </main>
  )
}
