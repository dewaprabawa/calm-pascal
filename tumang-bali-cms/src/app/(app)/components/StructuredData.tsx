import React from 'react'
import { faqs } from './faqsData'

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

  // Schema 3: WebSite with search action
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
      price: '350000',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    },
  }

  // Schema 6: FAQPage (expanded with more SERP-optimised questions)
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Tumang Bali Cooking Class?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tumang Bali Cooking Class is an authentic Balinese cooking class in Ubud, Bali. We offer hands-on cooking experiences with a local market tour, rice field walk, and the chance to learn 10+ traditional dishes from scratch. Our classes are vegetarian friendly with complimentary hotel pickup included.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the cooking class?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our cooking class includes a guided local market tour, a welcome drink, hands-on cooking of 10+ traditional Balinese dishes (both regular and vegetarian options), a full lunch or dinner with the food you prepared, a recipe book to take home, and complimentary hotel pickup from the Ubud area.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need any cooking experience?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely not! Our classes are designed for all skill levels — from complete beginners to experienced home cooks. Our friendly local chefs will guide you step-by-step through every recipe.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best area in Bali for a cooking class?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ubud is the best area for a cooking class. It has the best morning market, the closest access to rice fields, and the widest range of cooking schools. We pick up guests from their Ubud hotel for free.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a cooking class in Bali cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our class starts at $35 USD (around IDR 480,000) per person, which includes everything: market tour, cooking class, lunch, recipe booklet, and hotel pickup.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a vegetarian menu available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer a complete vegetarian menu featuring dishes like Kare Tahu (Tofu Curry), Sate Tempe (Tempeh Satay), Tofu Pepes (Steamed Tofu in Banana Leaf), and many more. Just let us know when booking.',
        },
      },
      {
        '@type': 'Question',
        name: 'What time does the class start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer two sessions daily: a Morning Class starting at 8:00 AM (includes market tour) and an Afternoon Class starting at 2:00 PM. The morning class is our most popular option as you get to experience the vibrant local market!',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get to the cooking class?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer complimentary hotel pickup and drop-off from the Ubud area. For guests staying outside Ubud, we can arrange transport for a small additional fee.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long is the cooking class?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The full experience lasts approximately 4–5 hours, which includes the market tour (45 mins), rice field walk (30 mins), cooking class (2 hours), and dining time (1 hour).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I book for a group?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We welcome groups of any size. For groups of 6 or more, we can arrange a private cooking class exclusively for your party.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can kids join the cooking class?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kids aged 8 and above are very welcome! It\'s a fun, interactive family activity. Little hands love grinding spices and stirring the sate sauce.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I get a recipe booklet to take home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Every guest receives a printed recipe booklet with all 10+ dishes we cook, so you can recreate the authentic flavors long after your cooking class in Ubud.',
        },
      },
    ],
  }

  // Schema 7: HowTo — "How a Balinese cooking class works"
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How a Balinese Cooking Class Works',
    description: 'A step-by-step guide to what happens during a traditional Balinese cooking class in Ubud — from hotel pickup to the final feast.',
    totalTime: 'PT4H30M',
    estimateSuccessRanking: 'Easy to follow, suitable for beginners',
    supply: [
      { '@type': 'HowToSupply', name: 'Comfortable clothing' },
      { '@type': 'HowToSupply', name: 'Closed-toe shoes' },
      { '@type': 'HowToSupply', name: 'Camera for photos' },
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Stone mortar and pestle (cobek)' },
      { '@type': 'HowToTool', name: 'Traditional Balinese knives' },
      { '@type': 'HowToTool', name: 'Banana leaves' },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Hotel Pickup',
        text: 'Your driver picks you up from your hotel in the Ubud area at 7:30 AM with a cup of coffee or tea.',
        url: 'https://tumangbaliclass.com',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Market Tour',
        text: 'Walk through the traditional Balinese morning market. Learn about exotic spices, fresh herbs, and ingredients you may have never seen before.',
        url: 'https://tumangbaliclass.com/cooking-class-bali',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Rice Field Walk',
        text: 'Walk through the green rice paddies surrounding Tumang village. The scenic route adds to the cultural experience of your cooking class.',
        url: 'https://tumangbaliclass.com/cooking-class-with-market-tour-ubud',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Make Flower Offering',
        text: 'Learn to make a traditional Balinese Canang Sari offering — a small woven palm leaf bowl with flowers and betel nut — before cooking begins.',
        url: 'https://tumangbaliclass.com/authentic-balinese-cooking-class',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Grind Spice Paste',
        text: 'The heart of Balinese cooking. Use a traditional stone mortar and pestle to grind Base Genep — the complete Balinese spice paste that defines the flavour of every dish.',
        url: 'https://tumangbaliclass.com/blog/how-to-make-bumbu-bali',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Cook 10+ Dishes',
        text: 'Prepare traditional Balinese dishes step by step under the guidance of local chefs. You will cook everything from chicken satay to coconut pancakes.',
        url: 'https://tumangbaliclass.com/#classes',
      },
      {
        '@type': 'HowToStep',
        position: 7,
        name: 'Enjoy the Feast',
        text: 'Sit down with your group and enjoy the full feast you cooked together. Then receive your recipe booklet and certificate of completion.',
        url: 'https://tumangbaliclass.com/book-your-cooking-class',
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
    </>
  )
}
