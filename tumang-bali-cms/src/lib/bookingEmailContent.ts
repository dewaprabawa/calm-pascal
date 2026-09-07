export type BookingChannel = 'whatsapp' | 'airbnb' | 'getyourguide' | 'viator'

export type WhatsAppBookingPayload = {
  channel: 'whatsapp'
  activity: string
  session: string
  date: string
  adults: string
  kids: string
  foodRestriction: string
  pickupLocation: string
  pickupAddress?: string
  pickupLat?: number | null
  pickupLng?: number | null
  notes: string
  pageUrl: string
}

export function formatPickupForMessage(data: {
  pickupLocation: string
  pickupAddress?: string
  pickupLat?: number | null
  pickupLng?: number | null
}): string {
  const lines = [data.pickupLocation.trim() || 'Not provided']
  if (data.pickupAddress && data.pickupAddress.trim() !== data.pickupLocation.trim()) {
    lines.push(data.pickupAddress.trim())
  }
  if (data.pickupLat != null && data.pickupLng != null) {
    const lat = data.pickupLat
    const lng = data.pickupLng
    lines.push(`${lat.toFixed(6)}, ${lng.toFixed(6)}`)
    lines.push(`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=17/${lat}/${lng}`)
  }
  return lines.join('\n')
}

export type PartnerClickPayload = {
  channel: 'airbnb' | 'getyourguide' | 'viator'
  pageUrl: string
  linkLabel?: string
}

export type TrackBookingPayload = WhatsAppBookingPayload | PartnerClickPayload

function formatWhatsAppMessage(data: WhatsAppBookingPayload): string {
  return [
    'New WhatsApp consultation from the website (secure spot / payment):',
    '',
    `Experience: ${data.activity}`,
    `Session: ${data.session}`,
    `Date: ${data.date}`,
    `Guests: ${data.adults} adult(s)${parseInt(data.kids, 10) > 0 ? `, ${data.kids} kid(s)` : ''}`,
    `Food restrictions: ${data.foodRestriction || 'None'}`,
    `Pickup location:\n${formatPickupForMessage(data)}`,
    data.notes ? `Notes: ${data.notes}` : null,
    '',
    `Page: ${data.pageUrl}`,
    `Time: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join('\n')
}

const PARTNER_LABELS: Record<PartnerClickPayload['channel'], string> = {
  airbnb: 'Airbnb',
  getyourguide: 'GetYourGuide',
  viator: 'Viator',
}

function formatPartnerClickMessage(data: PartnerClickPayload): string {
  const platform = PARTNER_LABELS[data.channel]

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
      subject: `WhatsApp consultation — ${payload.activity}`,
      message: formatWhatsAppMessage(payload),
    }
  }

  const platform = PARTNER_LABELS[payload.channel]
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
