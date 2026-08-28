'use client'

import React, { useEffect, useRef } from 'react'
import { trackBooking } from '@/lib/bookingTracking'

import {
  BOKUN_BUTTON_ID,
  BOKUN_LOADER_SRC,
  BOKUN_WIDGET_SRC,
} from '@/lib/bokun'

type BokunWidgetsApi = {
  initializeButton?: (el: HTMLElement) => void
}

function getBokunInitButton(): ((el: HTMLElement) => void) | undefined {
  const w = (window as Window & {
    BokunWidgets?: BokunWidgetsApi & { constructor?: BokunWidgetsApi }
  }).BokunWidgets
  const fn = w?.initializeButton ?? w?.constructor?.initializeButton
  return typeof fn === 'function' ? fn.bind(w) : undefined
}

function bindBokunButton(el: HTMLElement) {
  const initializeButton = getBokunInitButton()
  if (!initializeButton) return false
  el.removeAttribute('data-bokun-widget-loaded')
  initializeButton(el)
  return true
}

function loadBokunScript() {
  if (document.querySelector('script[src*="BokunWidgetsLoader"]')) return Promise.resolve()
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = BOKUN_LOADER_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Bokun'))
    document.body.appendChild(script)
  })
}

export default function BokunBookButton() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const el = buttonRef.current
    if (!el) return

    const track = () => {
      trackBooking({
        channel: 'bokun',
        pageUrl: window.location.href,
        linkLabel: 'Booking modal — Bokun Book now',
      })
    }

    const onClick = () => {
      track()
      void loadBokunScript().then(() => {
        bindBokunButton(el)
      })
    }

    el.addEventListener('click', onClick, { capture: true })

    return () => {
      el.removeEventListener('click', onClick, { capture: true })
    }
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
        #${BOKUN_BUTTON_ID}:hover { background: #7d3f18; }
        #${BOKUN_BUTTON_ID}:active { background: #924a1d; }
      `}</style>
      <button
        ref={buttonRef}
        type="button"
        className="bokunButton"
        id={BOKUN_BUTTON_ID}
        data-src={BOKUN_WIDGET_SRC}
        data-testid="widget-book-button"
      >
        Book now
      </button>
    </div>
  )
}
