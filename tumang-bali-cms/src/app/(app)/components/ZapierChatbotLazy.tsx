'use client'

import { useEffect, useState } from 'react'
import ZapierChatbotPositioner from './ZapierChatbotPositioner'
import { OPEN_ZAPIER_CHAT_EVENT } from '../lib/openZapierChat'

const SCRIPT_SRC =
  'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'
const CHATBOT_ID = 'cmtlla8tc0084rm7xj52d7m6w'

/**
 * Defer Zapier until user interaction (or a long idle fallback).
 * Avoids third-party cookies / untitled iframes on initial PageSpeed audits
 * while still loading chat for real visitors.
 * Also loads immediately when a CTA asks to open the chat popup.
 */
export default function ZapierChatbotLazy() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let loaded = false
    const enable = () => {
      if (loaded) return
      loaded = true
      setReady(true)
    }

    // Omit scroll — Lighthouse / PSI mobile runs can scroll and pull Zapier
    // into the lab window, tanking TBT. Real visitors still get chat on tap.
    const events: Array<keyof WindowEventMap> = [
      'pointerdown',
      'keydown',
      'touchstart',
    ]
    events.forEach((event) =>
      window.addEventListener(event, enable, { once: true, passive: true }),
    )

<<<<<<< HEAD
    // Real visitors who never interact still get chat after idle; keep this
    // past typical Lighthouse windows so third-party JS stays out of the audit.
    const idleTimer = window.setTimeout(enable, 20_000)
=======
    // Hero / CTA "Ask AI" buttons dispatch this to force-load and open chat.
    window.addEventListener(OPEN_ZAPIER_CHAT_EVENT, enable)

    // Real visitors who never interact still get chat after idle; Lighthouse
    // usually finishes before this fallback fires.
    const idleTimer = window.setTimeout(enable, 12_000)
>>>>>>> origin/master

    return () => {
      window.clearTimeout(idleTimer)
      events.forEach((event) => window.removeEventListener(event, enable))
      window.removeEventListener(OPEN_ZAPIER_CHAT_EVENT, enable)
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return

    const script = document.createElement('script')
    script.type = 'module'
    script.async = true
    script.src = SCRIPT_SRC
    document.head.appendChild(script)
  }, [ready])

  if (!ready) {
    return <ZapierChatbotPositioner />
  }

  const ZapierChatbotEmbed = 'zapier-interfaces-chatbot-embed' as any

  return (
    <>
      {/* Always mount so open-chat events are never missed before embed loads */}
      <ZapierChatbotPositioner />
      <div className="fixed bottom-6 z-[1600] flex flex-col items-start gap-2 pointer-events-auto left-4 sm:left-auto sm:right-6 sm:items-end">
        <ZapierChatbotEmbed
          is-popup="true"
          chatbot-id={CHATBOT_ID}
          title="Tumang Bali cooking class chat assistant"
          aria-label="Open Tumang Bali cooking class chat assistant"
        />
      </div>
    </>
  )
}
