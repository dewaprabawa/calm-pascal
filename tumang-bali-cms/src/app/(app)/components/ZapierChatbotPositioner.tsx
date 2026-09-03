'use client'

import { useEffect } from 'react'

function setStyle(el: Element | null, styles: Partial<CSSStyleDeclaration>) {
  if (!(el instanceof HTMLElement)) return
  Object.entries(styles).forEach(([k, v]) => {
    ;(el.style as any)[k] = v as any
  })
}

/**
 * Zapier's popup launcher is rendered inside a Shadow DOM.
 * The fixed-position wrapper on the page often doesn't reliably control the launcher icon on all devices.
 * This effect repositions the internal launcher/close controls toward the bottom-left.
 */
export default function ZapierChatbotPositioner() {
  useEffect(() => {
    const openChat = () => {
      const bot = document.querySelector('zapier-interfaces-chatbot-embed') as any
      const shadow: ShadowRoot | null = bot?.shadowRoot ?? null
      if (!shadow) return

      const launcher =
        shadow.querySelector('[part="launcher"]') ||
        shadow.querySelector('.launcher') ||
        shadow.querySelector('button') ||
        shadow.querySelector('a')

      if (launcher instanceof HTMLElement) {
        launcher.click()
      }
    }

    const labelEl = document.getElementById('zapier-chatbot-open-label')
    const onLabelClick = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      openChat()
    }

    if (labelEl) {
      labelEl.addEventListener('click', onLabelClick)
    }

    const apply = () => {
      const bot = document.querySelector('zapier-interfaces-chatbot-embed') as any
      const shadow: ShadowRoot | null = bot?.shadowRoot ?? null
      if (!shadow) return false

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

      const close =
        shadow.querySelector('[part="close"], [part="close-button"]') ||
        shadow.querySelector('.close') ||
        shadow.querySelector('button[aria-label*="close" i]')

      // Move the visible launcher button
      setStyle(launcher, {
        position: 'fixed',
        left,
        right,
        bottom,
        zIndex: '2147483600',
        pointerEvents: 'auto',
      })

      // Make the visible launcher look like a circle
      if (launcher instanceof HTMLElement && launcher.tagName !== 'IFRAME') {
        setStyle(launcher, {
          borderRadius: '9999px',
          overflow: 'hidden',
        })
      }

      if (launcher instanceof HTMLElement && launcher.tagName !== 'IFRAME') {
        setStyle(launcher, {
          width: isMobile ? '54px' : '62px',
          height: isMobile ? '54px' : '62px',
        })
      }

      // Move close button too (when open)
      setStyle(close, {
        position: 'fixed',
        left,
        right,
        bottom,
        zIndex: '2147483601',
        pointerEvents: 'auto',
        borderRadius: '9999px',
      })

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
      labelEl?.removeEventListener('click', onLabelClick)
    }
  }, [])

  return null
}

