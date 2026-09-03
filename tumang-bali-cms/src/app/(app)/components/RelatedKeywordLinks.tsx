import React from 'react'
import Link from 'next/link'
import { relatedKeywordsForSlug } from '@/lib/relatedCookingClassKeywords'

/** Internal links for related commercial keywords (SEO + GEO discovery). */
export default function RelatedKeywordLinks({ slug, className = '' }: { slug: string; className?: string }) {
  const links = relatedKeywordsForSlug(slug, 8)
  if (!links.length) return null

  return (
    <nav
      className={`mt-10 pt-8 border-t border-stone-200 dark:border-zinc-800 ${className}`}
      aria-label="Related cooking class guides"
    >
      <h2 className="text-xl font-bold mb-4 text-stone-900 dark:text-stone-100">Related cooking class searches</h2>
      <ul className="flex flex-wrap gap-2">
        {links.map((k) => (
          <li key={k.query}>
            <Link
              href={k.path}
              className="inline-flex text-sm font-semibold text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 border border-orange-200/70 dark:border-orange-900/40 rounded-full px-3 py-1.5 hover:bg-orange-100 dark:hover:bg-orange-950/50 transition-colors no-underline"
            >
              {k.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
