'use client'

import React, { useState } from 'react'

const faqs = [
  {
    question: 'What is included in the cooking class?',
    answer: 'Our cooking class includes a guided local market tour, a welcome drink, hands-on cooking of 10+ traditional Balinese dishes (both regular and vegetarian options), a full lunch or dinner with the food you prepared, a recipe book to take home, and complimentary hotel pickup from the Ubud area.',
  },
  {
    question: 'Do I need any cooking experience?',
    answer: 'Absolutely not! Our classes are designed for all skill levels — from complete beginners to experienced home cooks. Our friendly local chefs will guide you step-by-step through every recipe. It\'s more about the fun cultural experience than perfection!',
  },
  {
    question: 'Is there a vegetarian menu available?',
    answer: 'Yes! We offer a complete vegetarian menu featuring dishes like Kare Tahu (Tofu Curry), Sate Tempe (Tempeh Satay), Tofu Pepes (Steamed Tofu in Banana Leaf), and many more. Just let us know when booking and we\'ll prepare everything fresh for you.',
  },
  {
    question: 'What time does the class start?',
    answer: 'We offer two sessions daily: a Morning Class starting at 8:00 AM (includes market tour) and an Afternoon Class starting at 2:00 PM. The morning class is our most popular option as you get to experience the vibrant local market!',
  },
  {
    question: 'How do I get to the cooking class?',
    answer: 'We offer complimentary hotel pickup and drop-off from the Ubud area. For guests staying outside Ubud, we can arrange transport for a small additional fee. You can also arrange your own transportation — we\'ll send you our exact location via WhatsApp after booking.',
  },
  {
    question: 'Can I book for a group?',
    answer: 'Absolutely! We welcome groups of any size. For groups of 6 or more, we can arrange a private cooking class exclusively for your party. Contact us via WhatsApp for special group rates and availability.',
  },
  {
    question: 'What should I bring?',
    answer: 'Just bring yourself, comfortable clothing, and a great appetite! We provide aprons, all cooking equipment, and ingredients. We recommend wearing closed-toe shoes for the market tour and bringing sunscreen and a hat for the rice field walk.',
  },
  {
    question: 'How long is the cooking class?',
    answer: 'The full experience lasts approximately 4–5 hours, which includes the market tour (45 mins), rice field walk (30 mins), cooking class (2 hours), and dining time (1 hour). It\'s a complete cultural and culinary immersion!',
  },
  {
    question: 'Is this cooking class suitable for beginners?',
    answer: 'Absolutely. Our hands-on cooking class is designed for complete beginners. Chef Wayan guides you step-by-step, and by the end, you\'ll feel confident cooking traditional Balinese dishes at home. We even provide a recipe booklet!',
  },
  {
    question: 'Do you offer a vegetarian or vegan cooking class?',
    answer: 'Yes! We serve a fully plant-based Balinese menu upon request, featuring dishes like Veggie Sate, Tempe Curry, and local vegetable soups. Just let us know when you book.',
  },
  {
    question: 'Can kids join the cooking class?',
    answer: 'Kids aged 8 and above are very welcome! It\'s a fun, interactive family activity. Little hands love grinding spices and stirring the sate sauce. We provide child-friendly portions and extra guidance.',
  },
  {
    question: 'Will I get a recipe booklet to take home?',
    answer: 'Yes! Every guest receives a printed recipe booklet with all 10+ dishes we cook, so you can recreate the authentic flavors long after your cooking class in Ubud.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
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
          {faqs.map((faq, index) => {
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
