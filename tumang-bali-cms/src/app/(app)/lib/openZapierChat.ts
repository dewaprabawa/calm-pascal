export const OPEN_ZAPIER_CHAT_EVENT = 'open-zapier-chat'
export const ZAPIER_CHATBOT_ID = 'cmtlla8tc0084rm7xj52d7m6w'
export const ZAPIER_SCRIPT_SRC =
  'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'

let pendingOpen = false

/** Ask the site Zapier chatbot to load (if needed) and open its popup. */
export function openZapierChat() {
  if (typeof window === 'undefined') return
  pendingOpen = true
  window.dispatchEvent(new CustomEvent(OPEN_ZAPIER_CHAT_EVENT))
}

export function hasPendingZapierOpen() {
  return pendingOpen
}

export function clearPendingZapierOpen() {
  pendingOpen = false
}

/**
 * Best-effort open for the floating Zapier popup.
 * The launcher UI is inside a cross-origin iframe, so a DOM .click() cannot
 * fully open chat chrome. We expand the parent shell via `zChatbotOpened`
 * (the embed listens on window without an origin check). Hero CTAs also open
 * an inline Ask-AI sheet for a reliable chat surface.
 */
export function clickZapierLauncher(): boolean {
  // Prefer the floating popup embed (first popup instance on the page).
  const embeds = Array.from(
    document.querySelectorAll('zapier-interfaces-chatbot-embed'),
  ) as Array<HTMLElement & { shadowRoot?: ShadowRoot | null }>

  const embed =
    embeds.find((el) => el.getAttribute('is-popup') === 'true') || embeds[0] || null

  const shadow = embed?.shadowRoot ?? null
  if (!shadow) return false

  const iframe = shadow.querySelector('iframe') as HTMLIFrameElement | null
  if (!iframe) return false
  if (iframe.classList.contains('is-zpopup__loading')) return false

  if (!iframe.classList.contains('is-zpopup__opened')) {
    window.postMessage('zChatbotOpened', '*')
  }

  const launcher =
    shadow.querySelector('[part="launcher"]') ||
    shadow.querySelector('.launcher') ||
    shadow.querySelector('button') ||
    shadow.querySelector('a')

  if (launcher instanceof HTMLElement) {
    launcher.click()
  }

  clearPendingZapierOpen()
  return true
}

export function ensureZapierScriptLoaded() {
  if (typeof document === 'undefined') return
  if (document.querySelector(`script[src="${ZAPIER_SCRIPT_SRC}"]`)) return

  const script = document.createElement('script')
  script.type = 'module'
  script.async = true
  script.src = ZAPIER_SCRIPT_SRC
  document.head.appendChild(script)
}
