import React from 'react'

export default function StructuredData() {
  // Schema 1: LocalBusiness + TouristAttraction (competitor only has WebSite)
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TouristAttraction', 'FoodEstablishment'],
    '@id': 'https://tumangbaliclass.com/#business',
    name: 'Tumang Bali Cooking Class',
    alternateName: 'Tumang Bali',
    description: 'Top-rated authentic Balinese cooking class in Ubud. Join our hands-on cooking experience with local market tour, rice field walk, and learn to cook 10+ traditional dishes with local chefs. Vegetarian friendly. Hotel pickup included.',
    url: 'https://tumangbaliclass.com',
    telephone: '+62-822-1013-2418',
    email: 'info@tumangbali.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raya Ubud',
      addressLocality: 'Ubud',
      addressRegion: 'Bali',
      postalCode: '80571',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.4945634,
      longitude: 115.2810863,
    },
    hasMap: 'https://www.google.com/maps?cid=5953218619508310807',
    priceRange: 'IDR 350,000',
    currenciesAccepted: 'IDR, USD',
    paymentAccepted: 'Cash, Credit Card, WhatsApp Transfer',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '1500',
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    image: [
      'https://tumangbaliclass.com/images/gallery-group.jpg',
      'https://tumangbaliclass.com/images/gallery-chopping.jpg',
      'https://tumangbaliclass.com/images/gallery-girls.jpg',
      'https://tumangbaliclass.com/images/gallery-satay.jpg',
      'https://tumangbaliclass.com/images/gallery-thumbs.jpg',
    ],
    photo: {
      '@type': 'ImageObject',
      url: 'https://tumangbaliclass.com/images/gallery-group.jpg',
      width: 1200,
      height: 800,
    },
    logo: {
      '@type': 'ImageObject',
      url: 'https://tumangbaliclass.com/images/logo.jpg',
    },
    sameAs: [
      'https://www.tripadvisor.co.id/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html',
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: -8.4945634, longitude: 115.2810863 },
      geoRadius: '30000',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Vegetarian Menu', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Hotel Pickup', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Market Tour', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Rice Field Walk', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Recipe Book', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Small Groups', value: true },
    ],
    keywords: 'cooking class Ubud, Bali cooking class, Balinese cooking experience, best cooking class Bali, market tour Ubud, vegetarian cooking class, things to do in Ubud',
  }

  // Schema 2: Course (competitor doesn't have this)
  const course = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': 'https://tumangbaliclass.com/#course',
    name: 'Authentic Balinese Cooking Masterclass with Market Tour',
    description: 'A 5-hour immersive culinary experience in Ubud, Bali. Visit the local morning market, walk through rice fields, and learn to cook 10+ traditional Balinese dishes from scratch with an expert local chef. Suitable for all skill levels.',
    provider: {
      '@type': 'Organization',
      name: 'Tumang Bali Cooking Class',
      url: 'https://tumangbaliclass.com',
      logo: 'https://tumangbaliclass.com/images/logo.jpg',
    },
    // Note: `courseMode` is a property of CourseInstance, not Course, per
    // schema.org. It is set on each hasCourseInstance entry below instead.
    educationalLevel: 'Beginner',
    inLanguage: ['en', 'id'],
    locationCreated: {
      '@type': 'Place',
      name: 'Tumang Bali Kitchen, Ubud',
      address: { '@type': 'PostalAddress', addressLocality: 'Ubud', addressRegion: 'Bali', addressCountry: 'ID' },
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Morning Market Tour & Cooking Masterclass',
        price: '350000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
        priceValidUntil: '2027-12-31',
        url: 'https://tumangbaliclass.com/#classes',
      },
    ],
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        name: 'Morning Class',
        courseMode: 'onsite',
        duration: 'PT5H',
        startDate: '2026-01-01',
        endDate: '2027-12-31',
        courseSchedule: {
          '@type': 'Schedule',
          startTime: '08:00',
          endTime: '13:00',
          repeatFrequency: 'P1D',
          byDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        instructor: {
          '@type': 'Person',
          name: 'Wayan Sudiana',
          jobTitle: 'Head Chef & Cooking Instructor',
          description: 'Born and raised in Ubud with 15+ years of experience sharing Balinese culinary heritage.',
        },
        location: {
          '@type': 'Place',
          name: 'Tumang Bali Kitchen',
          address: { '@type': 'PostalAddress', addressLocality: 'Ubud', addressRegion: 'Bali', addressCountry: 'ID' },
        },
      },
    ],
    about: [
      { '@type': 'Thing', name: 'Balinese Cuisine' },
      { '@type': 'Thing', name: 'Traditional Cooking' },
      { '@type': 'Thing', name: 'Indonesian Food' },
      { '@type': 'Thing', name: 'Spice Paste (Bumbu)' },
      { '@type': 'Thing', name: 'Satay Making' },
    ],
    teaches: [
      'How to make traditional Balinese spice paste (Base Gede)',
      'Cooking Sate Ayam (Chicken Satay) on coconut husk charcoal',
      'Preparing Pepes Ikan (Fish wrapped in banana leaf)',
      'Making Nasi Goreng (Indonesian Fried Rice)',
      'Creating Sambal Matah (Raw Balinese Sambal)',
      'Rolling Dadar Gulung (Coconut pancake dessert)',
    ],
  }

  // Schema 3: WebSite with search action (competitor has this but basic)
  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://tumangbaliclass.com/#website',
    name: 'Tumang Bali Cooking Class',
    alternateName: 'Best Cooking Class in Ubud Bali',
    description: 'Top-rated authentic Balinese cooking class in Ubud with market tour, rice field walk & hands-on cooking of 10+ traditional dishes.',
    url: 'https://tumangbaliclass.com',
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Tumang Bali Cooking Class',
      url: 'https://tumangbaliclass.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tumangbaliclass.com/images/logo.jpg',
      },
    },
  }

  // Schema 4: BreadcrumbList
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tumangbaliclass.com' },
      { '@type': 'ListItem', position: 2, name: 'Cooking Classes in Ubud', item: 'https://tumangbaliclass.com/#classes' },
      { '@type': 'ListItem', position: 3, name: 'Our Menu', item: 'https://tumangbaliclass.com/#menu' },
      { '@type': 'ListItem', position: 4, name: 'Book Your Experience', item: 'https://tumangbaliclass.com/#classes' },
    ],
  }

  // Schema 5: TouristTrip (competitor doesn't have this)
  const touristTrip = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Ubud Cooking Class & Cultural Experience',
    description: 'An immersive half-day culinary adventure through Ubud\'s local market, rice fields, and traditional kitchen.',
    touristType: ['Food Tourist', 'Cultural Tourist', 'Adventure Tourist'],
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Hotel Pickup', description: 'Comfortable ride from your hotel to Ubud' },
        { '@type': 'ListItem', position: 2, name: 'Local Market Tour', description: 'Explore the traditional Ubud morning market' },
        { '@type': 'ListItem', position: 3, name: 'Rice Field Walk', description: 'Scenic walk through green rice paddies' },
        { '@type': 'ListItem', position: 4, name: 'Cooking Class', description: 'Hands-on cooking of 10+ traditional Balinese dishes' },
        { '@type': 'ListItem', position: 5, name: 'Dining Experience', description: 'Enjoy the food you cooked with beautiful views' },
      ],
    },
    offers: {
      '@type': 'Offer',
      price: '350000',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTrip) }}
      />
    </>
  )
}
