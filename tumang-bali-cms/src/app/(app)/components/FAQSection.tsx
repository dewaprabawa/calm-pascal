'use client'

import React, { useState } from 'react'
import { faqs } from './faqsData'

const faqsLocal = faqs

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqsLocal.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2 block">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg">
            Everything you need to know about our Balinese cooking experience.
          </p>
        </div>

        <div className="space-y-4">
          {faqsLocal.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800/40 shadow-lg shadow-orange-500/5'
                    : 'bg-white dark:bg-zinc-900/80 border-stone-200 dark:border-zinc-800 hover:border-orange-200 dark:hover:border-orange-800/30 hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isOpen
                      ? 'bg-orange-500 text-white'
                      : 'bg-stone-100 dark:bg-zinc-800 text-stone-500 dark:text-stone-400'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className={`flex-1 font-semibold text-base md:text-lg transition-colors ${
                    isOpen ? 'text-orange-700 dark:text-orange-400' : 'text-stone-900 dark:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[4.5rem] md:pl-[5rem]">
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
