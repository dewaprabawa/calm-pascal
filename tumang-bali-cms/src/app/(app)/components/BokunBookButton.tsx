'use client'

import React, { useEffect } from 'react'
import { trackBooking } from '@/lib/bookingTracking'

const BOKUN_CHANNEL_UUID = '0645b8f9-315f-426f-bb3b-a4eda41f198e'
const BOKUN_BUTTON_ID = 'bokun_c197d9eb_be16_4dda_b85f_8c37cd90c1be'
const BOKUN_WIDGET_SRC = `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL_UUID}/experience/1267345?partialView=1`
const BOKUN_LOADER_SRC = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${BOKUN_CHANNEL_UUID}`

function loadBokunScript() {
  if (document.querySelector('script[src*="BokunWidgetsLoader"]')) return

  const script = document.createElement('script')
  script.src = BOKUN_LOADER_SRC
  script.async = true
  document.body.appendChild(script)
}

export default function BokunBookButton() {
  useEffect(() => {
    loadBokunScript()
  }, [])

  return (
    <div className="w-full">
      <style>{`
        #${BOKUN_BUTTON_ID} {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 16px 24px;
          background: #bd5f25;
          border-radius: 12px;
          box-shadow: none;
          font-weight: 700;
          font-size: 18px;
          text-decoration: none;
          text-align: center;
          color: #ffffff;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        #${BOKUN_BUTTON_ID}:hover:not(:disabled) { background: #7d3f18; }
        #${BOKUN_BUTTON_ID}:active:not(:disabled) { background: #924a1d; }
        #${BOKUN_BUTTON_ID}:disabled { opacity: 0.7; cursor: wait; }
      `}</style>
      <button
        type="button"
        className="bokunButton"
        disabled
        id={BOKUN_BUTTON_ID}
        data-src={BOKUN_WIDGET_SRC}
        data-testid="widget-book-button"
        onClick={() =>
          trackBooking({
            channel: 'bokun',
            pageUrl: window.location.href,
            linkLabel: 'Booking modal — Bokun Book now',
          })
        }
      >
        Book now
      </button>
    </div>
  )
}
