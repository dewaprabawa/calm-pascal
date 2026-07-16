'use client'

import React, { useState, useEffect } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[70] w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-stone-100 dark:bg-zinc-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-stone-700 dark:bg-stone-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-stone-700 dark:bg-stone-300 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-stone-700 dark:bg-stone-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in Menu */}
      <div className={`fixed top-0 right-0 z-[65] h-full w-72 bg-stone-50 dark:bg-zinc-950 border-l border-stone-200 dark:border-zinc-800 shadow-2xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col pt-24 px-6 gap-2">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-2 px-4">Navigation</p>
          {[
            { href: '#classes', label: 'Classes', emoji: '👨‍🍳' },
            { href: '#itinerary', label: 'Itinerary', emoji: '🗺️' },
            { href: '#menu', label: 'Menu', emoji: '🍽️' },
            { href: '#instructors', label: 'Instructors', emoji: '👩‍🏫' },
            { href: '#reviews', label: 'Reviews', emoji: '⭐' },
            { href: '#faq', label: 'FAQ', emoji: '❓' },
            { href: '#location', label: 'Location', emoji: '📍' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-700 dark:text-stone-200 font-medium hover:bg-orange-50 dark:hover:bg-orange-950/30 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-base"
            >
              <span className="text-lg">{item.emoji}</span>
              {item.label}
            </a>
          ))}

          <div className="mt-6 px-4">
            <a
              href="https://wa.me/6282210132418?text=Hi%20Tumang%20Bali!%20I%20would%20like%20to%20book%20a%20cooking%20class."
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
