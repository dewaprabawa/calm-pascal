export type BookingChannel = 'whatsapp' | 'airbnb' | 'getyourguide'

export type WhatsAppBookingPayload = {
  channel: 'whatsapp'
  activity: string
  session: string
  date: string
  adults: string
  kids: string
  foodRestriction: string
  pickupLocation: string
  notes: string
  pageUrl: string
}

export type PartnerClickPayload = {
  channel: 'airbnb' | 'getyourguide'
  pageUrl: string
  linkLabel?: string
}

export type TrackBookingPayload = WhatsAppBookingPayload | PartnerClickPayload

function formatWhatsAppMessage(data: WhatsAppBookingPayload): string {
  return [
    'New WhatsApp booking request from the website:',
    '',
    `Experience: ${data.activity}`,
    `Session: ${data.session}`,
    `Date: ${data.date}`,
    `Guests: ${data.adults} adult(s)${parseInt(data.kids, 10) > 0 ? `, ${data.kids} kid(s)` : ''}`,
    `Food restrictions: ${data.foodRestriction || 'None'}`,
    `Pickup location: ${data.pickupLocation}`,
    data.notes ? `Notes: ${data.notes}` : null,
    '',
    `Page: ${data.pageUrl}`,
    `Time: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join('\n')
}

function formatPartnerClickMessage(data: PartnerClickPayload): string {
  const platform = data.channel === 'airbnb' ? 'Airbnb' : 'GetYourGuide'

  return [
    `Someone clicked the ${platform} booking button.`,
    data.linkLabel ? `Link: ${data.linkLabel}` : null,
    `Page: ${data.pageUrl}`,
    `Time: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join('\n')
}

function buildEmailContent(payload: TrackBookingPayload): { subject: string; message: string } {
  if (payload.channel === 'whatsapp') {
    return {
      subject: `New WhatsApp Booking — ${payload.activity}`,
      message: formatWhatsAppMessage(payload),
    }
  }

  const platform = payload.channel === 'airbnb' ? 'Airbnb' : 'GetYourGuide'
  return {
    subject: `${platform} Booking Button Clicked`,
    message: formatPartnerClickMessage(payload),
  }
}

export function buildWeb3FormsBody(payload: TrackBookingPayload, accessKey: string) {
  const { subject, message } = buildEmailContent(payload)

  return {
    access_key: accessKey,
    subject,
    from_name: 'Tumang Bali Website',
    email: 'gedeagusprabawadewa@gmail.com',
    message,
    botcheck: '',
  }
}
