'use client'

import Link from 'next/link'

type Props = {
  current: 'en' | 'id'
  className?: string
  compact?: boolean
}

/**
 * Explicit language navigation only — never auto-redirects.
 * English homepage is the default; `/id` opens only when clicked (or linked).
 */
export default function LanguageSwitcher({ current, className = '', compact = false }: Props) {
  if (current === 'en') {
    return (
      <Link
        href="/id"
        hrefLang="id"
        lang="id"
        className={className || 'hover:text-orange-500 transition-colors'}
        aria-label="Tampilkan situs dalam Bahasa Indonesia"
      >
        {compact ? 'Indonesia' : 'Bahasa Indonesia'}
      </Link>
    )
  }

  return (
    <Link
      href="/"
      hrefLang="en"
      lang="en"
      className={className || 'hover:text-orange-500 transition-colors'}
      aria-label="Show site in English"
    >
      {compact ? 'English' : 'English'}
    </Link>
  )
}
