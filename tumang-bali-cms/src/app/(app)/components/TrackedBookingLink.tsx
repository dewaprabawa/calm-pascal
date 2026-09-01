'use client'

import React from 'react'
import { trackBooking, type BookingChannel } from '@/lib/bookingTracking'
import OtaChannelIcon from './OtaChannelIcon'

type TrackedBookingLinkProps = {
  href: string
  channel: Exclude<BookingChannel, 'whatsapp'>
  linkLabel?: string
  className?: string
  id?: string
  showIcon?: boolean
  children: React.ReactNode
}

export default function TrackedBookingLink({
  href,
  channel,
  linkLabel,
  className,
  id,
  showIcon = false,
  children,
}: TrackedBookingLinkProps) {
  const handleClick = () => {
    trackBooking({
      channel,
      pageUrl: window.location.href,
      linkLabel,
    })
  }

  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={showIcon ? `inline-flex items-center gap-2 ${className ?? ''}` : className}
      onClick={handleClick}
    >
      {showIcon ? <OtaChannelIcon channel={channel} className="w-5 h-5 shrink-0" /> : null}
      {children}
    </a>
  )
}
