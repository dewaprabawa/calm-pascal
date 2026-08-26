'use client'

import React from 'react'
import { BOKUN_BOOK_PAGE } from '@/lib/bokun'
import { trackBooking } from '@/lib/bookingTracking'

type BookButtonProps = {
  activityTitle?: string
  session?: 'morning' | 'afternoon'
  className?: string
  children: React.ReactNode
}

export default function BookButton({ activityTitle, session, className, children }: BookButtonProps) {
  return (
    <a
      href={BOKUN_BOOK_PAGE}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        trackBooking({
          channel: 'bokun',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          linkLabel: [activityTitle, session, 'Book now → Bokun'].filter(Boolean).join(' · '),
        })
      }
    >
      {children}
    </a>
  )
}
