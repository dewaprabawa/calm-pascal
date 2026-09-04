'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import BookButton from './BookButton'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_ITEMS = [
  { href: '#classes', label: 'Classes', emoji: '👨‍🍳' },
  { href: '#itinerary', label: 'Itinerary', emoji: '🗺️' },
  { href: '#menu', label: 'Menu', emoji: '🍽️' },
  { href: '#instructors', label: 'Chefs', emoji: '👩‍🏫' },
  { href: '#reviews', label: 'Reviews', emoji: '⭐' },
  { href: '/about', label: 'About Us', emoji: '🏡' },
  { href: '/compare-ubud-cooking-classes', label: 'Compare Options', emoji: '⚖️' },
  { href: '#faq', label: 'FAQ', emoji: '❓' },
  { href: '#location', label: 'Location', emoji: '📍' },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const close = () => setIsOpen(false)

  const drawer = (
    <>
      <div
        className={`fixed inset-0 z-[80] bg-black/60 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={close}
        aria-hidden={!isOpen}
      />
      <div
        className={`fixed top-0 right-0 z-[85] h-full w-72 border-l border-stone-200 bg-white shadow-2xl transition-transform duration-300 ease-out dark:border-zinc-800 dark:bg-zinc-950 ${
          isOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!isOpen}
      >
        <div className="flex justify-end px-4 pt-5">
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 pt-4">
          <p className="mb-2 px-4 text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-500">
            Navigation
          </p>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-stone-700 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:text-stone-200 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
            >
              <span className="text-lg">{item.emoji}</span>
              {item.label}
            </a>
          ))}

          <div className="mt-4 px-4" onClick={close}>
            <LanguageSwitcher
              current="en"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-stone-700 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:text-stone-200 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
            />
          </div>

          <div className="mt-6 px-4">
            <BookButton
              onClick={close}
              className="block w-full cursor-pointer rounded-xl bg-orange-600 px-6 py-3 text-center font-bold text-white transition-colors hover:bg-orange-700"
            >
              Book Now
            </BookButton>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="lg:hidden flex-shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="relative z-[90] flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl bg-orange-600 shadow-sm hover:bg-orange-700"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span
          className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
            isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
            isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        />
      </button>
      {mounted && isOpen ? createPortal(drawer, document.body) : null}
    </div>
  )
}
