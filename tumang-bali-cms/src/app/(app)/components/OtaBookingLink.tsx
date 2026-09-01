import React from 'react'
import OtaChannelIcon, { OTA_BUTTON_STYLES, type OtaChannel } from './OtaChannelIcon'

type Props = {
  channel: OtaChannel
  href: string
  children: React.ReactNode
  className?: string
}

export default function OtaBookingLink({ channel, href, children, className = '' }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-base transition-opacity hover:opacity-90 mr-2 mb-2 ${OTA_BUTTON_STYLES[channel]} ${className}`}
    >
      <OtaChannelIcon channel={channel} />
      <span>{children}</span>
    </a>
  )
}
