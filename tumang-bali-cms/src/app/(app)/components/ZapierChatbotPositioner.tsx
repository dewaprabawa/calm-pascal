'use client'

import { useEffect } from 'react'
import {
  OPEN_ZAPIER_CHAT_EVENT,
  clickZapierLauncher,
  hasPendingZapierOpen,
  clearPendingZapierOpen,
} from '../lib/openZapierChat'

function setStyle(el: Element | null, styles: Partial<CSSStyleDeclaration>) {
  if (!(el instanceof HTMLElement)) return
  Object.entries(styles).forEach(([k, v]) => {
    ;(el.style as any)[k] = v as any
  })
}

/**
 * Zapier's popup launcher is rendered inside a Shadow DOM.
 * The fixed-position wrapper on the page often doesn't reliably control the launcher icon on all devices.
 * This effect repositions the internal launcher toward the bottom-left,
 * and opens the popup when hero/CTA buttons request it.
 * Native Zapier close controls are left alone so an open chat can be dismissed.
export default function ZapierChatbotPositioner() {
  useEffect(() => {
    let openPending = hasPendingZapierOpen()
    let openTries = 0
    let openTimer: number | undefined

    const tryOpenChat = () => {
      if (clickZapierLauncher()) {
        openPending = false
        openTries = 0
        return
      }

      openTries += 1
      if (openTries < 40) {
        openTimer = window.setTimeout(tryOpenChat, 200)
      } else {
        openPending = false
        openTries = 0
        clearPendingZapierOpen()
      }
    }

    const requestOpen = () => {
      openPending = true
      openTries = 0
      if (openTimer) window.clearTimeout(openTimer)
      tryOpenChat()
    }

    const onOpenEvent = () => {
      requestOpen()
    }

    window.addEventListener(OPEN_ZAPIER_CHAT_EVENT, onOpenEvent)

    // If the hero button was clicked before this mounted, open as soon as possible.
    if (openPending) {
      requestOpen()
    }

    const apply = () => {
      const bot = document.querySelector('zapier-interfaces-chatbot-embed') as any
      if (bot instanceof HTMLElement) {
        if (!bot.getAttribute('title')) {
          bot.setAttribute('title', 'Tumang Bali cooking class chat assistant')
        }
        if (!bot.getAttribute('aria-label')) {
          bot.setAttribute('aria-label', 'Open Tumang Bali cooking class chat assistant')
        }
      }

      const shadow: ShadowRoot | null = bot?.shadowRoot ?? null
      if (!shadow) return false

      // Accessibility: Zapier injects untitled iframes inside shadow DOM
      shadow.querySelectorAll('iframe').forEach((frame) => {
        if (frame instanceof HTMLIFrameElement && !frame.title) {
          frame.title = 'Tumang Bali cooking class chat assistant'
        }
      })

      const isMobile = window.innerWidth < 640
      const left = isMobile ? '12px' : 'auto'
      const right = isMobile ? 'auto' : '20px'
      const bottom = isMobile ? '20px' : '24px'

      const launcher =
        shadow.querySelector('[part="launcher"]') ||
        shadow.querySelector('.launcher') ||
        shadow.querySelector('iframe') ||
        shadow.querySelector('button') ||
        shadow.querySelector('a')

      // Move only the floating launcher — do NOT relocate Zapier's native
      // close control (pinning it to the bottom made the open chat feel
      // impossible to dismiss on mobile).
      setStyle(launcher, {
        position: 'fixed',
        left,
        right,
        bottom,
        zIndex: '2147483000',
        pointerEvents: 'auto',
      })

      // Make the visible launcher look like a circle
      if (launcher instanceof HTMLElement && launcher.tagName !== 'IFRAME') {
        setStyle(launcher, {
          borderRadius: '9999px',
          overflow: 'hidden',
          width: isMobile ? '54px' : '62px',
          height: isMobile ? '54px' : '62px',
        })
      }

      if (openPending || hasPendingZapierOpen()) {
        tryOpenChat()
      }

      return true
    }

    let cancelled = false
    let tries = 0

    const run = () => {
      if (cancelled) return
      tries += 1
      const ok = apply()
      if (!ok && tries < 25) {
        window.setTimeout(run, 250)
      }
    }

    run()

    const observer = new MutationObserver(() => {
      // Re-apply if the widget re-renders
      run()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelled = true
      observer.disconnect()
      if (openTimer) window.clearTimeout(openTimer)
      window.removeEventListener(OPEN_ZAPIER_CHAT_EVENT, onOpenEvent)
    }
  }, [])

  return null
}
