import { buildWeb3FormsBody, type TrackBookingPayload } from './bookingEmailContent'

export type { BookingChannel, TrackBookingPayload } from './bookingEmailContent'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
// Web3Forms access keys are safe to use client-side (see web3forms.com docs).
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? 'ad87f256-276a-41e0-ad10-3fbe79de9aed'

export function trackBooking(payload: TrackBookingPayload): void {
  const body = JSON.stringify(buildWeb3FormsBody(payload, WEB3FORMS_ACCESS_KEY))

  void fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body,
    keepalive: true,
  }).catch(() => {})
}
