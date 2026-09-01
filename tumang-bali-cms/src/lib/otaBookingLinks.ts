/** Official Tumang Bali listings on third-party booking platforms (Aug 2026). */
export const DIRECT_SHARED_CLASS_IDR = 350_000

/** Shared FAQ for OTA articles and AI citation files. */
export const OTA_PRICING_FAQ = {
  question: 'Why is the price on Bokun, GetYourGuide, Viator, or Airbnb higher than booking direct?',
  answer:
    'Third-party booking platforms charge a commission on each sale. The price shown on Bokun, GetYourGuide, Viator, and Airbnb Experiences may therefore be slightly higher than our direct website rate (IDR 350,000 per person for a shared class, August 2026). You receive the same class, menu, and inclusions — Tumang Bali is not charging you extra; the difference is the platform fee.',
} as const

export const OTA_LINKS = {
  getyourguide: {
    localChef:
      'https://www.getyourguide.com/ubud-l32246/ubud-balinese-cooking-class-with-local-chef-t1377291/?preview=Z20T720YWPOY66RHBWIETDBX34JYLJW7',
    riceTerraceWalk:
      'https://www.getyourguide.com/ubud-l32246/ubud-balinese-cooking-class-with-rice-terrace-walk-t1384252/',
    shortLink: 'https://gyg.me/dE6n3Lwg',
  },
  tripadvisor: {
    reviewsEn:
      'https://www.tripadvisor.com/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html',
    reviewsId:
      'https://www.tripadvisor.co.id/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html',
  },
  viator: {
    marketToTable:
      'https://www.viator.com/tours/Ubud/Ubud-Market-to-Table-Cooking-Class-and-Local-Herb-Discovery/d5467-5690403P1?medium=social-share-copy',
    marketToTableDirect:
      'https://www.viator.com/tours/Ubud/Ubud-Market-to-Table-Cooking-Class-and-Local-Herb-Discovery/d5467-5690403P1',
  },
  airbnb: {
    experience:
      'https://www.airbnb.com/experiences/7165714?direct_open=true',
    hostReferral:
      'https://www.airbnb.com/rp/idewagedea5?p=recommendations&product=experience&listing_id=7165714&s=67&unique_share_id=582a21ed-bab6-4137-9fc8-4465e02e60e2',
  },
} as const
