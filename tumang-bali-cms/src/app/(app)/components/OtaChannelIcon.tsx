import React from 'react'

export type OtaChannel = 'getyourguide' | 'viator' | 'airbnb' | 'tripadvisor'

type Props = {
  channel: OtaChannel
  className?: string
}

export default function OtaChannelIcon({ channel, className = 'w-5 h-5 shrink-0' }: Props) {
  switch (channel) {
    case 'airbnb':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
        </svg>
      )
    case 'getyourguide':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      )
    case 'viator':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z" />
        </svg>
      )
    case 'tripadvisor':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C8.5 2 6 4.2 6 7.1c0 .9.3 1.7.8 2.4C5.1 10.8 3 13.4 3 16.5h2c0-2.2 1.8-4 4-4s4 1.8 4 4h2c0-3.1-2.1-5.7-3.8-7-.5-.7-.8-1.5-.8-2.4C11 4.2 8.5 2 12 2zm-2 4.5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 10 6.5zm4 0a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 14 6.5zM7 18.5a2.5 2.5 0 1 0 2.5-2.5 2.5 2.5 0 0 0-2.5 2.5zm10 0a2.5 2.5 0 1 0 2.5-2.5 2.5 2.5 0 0 0-2.5 2.5z" />
        </svg>
      )
    default:
      return null
  }
}

export const OTA_BUTTON_STYLES: Record<OtaChannel, string> = {
  getyourguide: 'bg-[#C13515] hover:bg-[#9A2A10] text-white',
  viator: 'bg-[#00A19C] hover:bg-[#008a86] text-white',
  airbnb: 'bg-[#FF5A5F] hover:bg-[#e04e52] text-white',
  tripadvisor: 'bg-[#34E0A1] hover:bg-[#2bc990] text-[#000B1E]',
}
