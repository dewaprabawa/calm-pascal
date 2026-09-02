/** Canonical customer-service contact details for Tumang Bali Cooking Class. */
export const SITE_CONTACT = {
  businessName: 'Tumang Bali Cooking Class',
  whatsappDisplay: '+62 822-1013-2418',
  whatsappE164: '6282210132418',
  whatsappUrl: 'https://wa.me/6282210132418',
  emailPrimary: 'tumangbalicookingclass@gmail.com',
  emailSecondary: 'info@tumangbali.com',
  venueName: 'Warung Tumang Bali',
  streetAddress: 'Banjar Laplapan, Petulu',
  locality: 'Ubud',
  region: 'Bali',
  country: 'Indonesia',
  mapsUrl: 'https://maps.app.goo.gl/4t7AQnSqF1Uxqm5h8',
  website: 'https://tumangbaliclass.com',
} as const

export function siteAddressLines(): string[] {
  return [
    SITE_CONTACT.venueName,
    SITE_CONTACT.streetAddress,
    `${SITE_CONTACT.locality}, ${SITE_CONTACT.region}, ${SITE_CONTACT.country}`,
  ]
}

export function siteAddressOneLine(): string {
  return `${SITE_CONTACT.venueName}, ${SITE_CONTACT.streetAddress}, ${SITE_CONTACT.locality}, ${SITE_CONTACT.region}, ${SITE_CONTACT.country}`
}
