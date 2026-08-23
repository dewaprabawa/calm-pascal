'use client'

import React from 'react'
import { trackBooking, type BookingChannel } from '@/lib/bookingTracking'

type TrackedBookingLinkProps = {
  href: string
  channel: Exclude<BookingChannel, 'whatsapp'>
  linkLabel?: string
  className?: string
  id?: string
  children: React.ReactNode
}

export default function TrackedBookingLink({
  href,
  channel,
  linkLabel,
  className,
  id,
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
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
