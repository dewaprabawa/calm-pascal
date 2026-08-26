'use client'

import React from 'react'

type BookButtonProps = {
  activityTitle?: string
  session?: 'morning' | 'afternoon'
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function BookButton({ activityTitle, session, className, children, onClick }: BookButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.()
        window.dispatchEvent(
          new CustomEvent('open-booking-modal', {
            detail: { activityTitle, session },
          }),
        )
      }}
    >
      {children}
    </button>
  )
}
