'use client'

import React, { useEffect, useId } from 'react'
import {
  ZAPIER_CHATBOT_ID,
  ensureZapierScriptLoaded,
} from '../lib/openZapierChat'

type AskAiChatSheetProps = {
  open: boolean
  onClose: () => void
}

/**
 * Full-screen (mobile) / large (desktop) sheet with an inline Zapier chatbot.
 * Used because the floating Zapier popup lives in a cross-origin iframe and
 * cannot be opened reliably from a custom button click.
 */
export default function AskAiChatSheet({ open, onClose }: AskAiChatSheetProps) {
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    ensureZapierScriptLoaded()
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

  const ZapierChatbotEmbed = 'zapier-interfaces-chatbot-embed' as any

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
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-stone-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur">
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
            className="shrink-0 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-stone-700 dark:text-stone-200 h-10 w-10 flex items-center justify-center font-bold"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="relative flex-1 min-h-0 bg-white dark:bg-zinc-950">
          <ZapierChatbotEmbed
            data-tumang-inline="true"
            is-popup="false"
            chatbot-id={ZAPIER_CHATBOT_ID}
            height="100%"
            width="100%"
            title="Tumang Bali cooking class chat assistant"
            aria-label="Tumang Bali cooking class chat assistant"
            style={{ display: 'block', width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}
