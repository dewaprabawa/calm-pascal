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
      className="fixed inset-0 z-[2147483000] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-stone-950/50 backdrop-blur-[2px]"
        aria-label="Close AI assistant"
        onClick={onClose}
      />

      <div className="relative z-10 flex h-[min(92vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl bg-stone-50 dark:bg-zinc-950 shadow-2xl border border-stone-200 dark:border-zinc-800 mx-0 sm:mx-4">
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-stone-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur shrink-0">
          <div>
            <p id={titleId} className="font-semibold text-stone-900 dark:text-white">
              Ask our AI assistant
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Schedules, prices, vegetarian options, pickup &amp; more
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-stone-700 dark:text-stone-200 h-10 w-10 flex items-center justify-center font-bold text-xl leading-none"
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
      </div>
    </div>
  )
}
