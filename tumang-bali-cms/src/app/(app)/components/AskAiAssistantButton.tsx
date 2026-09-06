'use client'

import React, { useState } from 'react'
import { ensureZapierScriptLoaded } from '../lib/openZapierChat'
import AskAiChatSheet from './AskAiChatSheet'

type AskAiAssistantButtonProps = {
  className?: string
}

/**
 * Hero CTA that opens the on-site Zapier AI assistant in an inline chat sheet.
 * The floating Zapier popup cannot be opened reliably from a custom button
 * (cross-origin iframe), so the sheet hosts an inline embed instead.
 */
export default function AskAiAssistantButton({ className }: AskAiAssistantButtonProps) {
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        id="zapier-chatbot-open-label"
        data-open-zapier-chat
        onClick={() => {
          ensureZapierScriptLoaded()
          document.documentElement.classList.add('tumang-ai-sheet-open')
          setSheetOpen(true)
        }}
        className={
          className ??
          'w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 border-2 border-orange-500 text-orange-700 dark:text-orange-400 px-8 py-4 rounded-full font-semibold text-lg shadow-md transition-all hover:-translate-y-1'
        }
        aria-label="Ask our AI assistant about the cooking class"
        aria-haspopup="dialog"
        aria-expanded={sheetOpen}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          <circle cx="9" cy="11" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="12" cy="11" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="15" cy="11" r="0.8" fill="currentColor" stroke="none" />
        </svg>
        Ask our AI assistant
      </button>

      <AskAiChatSheet
        open={sheetOpen}
        onClose={() => {
          document.documentElement.classList.remove('tumang-ai-sheet-open')
          setSheetOpen(false)
        }}
      />
    </>
  )
}
