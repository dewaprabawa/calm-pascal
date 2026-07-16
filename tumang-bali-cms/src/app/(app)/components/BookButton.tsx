'use client'

import React from 'react'

type BookButtonProps = {
  activityTitle?: string
  className?: string
  children: React.ReactNode
}

export default function BookButton({ activityTitle, className, children }: BookButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(
      new CustomEvent('open-booking-modal', { 
        detail: { activityTitle } 
      })
    )
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
