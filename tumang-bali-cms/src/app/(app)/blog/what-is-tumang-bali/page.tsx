import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What is Tumang Bali? — The Village Behind the Famous Cooking Class | Tumang Bali',
  description: 'Tumang Bali refers to the village of Tumang in Central Bali, Indonesia — a traditional Balinese village known for its authentic village life, rice paddies, and as the home of the famous Tumang Bali Cooking Class experience.',
  keywords: ['what is tumang bali', 'tumang bali', 'tumang village', 'what is tumang'],
  openGraph: {
    title: 'What is Tumang Bali? — The Village Behind the Famous Cooking Class',
    description: 'Tumang Bali refers to the village of Tumang in Central Bali, Indonesia — a traditional Balinese village known for its authentic village life, rice paddies, and as the home of the famous Tumang Bali Cooking Class experience.',
    url: 'https://tumangbaliclass.com/blog/what-is-tumang-bali',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'What is Tumang Bali? — Traditional Balinese village and home of cooking class',
      },
    ],
  },
}

export default function WhatIsTumangBaliPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/70 dark:bg-black/50 backdrop-blur-md border-b border-white/20 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-orange-600 dark:text-orange-500">TUMANG BALI</Link>
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            <Link href="/book-your-cooking-class" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full font-medium transition-transform hover:scale-105">Book Now</Link>
          </div>
        </div>
      </nav>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': 'What is Tumang Bali? — The Village Behind the Famous Cooking Class',
          'description': 'Tumang Bali refers to the village of Tumang in Central Bali, Indonesia — a traditional Balinese village known for its authentic village life, rice paddies, and as the home of the famous Tumang Bali Cooking Class experience.',
          'author': {
            '@type': 'Organization',
            'name': 'Tumang Bali Cooking Class',
            'url': 'https://tumangbaliclass.com'
          },
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': 'https://tumangbaliclass.com/blog/what-is-tumang-bali'
          }
        }) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-4 inline-block">About Tumang</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-stone-900 dark:text-white">
          What is Tumang Bali?
        </h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto font-light leading-relaxed">
          Tumang Bali refers to the village of Tumang in Central Bali, Indonesia — a traditional Balinese village known for its authentic village life, surrounding rice paddies, and as the home of the famous Tumang Bali Cooking Class experience. The village is located in Kabupaten Gianyar, approximately 30 minutes north of Ubud.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-stone-500">
          <span>Updated July 2026</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-stone-900 dark:text-white">Where is Tumang Located?</h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-4">
              Tumang Village is located in the <strong>Kabupaten Gianyar</strong> (Gianyar Regency) in Central Bali. It sits at an elevation of approximately 300 meters above sea level, which gives it a cooler climate than the coastal areas. This elevated position also means you get stunning views of the surrounding rice paddies and distant mountains.
            </p>
            <div className="bg-stone-100 dark:bg-zinc-900 rounded-3xl p-6 border border-stone-200 dark:border-zinc-800">
              <h3 className="font-bold text-stone-900 dark:text-white mb-3">Travel Times from Tumang</h3>
              <div className="space-y-2">
                {[
                  ['Ubud Center', '~30 minutes'],
                  ['Tegallalang Rice Terraces', '~20 minutes'],
                  ['Sukawati Art Market', '~25 minutes'],
                  ['Ngurah Rai Airport (DPS)', '~45 minutes'],
                  ['Seminyak/Canggu', '~1 hour'],
                ].map(([place, time]) => (
                  <div key={place} className="flex justify-between text-sm">
                    <span className="text-stone-600 dark:text-stone-400 font-light">{place}</span>
                    <span className="font-bold text-stone-900 dark:text-white">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 bg-stone-100 dark:bg-zinc-900 aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505094.34248964326!2d115.2810863!3d-8.4945634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d2325683733%3A0x52a86956537dd317!2sWarung%20Tumang%20Bali!5e0!3m2!1sen!2sid!4v1782035274458!5m2!1sen!2sid"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Why is Tumang Famous */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-stone-900 dark:text-white">Why is Tumang Famous?</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg font-light">
            Tumang's fame comes from a combination of authentic village life and world-class culinary experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            ['Tumang Bali Cooking Class', 'The village is most famous for the Tumang Bali Cooking Class — a world-renowned authentic Balinese cooking experience run by Chef Wayan and his family. With over 1,200 five-star reviews on TripAdvisor and features on travel shows, this class has become one of Bali\'s most popular cultural experiences.'],
            ['Authentic Village Life', 'Beyond the cooking class, Tumang is a real working village. Residents maintain traditional Balinese customs — daily flower offerings at shrines, community temple ceremonies, rice farming in the surrounding paddies, and a close-knit community that welcomes visitors with warmth.'],
            ['Rice Paddy Surroundings', 'The village is surrounded by lush green rice paddies that are part of Bali\'s ancient subak irrigation system — a UNESCO-recognized water management tradition. Walking through these fields to reach the cooking class is a highlight for many visitors.'],
            ['Close to Major Attractions', 'Tumang\'s location makes it an ideal base for exploring Central Bali. You\'re within easy reach of the Tegallalang Rice Terraces, Ubud\'s art galleries and temples, Sukawati Art Market, and the Campuhan Ridge Walk — all while being in a peaceful village setting away from the crowds.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">{title}</h3>
              <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips for Visiting */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-stone-900 dark:text-white">Tips for Visiting Tumang Village</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            ['Best Time to Visit', 'Early morning (7-9 AM) for market visits. The cooking class morning session starts at 8 AM with market tour. Morning light is beautiful for photography.'],
            ['What to Wear', 'Comfortable clothing, closed-toe shoes for the market tour. Modest dress is appreciated since it\'s a working village with temples.'],
            ['Getting There', 'Hire a private driver from Ubud (~$15-20/day) or rent a scooter. Our cooking class includes free pickup from Ubud.'],
            ['What to Expect', 'It\'s a real village, not a tourist attraction. You\'ll see locals going about their daily lives, temple ceremonies, and rice farming. Be respectful and ask before taking photos of people.'],
            ['Combine with Other Activities', 'Visit Tegallalang Rice Terraces in the morning, then join the cooking class in the afternoon. Many visitors combine Tumang with Ubud\'s temples and markets.'],
          ].map(([title, desc]) => (
            <div key={title} className="flex items-start gap-4 bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-6">
              <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <h3 className="font-bold text-stone-900 dark:text-white mb-1">{title}</h3>
                <p className="text-stone-600 dark:text-stone-400 font-light">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="bg-orange-50 dark:bg-orange-950/20 rounded-3xl p-8 md:p-16 border border-orange-100 dark:border-orange-900/30 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-stone-900 dark:text-white">Experience Tumang for Yourself</h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-10 text-lg font-light">
            The best way to learn about Tumang is to experience it — visit the market, walk through the rice paddies, and cook authentic Balinese food with Chef Wayan's family.
          </p>
          <Link href="/book-your-cooking-class" className="inline-flex items-center gap-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
            Book Your Tumang Experience
          </Link>
        </div>
      </section>
    </div>
  )
}
