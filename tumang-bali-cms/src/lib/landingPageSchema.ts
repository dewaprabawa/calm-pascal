import { SITE, SITE_CONTENT_UPDATED, TRIPADVISOR_REVIEW_COUNT } from '@/lib/seoMetadata'

const BUSINESS_ID = `${SITE}/#business`

export function buildLandingBreadcrumb(pageName: string, pagePath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: pageName, item: `${SITE}${pagePath}` },
    ],
  }
}

export function buildLandingCourseSchema(opts: {
  name: string
  description: string
  pagePath: string
  priceIdr?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${SITE}${opts.pagePath}#course`,
    name: opts.name,
    description: opts.description,
    url: `${SITE}${opts.pagePath}`,
    provider: { '@id': BUSINESS_ID },
    offers: opts.priceIdr
      ? {
          '@type': 'Offer',
          price: opts.priceIdr,
          priceCurrency: 'IDR',
          availability: 'https://schema.org/InStock',
          url: `${SITE}/book-your-cooking-class`,
        }
      : undefined,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      courseWorkload: 'PT4H',
      location: {
        '@type': 'Place',
        name: 'Tumang Bali Cooking Class',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ubud',
          addressRegion: 'Bali',
          addressCountry: 'ID',
        },
      },
    },
  }
}

export function buildLandingLocalBusinessRef(pagePath: string, pageName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}${pagePath}#localbusiness`,
    name: 'Tumang Bali Cooking Class',
    description: pageName,
    url: `${SITE}${pagePath}`,
    parentOrganization: { '@id': BUSINESS_ID },
    image: `${SITE}/images/gallery-group.jpg`,
    telephone: '+62-822-1013-2418',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Banjar Laplapan, Petulu',
      addressLocality: 'Ubud',
      addressRegion: 'Bali',
      addressCountry: 'ID',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: TRIPADVISOR_REVIEW_COUNT,
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export function buildLandingWebPageSchema(opts: {
  name: string
  description: string
  pagePath: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE}${opts.pagePath}#webpage`,
    url: `${SITE}${opts.pagePath}`,
    name: opts.name,
    description: opts.description,
    dateModified: SITE_CONTENT_UPDATED,
    isPartOf: { '@id': `${SITE}/#website` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '[data-speakable]', '#geo-cite-answer', '#faq'],
    },
  }
}

export function buildLandingFaqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}
