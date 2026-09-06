export const OPEN_ZAPIER_CHAT_EVENT = 'open-zapier-chat'

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

export function clickZapierLauncher(): boolean {
  const bot = document.querySelector('zapier-interfaces-chatbot-embed') as
    | (HTMLElement & { shadowRoot?: ShadowRoot | null })
    | null
  const shadow = bot?.shadowRoot ?? null
  if (!shadow) return false

  const launcher =
    shadow.querySelector('[part="launcher"]') ||
    shadow.querySelector('.launcher') ||
    shadow.querySelector('button') ||
    shadow.querySelector('a')

  if (!(launcher instanceof HTMLElement)) return false
  launcher.click()
  clearPendingZapierOpen()
  return true
}
