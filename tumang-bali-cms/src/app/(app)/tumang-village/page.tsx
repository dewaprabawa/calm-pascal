import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What is Tumang Village, Bali? — Home of Authentic Balinese Cooking Class | Tumang Bali',
  description: 'Tumang Village is a traditional Balinese village in Central Bali, known for its authentic village life, rice paddies, and as the home of the famous Tumang Bali Cooking Class experience.',
  keywords: ['tumang village bali', 'what is tumang bali', 'tumang village', 'tumang bali cooking class'],
  openGraph: {
    title: 'What is Tumang Village, Bali? — Home of Authentic Balinese Cooking Class',
    description: 'Tumang Village is a traditional Balinese village in Central Bali, known for its authentic village life, rice paddies, and as the home of the famous Tumang Bali Cooking Class experience.',
    url: 'https://tumangbaliclass.com/tumang-village',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Tumang Village Bali — Traditional Balinese village and home of authentic cooking class',
      },
    ],
  },
}

export default function TumangVillagePage() {
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
          'headline': 'What is Tumang Village, Bali? — A Traditional Balinese Village',
          'description': 'Tumang Village is a traditional Balinese village in Kabupaten Gianyar, Central Bali, known for its authentic village life, rice paddies, and as the home of the Tumang Bali Cooking Class experience.',
          'author': {
            '@type': 'Organization',
            'name': 'Tumang Bali Cooking Class',
            'url': 'https://tumangbaliclass.com'
          },
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': 'https://tumangbaliclass.com/tumang-village'
          }
        }) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
        <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-4 inline-block">About Tumang</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-stone-900 dark:text-white">
          What is Tumang Village, Bali?
        </h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto font-light leading-relaxed">
          Tumang Village is a traditional Balinese village located in Kabupaten Gianyar, Central Bali. Known for its authentic village life, surrounding rice paddies, and as the home of the famous Tumang Bali Cooking Class experience, the village offers visitors a glimpse into everyday Balinese culture — away from the tourist areas of Seminyak and Kuta.
        </p>
      </section>

      {/* Where is it */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-stone-900 dark:text-white">Where is Tumang Village?</h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-4">
              Tumang Village is located in the <strong>Kabupaten Gianyar</strong> (Gianyar Regency) in Central Bali. It sits approximately 30 minutes north of Ubud and about 45 minutes from the tourist hub of Kuta. The village is surrounded by lush rice paddies and tropical gardens, offering a peaceful rural atmosphere that's only a short drive from Bali's cultural heart.
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

      {/* What makes it special */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-zinc-800">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-stone-900 dark:text-white">What Makes Tumang Special?</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl text-lg font-light">
            A village where Balinese culture and daily life unfold naturally — no crowds, no tourist traps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            ['Rice Paddies & Tropical Gardens', 'The village is surrounded by lush green rice paddies that stretch across the Central Bali landscape. Walk through the fields between market and kitchen, and watch how Balinese farmers cultivate rice using traditional subak irrigation.'],
            ['Authentic Village Life', 'Unlike tourist-heavy areas, Tumang is a living, breathing village where residents go about their daily lives. You\'ll see families making flower offerings, children playing, and the community coming together for temple ceremonies.'],
            ['Home of Tumang Cooking Class', 'The village is most famous for the Tumang Bali Cooking Class — a world-renowned authentic Balinese cooking experience run by Chef Wayan and his family. With over 1,200 five-star reviews on TripAdvisor, this class has become one of Bali\'s most popular cultural experiences.'],
            ['Close to Major Attractions', 'Just 30 minutes from Ubud\'s cultural center, Tumang offers the perfect balance — the convenience of being near a major tourist destination with the authenticity of a real village. Visit Ubud\'s temples and galleries in the morning, then experience village life in the afternoon.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">{title}</h3>
              <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">{desc}</p>
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
            Book Your Cooking Class
          </Link>
        </div>
      </section>
    </div>
  )
}
