// TypeScript support for the Zapier web component used in layouts.
// This prevents "Property does not exist on type JSX.IntrinsicElements".
declare namespace JSX {
  interface IntrinsicElements {
    "zapier-interfaces-chatbot-embed": {
      "is-popup"?: string
      "chatbot-id"?: string
      height?: string
      width?: string
      title?: string
      "aria-label"?: string
      style?: Record<string, string | number> | string
    }
  }
}
