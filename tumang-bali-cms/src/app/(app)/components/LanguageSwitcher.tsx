'use client'

import Link from 'next/link'

const LOCALE_COOKIE = 'tb_locale'

function rememberLocale(locale: 'en' | 'id') {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`
}

type Props = {
  current: 'en' | 'id'
  className?: string
  compact?: boolean
}

export default function LanguageSwitcher({ current, className = '', compact = false }: Props) {
  if (current === 'en') {
    return (
      <Link
        href="/id"
        hrefLang="id"
        lang="id"
        onClick={() => rememberLocale('id')}
        className={className || 'hover:text-orange-500 transition-colors'}
        aria-label="Tampilkan situs dalam Bahasa Indonesia"
      >
        {compact ? 'ID' : 'Bahasa Indonesia'}
      </Link>
    )
  }

  return (
    <Link
      href="/"
      hrefLang="en"
      lang="en"
      onClick={() => rememberLocale('en')}
      className={className || 'hover:text-orange-500 transition-colors'}
      aria-label="Show site in English"
    >
      {compact ? 'EN' : 'English'}
    </Link>
  )
}
