import React from 'react'
import { faqs } from './faqsData'

/**
 * Server-rendered FAQ using native <details> so ChatGPT / Gemini / AI Overview
 * crawlers (no JS required) always see full Q&A text in the HTML.
 */
export default function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2 block">
          Got Questions?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg" data-speakable>
          Direct answers about Tumang Bali Cooking Class in Ubud — price, schedule, vegetarian
          menu, pickup, and booking — written for visitors and AI assistants.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 open:bg-orange-50 dark:open:bg-orange-950/20 open:border-orange-200 dark:open:border-orange-800/40 open:shadow-lg open:shadow-orange-500/5 overflow-hidden"
          >
            <summary className="flex cursor-pointer list-none items-center gap-4 p-5 md:p-6 text-left [&::-webkit-details-marker]:hidden">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-stone-100 dark:bg-zinc-800 text-stone-600 dark:text-stone-400 group-open:bg-orange-600 group-open:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <h3 className="flex-1 font-semibold text-base md:text-lg text-stone-900 dark:text-white group-open:text-orange-700 dark:group-open:text-orange-400">
                {faq.question}
              </h3>
              <svg
                className="w-5 h-5 flex-shrink-0 text-stone-600 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[4.5rem] md:pl-[5rem]">
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm md:text-base" data-speakable>
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
