'use client'

import React, { useEffect, useId, useState } from 'react'
import { ZAPIER_CHATBOT_ID } from '../lib/openZapierChat'

type AskAiChatSheetProps = {
  open: boolean
  onClose: () => void
}

/** Direct Zapier embed URL — more reliable than the web component inside a sheet. */
function zapierEmbedSrc() {
  const params = new URLSearchParams({
    // Keep the chat UI expanded inside our sheet (not a tiny floating launcher).
  })
  return `https://interfaces.zapier.com/embed/chatbot/${ZAPIER_CHATBOT_ID}?${params.toString()}`
}

/**
 * Full-screen (mobile) / large (desktop) sheet with Zapier chat.
 * Uses a direct iframe so the chat fills the sheet reliably — the floating
 * Zapier web-component popup cannot be opened from a custom button on iOS
 * because its launcher lives in a cross-origin iframe.
 *
 * Close controls stay outside the iframe (Zapier's embed has no host "back"
 * button), with a sticky header + bottom bar so guests can always leave.
 */
export default function AskAiChatSheet({ open, onClose }: AskAiChatSheetProps) {
  const titleId = useId()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!open) {
      setLoaded(false)
      return
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[2147483646] flex items-stretch sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-stone-950/55 backdrop-blur-[2px]"
        aria-label="Close AI assistant"
        onClick={onClose}
      />

      <div
        className="relative z-10 flex h-[100dvh] sm:h-[min(92vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-none sm:rounded-3xl bg-stone-50 dark:bg-zinc-950 shadow-2xl border-0 sm:border border-stone-200 dark:border-zinc-800"
        style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {/* Sticky host chrome — Zapier iframe has no close/back control */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-3 px-3 sm:px-4 py-3 border-b border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-white dark:hover:bg-stone-100 text-white dark:text-stone-900 h-11 px-4 font-semibold text-sm shadow-sm active:scale-[0.98] transition"
            aria-label="Close chat and go back"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back
          </button>
          <div className="min-w-0 flex-1 text-right sm:text-left sm:pl-2">
            <p id={titleId} className="font-semibold text-stone-900 dark:text-white truncate">
              Ask our AI assistant
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-400 truncate">
              Schedules, prices, pickup &amp; more
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-stone-800 dark:text-stone-100 h-11 w-11 flex items-center justify-center font-bold text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="relative flex-1 min-h-0 overflow-hidden bg-white dark:bg-zinc-950">
          {!loaded ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white dark:bg-zinc-950 text-stone-500 dark:text-stone-400">
              <div
                className="h-8 w-8 rounded-full border-2 border-orange-500 border-t-transparent animate-spin"
                aria-hidden="true"
              />
              <p className="text-sm font-medium">Opening chat…</p>
            </div>
          ) : null}
          <iframe
            key={open ? 'open' : 'closed'}
            src={zapierEmbedSrc()}
            title="Tumang Bali cooking class chat assistant"
            className="absolute inset-0 h-full w-full border-0 bg-white"
            allow="clipboard-write *"
            onLoad={() => setLoaded(true)}
          />
        </div>

        <div className="sticky bottom-0 z-20 border-t border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 sm:px-4 py-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white h-12 font-semibold text-base shadow-md active:scale-[0.99] transition"
          >
            Close chat
          </button>
        </div>
      </div>
    </div>
  )
}
