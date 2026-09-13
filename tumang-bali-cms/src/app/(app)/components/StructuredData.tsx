import React from 'react'
import { SITE_CONTENT_UPDATED } from '@/lib/seoMetadata'

export default function StructuredData() {
  // Schema 1: LocalBusiness + TouristAttraction
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
      streetAddress: 'Banjar Laplapan, Petulu',
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
    priceRange: 'IDR 506,370–1,266,180',
    currenciesAccepted: 'IDR, USD',
    paymentAccepted: 'Cash, Credit Card, WhatsApp Transfer',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '1500',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Sarah M.' },
        reviewBody: 'Fantastic instruction and insightful market tour. Highly recommend.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'David L.' },
        reviewBody: 'Best meal we had in Bali — hands-on and beautiful rice-field setting.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Emma K.' },
        reviewBody: 'Great vegetarian options; recipes were easy to follow at home.',
      }
    ],
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
      'https://tumangbaliclass.com/images/ubud-cooking-class-chopping-ingredients.jpg',
      'https://tumangbaliclass.com/images/traditional-balinese-cooking-class-stir-fry.jpg',
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
      'https://www.tripadvisor.com/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html',
      'https://www.tripadvisor.co.id/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html',
      'https://www.instagram.com/tumangbali_/',
      'https://www.google.com/maps?cid=5953218619508310807',
      'https://www.getyourguide.com/ubud-l32246/ubud-balinese-cooking-class-with-local-chef-t1377291/',
      'https://www.viator.com/tours/Ubud/Ubud-Market-to-Table-Cooking-Class-and-Local-Herb-Discovery/d5467-5690403P1',
      'https://www.airbnb.com/experiences/7165714',
      'https://wa.me/6282210132418',
      'https://tumangbaliclass.com/llms.txt',
      'https://tumangbaliclass.com/llms-full.txt',
      'https://tumangbaliclass.com/press',
    ],
    knowsAbout: [
      'Balinese cuisine',
      'Base Genep',
      'Bumbu Bali',
      'Sambal Matah',
      'Sate Lilit',
      'Ubud food experiences',
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://tumangbaliclass.com/book-your-cooking-class',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Reservation',
        name: 'Balinese Cooking Class Booking',
      },
    },
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

  // Schema 2: Course
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
        name: 'Shared Cooking Class — 2+ adults',
        price: '506370',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
        priceValidUntil: '2027-12-31',
        url: 'https://tumangbaliclass.com/#classes',
      },
      {
        '@type': 'Offer',
        name: 'Shared Cooking Class — 1 adult',
        price: '616032',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
        priceValidUntil: '2027-12-31',
        url: 'https://tumangbaliclass.com/#classes',
      },
      {
        '@type': 'Offer',
        name: 'Private Cooking Class — 1 adult',
        price: '633090',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
        priceValidUntil: '2027-12-31',
        url: 'https://tumangbaliclass.com/private-cooking-class-ubud',
      },
      {
        '@type': 'Offer',
        name: 'Private Cooking Class — minimum 2 participants',
        price: '1266180',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
        priceValidUntil: '2027-12-31',
        url: 'https://tumangbaliclass.com/private-cooking-class-ubud',
      },
    ],
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        name: 'Morning Class (Market Tour & Cooking Masterclass)',
        courseMode: 'onsite',
        duration: 'PT4H',
        startDate: '2026-01-01',
        endDate: '2027-12-31',
        courseSchedule: {
          '@type': 'Schedule',
          startTime: '08:30',
          endTime: '12:30',
          repeatFrequency: 'P1D',
          byDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        instructor: { '@id': 'https://tumangbaliclass.com/about#wayan-suryana' },
        location: {
          '@type': 'Place',
          name: 'Tumang Bali Kitchen',
          address: { '@type': 'PostalAddress', addressLocality: 'Ubud', addressRegion: 'Bali', addressCountry: 'ID' },
        },
      },
      {
        '@type': 'CourseInstance',
        name: 'Afternoon Balinese Cooking Class',
        courseMode: 'onsite',
        duration: 'PT3H',
        startDate: '2026-01-01',
        endDate: '2027-12-31',
        courseSchedule: {
          '@type': 'Schedule',
          startTime: '14:30',
          endTime: '17:30',
          repeatFrequency: 'P1D',
          byDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        instructor: { '@id': 'https://tumangbaliclass.com/about#wayan-suryana' },
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

  // Schema 3: WebSite — help AI assistants identify the canonical brand entity
  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://tumangbaliclass.com/#website',
    name: 'Tumang Bali Cooking Class',
    alternateName: [
      'Best Cooking Class in Ubud Bali',
      'Tumang Bali',
      'Tumang Bali Cooking Class Ubud',
    ],
    description: 'Top-rated authentic Balinese cooking class in Ubud with market tour, rice field walk & hands-on cooking of 10+ traditional dishes. Shared IDR 506,370. Private 1 person IDR 633,090.',
    url: 'https://tumangbaliclass.com',
    dateModified: SITE_CONTENT_UPDATED,
    inLanguage: ['en-US', 'id-ID'],
    about: {
      '@type': 'Thing',
      name: 'Balinese cooking class in Ubud',
      sameAs: 'https://tumangbaliclass.com/llms-full.txt',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://tumangbaliclass.com/#business',
      name: 'Tumang Bali Cooking Class',
      url: 'https://tumangbaliclass.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tumangbaliclass.com/images/logo.jpg',
      },
      sameAs: [
        'https://www.instagram.com/tumangbali_/',
        'https://www.tripadvisor.com/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html',
        'https://www.tripadvisor.co.id/Attraction_Review-g297701-d26364507',
        'https://www.google.com/maps?cid=5953218619508310807',
        'https://www.getyourguide.com/ubud-l32246/ubud-balinese-cooking-class-with-local-chef-t1377291/',
        'https://www.viator.com/tours/Ubud/Ubud-Market-to-Table-Cooking-Class-and-Local-Herb-Discovery/d5467-5690403P1',
        'https://www.airbnb.com/experiences/7165714',
        'https://wa.me/6282210132418',
      ],
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '[data-speakable]', '#geo-cite-answer', '#faq'],
    },
  }

  // Schema: Person (chef expertise / E-E-A-T) — entity signal for ChatGPT / Gemini
  const chefPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://tumangbaliclass.com/about#wayan-suryana',
    name: 'Wayan Suryana',
    alternateName: 'Chef Wayan',
    jobTitle: 'Head Chef & Cooking Instructor',
    description:
      'Ubud-born Balinese chef with 15+ years teaching Base Genep spice pastes, market sourcing, and traditional village kitchen techniques in English at Tumang Bali Cooking Class.',
    url: 'https://tumangbaliclass.com/about',
    image: 'https://tumangbaliclass.com/images/chef-wayan-suryana.jpg',
    worksFor: { '@id': 'https://tumangbaliclass.com/#business' },
    knowsLanguage: ['en', 'id'],
    knowsAbout: [
      'Base Genep',
      'Bumbu Bali',
      'Balinese cuisine',
      'Vegetarian Balinese cooking',
      'Sambal Matah',
      'Sate Lilit',
      'Ubud cooking class',
    ],
    sameAs: [
      'https://www.instagram.com/tumangbali_/',
      'https://tumangbaliclass.com/press',
    ],
  }

  // Schema: FAQ answers AI engines frequently cite for cooking-class queries
  const aiFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://tumangbaliclass.com/#ai-faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Tumang Bali Cooking Class?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tumang Bali Cooking Class is a family-run small-group Balinese cooking school in Tumang village near Ubud, Bali. Guests join a morning market tour (morning session), rice-field walk, and hands-on cooking of 10+ dishes with Chef Wayan Suryana. Shared class IDR 506,370; private 1 person IDR 633,090. Max 8 guests. TripAdvisor Traveler\'s Choice 2026, 5.0 rating from 1500+ reviews.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best cooking class in Ubud?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Look for a real morning market tour, hand-ground spice paste, small groups, and 10+ dishes from scratch. Tumang Bali offers this with max 8 guests, a rice-field walk, vegetarian menu, and shared pricing from IDR 506,370.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a Bali cooking class in Ubud cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At Tumang Bali, a shared class is from IDR 506,370 per adult for 2+ guests (best value for couples). Solo is IDR 616,032 for 1 adult. Private is IDR 633,090 for 1 adult or IDR 1,266,180 for a minimum of 2 participants. Same price on every channel. Includes Ubud hotel pickup, ingredients, the meal, and a recipe booklet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Tumang Bali Cooking Class include a market tour?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The morning session (about 08:30–12:30) includes a guided market tour, rice-field walk, Canang Sari activity, and hands-on cooking. The afternoon session focuses on cooking and dinner without the market.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a vegetarian cooking class in Ubud?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Tumang Bali offers a full vegetarian Balinese menu with vegan adaptations on request at no extra charge. Same shared price IDR 506,370.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book Tumang Bali Cooking Class?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Book online at https://tumangbaliclass.com/book-your-cooking-class or message WhatsApp +62 822-1013-2418. Also listed on GetYourGuide, Viator, TripAdvisor, and Airbnb Experiences.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Tumang Bali Cooking Class good for couples and families?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Couples cook side by side in the village kitchen; families with kids aged 8+ are welcome. Shared from IDR 506,370 per adult for 2+ guests (1 adult IDR 616,032). Private: IDR 633,090 (1) / IDR 1,266,180 (min. 2); kids same as adult.',
        },
      },
    ],
  }

  // Schema 4: BreadcrumbList
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tumangbaliclass.com' },
      { '@type': 'ListItem', position: 2, name: 'Cooking Classes in Ubud', item: 'https://tumangbaliclass.com/authentic-balinese-cooking-class' },
      { '@type': 'ListItem', position: 3, name: 'Our Menu', item: 'https://tumangbaliclass.com/recipes' },
      { '@type': 'ListItem', position: 4, name: 'Book Your Experience', item: 'https://tumangbaliclass.com/book-your-cooking-class' },
    ],
  }

  // Schema 5: TouristTrip
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
      price: '506370',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    },
  }

  // Schema 6 & 7 (FAQPage and HowTo) — FAQ restored as aiFaq for AI answer engines
  // (ChatGPT / Gemini / Meta AI citation). HowTo remains omitted per Google guidelines.

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chefPerson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiFaq) }}
      />
    </>
  )
}
