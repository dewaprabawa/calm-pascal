import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONTACT } from '@/lib/siteContact'
import { formatIdr, isPromoActive, PROMO_LABEL } from '@/lib/pricing'
import { TRIPADVISOR_REVIEW_COUNT } from '@/lib/seoMetadata'
import {
  TOUR_CATALOG,
  TOUR_FILTERS,
  tourFromPrice,
  tourWasPrice,
  type TourCatalogItem,
  type TourFilterId,
} from '@/lib/tourCatalog'

const WA_MESSAGE = encodeURIComponent(
  'Hi Tumang Bali — I saw your tours page and would like to book a cooking class.',
)
const WA_HREF = `${SITE_CONTACT.whatsappUrl}?text=${WA_MESSAGE}`

const MENU_LINKS = [
  { href: '/tours', label: 'All tours' },
  { href: '/book-your-cooking-class', label: 'Book now' },
  { href: '/', label: 'Home' },
  { href: '/#classes', label: 'Classes' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function toursHref(opts: { filter: TourFilterId; query: string }) {
  const params = new URLSearchParams()
  if (opts.filter !== 'all') params.set('filter', opts.filter)
  if (opts.query) params.set('q', opts.query)
  const qs = params.toString()
  return qs ? `/tours?${qs}` : '/tours'
}

export default function ToursCatalog({
  visible,
  filter,
  query,
}: {
  visible: TourCatalogItem[]
  filter: TourFilterId
  query: string
}) {
  const promo = isPromoActive()

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <header className="sticky top-0 z-40 border-b border-stone-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md">
              <Image src="/images/logo.jpg" alt="Tumang Bali" fill className="object-cover" />
            </span>
            <span className="truncate text-lg font-black tracking-tight text-orange-700">
              tumang bali
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/book-your-cooking-class"
              className="hidden rounded-full bg-orange-700 px-4 py-1.5 text-sm font-semibold text-white sm:inline-flex"
            >
              Book
            </Link>
            <details className="relative">
              <summary
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full hover:bg-stone-100 [&::-webkit-details-marker]:hidden"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </summary>
              <div className="absolute right-0 z-50 mt-2 w-56 rounded-2xl border border-stone-100 bg-white p-2 shadow-xl">
                {MENU_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-stone-800 hover:bg-orange-50 hover:text-orange-800"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block rounded-xl bg-[#25D366] px-4 py-3 text-center text-base font-semibold text-white"
                >
                  WhatsApp us
                </a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 pb-28 pt-4">
        <form action="/tours" method="get" role="search">
          {filter !== 'all' ? <input type="hidden" name="filter" value={filter} /> : null}
          <label className="relative block">
            <span className="sr-only">Search tours</span>
            <button
              type="submit"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
              aria-label="Search"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
              </svg>
            </button>
            <input
              type="search"
              name="q"
              defaultValue={query}
              enterKeyHint="search"
              placeholder="Search market tour, vegetarian, family…"
              className="w-full rounded-full border-0 bg-stone-100 py-3 pl-10 pr-4 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-600/40"
            />
          </label>
        </form>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <details className="relative shrink-0">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3.5 py-2 text-sm font-medium text-stone-700 [&::-webkit-details-marker]:hidden">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M7 12h10M10 18h4" />
              </svg>
              Filter
            </summary>
            <div className="absolute left-0 z-30 mt-2 w-48 rounded-2xl border border-stone-100 bg-white p-2 shadow-xl">
              {TOUR_FILTERS.map((chip) => (
                <Link
                  key={chip.id}
                  href={toursHref({ filter: chip.id, query })}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm ${
                    filter === chip.id ? 'bg-orange-50 font-semibold text-orange-800' : 'text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  {chip.label}
                  {filter === chip.id ? <span aria-hidden="true">✓</span> : null}
                </Link>
              ))}
            </div>
          </details>
          {TOUR_FILTERS.map((chip) => {
            const active = filter === chip.id
            return (
              <Link
                key={chip.id}
                href={toursHref({ filter: chip.id, query })}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-orange-800 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {chip.label}
              </Link>
            )
          })}
        </div>

        <p className="mt-4 text-sm font-semibold text-stone-800">
          {visible.length} {visible.length === 1 ? 'experience' : 'experiences'}
        </p>

        {visible.length === 0 ? (
          <p className="mt-8 text-center text-sm text-stone-500">
            No tours match that search.{' '}
            <Link href="/tours" className="font-semibold text-orange-700 underline">
              Show all
            </Link>
          </p>
        ) : (
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3">
            {visible.map((tour) => {
              const price = tourFromPrice(tour)
              const was = tourWasPrice(tour)
              return (
                <li key={tour.id}>
                  <Link href={tour.href} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100">
                      <Image
                        src={tour.image}
                        alt={tour.imageAlt}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {tour.badge ? (
                        <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-stone-700 shadow-sm">
                          {tour.badge}
                        </span>
                      ) : null}
                      {promo ? (
                        <span className="absolute top-2 right-2 rounded-full bg-orange-700 px-2 py-0.5 text-[10px] font-semibold text-white">
                          {PROMO_LABEL}
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-1">
                      <span className="truncate text-[10px] font-semibold uppercase tracking-wide text-orange-800">
                        {tour.categoryLabel}
                      </span>
                      <span className="shrink-0 text-[11px] font-medium text-stone-800">
                        5.0{' '}
                        <span className="text-amber-500" aria-hidden="true">
                          ★
                        </span>{' '}
                        <span className="text-stone-400">({TRIPADVISOR_REVIEW_COUNT})</span>
                      </span>
                    </div>
                    <h2 className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug text-stone-900">
                      {tour.title}
                    </h2>
                    <p className="mt-1 flex items-center gap-1 text-xs text-stone-500">
                      <svg className="h-3.5 w-3.5 shrink-0 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21s7-5.33 7-11a7 7 0 10-14 0c0 5.67 7 11 7 11z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      {tour.location}
                    </p>
                    <p className="mt-1 text-[13px] leading-snug">
                      <span className="text-stone-400">from </span>
                      <span className="font-bold text-stone-900">{formatIdr(price)}</span>
                    </p>
                    {was ? (
                      <p className="text-[11px] leading-tight text-stone-400 line-through">{formatIdr(was)}</p>
                    ) : null}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 hover:bg-[#1ebe57]"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.76.46 3.48 1.34 5L2 22l5.25-1.38a9.86 9.86 0 004.79 1.22h.01c5.46 0 9.89-4.43 9.89-9.89C21.94 6.43 17.5 2 12.04 2zm5.76 14.05c-.24.67-1.4 1.24-1.94 1.32-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.77-.36h.55c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.19-.14.32-.28.49-.14.17-.3.38-.42.51-.14.14-.28.29-.12.57.16.27.7 1.16 1.5 1.88 1.03.93 1.9 1.22 2.17 1.36.27.14.43.12.59-.07.16-.19.67-.78.85-1.05.18-.27.36-.22.6-.13.24.1 1.54.73 1.8.86.27.13.44.2.51.31.07.11.07.64-.17 1.31z" />
        </svg>
      </a>
    </div>
  )
}
