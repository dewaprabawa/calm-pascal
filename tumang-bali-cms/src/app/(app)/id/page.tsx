import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { sortActivities } from '@/lib/sortActivities'
import BookButton from '../components/BookButton'
import BookingModal from '../components/BookingModal'
import LanguageSwitcher from '../components/LanguageSwitcher'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { SITE, SITE_CONTENT_UPDATED } from '@/lib/seoMetadata'

export const revalidate = 60

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: 'Kelas Memasak Ubud Bali — Harga IDR 506,370 | Tumang Bali',
  description:
    'Kelas memasak Bali di Ubud: tur pasar pagi, jalan sawah, masak 10+ hidangan tradisional. Harga IDR 506,370, vegetarian, penjemputan hotel gratis. TripAdvisor Travelers\' Choice 2026.',
  alternates: {
    canonical: 'https://tumangbaliclass.com/id',
    languages: {
      'en-US': 'https://tumangbaliclass.com',
      'id-ID': 'https://tumangbaliclass.com/id',
      'x-default': 'https://tumangbaliclass.com',
    },
  },
  openGraph: {
    title: 'Kelas Memasak Bali Autentik di Ubud | Tumang Bali',
    description:
      'Tur pasar + jalan sawah + 10+ hidangan. Harga IDR 506,370. Menu vegetarian. Penjemputan hotel termasuk.',
    url: 'https://tumangbaliclass.com/id',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Kelas Memasak Tumang Bali di desa dekat Ubud',
      },
    ],
  },
}

const highlights = [
  {
    title: 'Tur Pasar Lokal (Kelas Pagi Saja)',
    description:
      'Hanya di kelas pagi: jelajahi pasar pagi tradisional dan kenali rempah, sayuran, serta bahan segar khas Bali bersama pemandu kami. Kelas sore tidak termasuk tur pasar.',
    image: '/images/itinerary/market-fresh.jpg',
  },
  {
    title: 'Jalan-Jalan di Sawah',
    description:
      'Nikmati jalan santai melewati hamparan sawah hijau dan pelajari cara petani Bali menanam padi sebelum kelas dimulai.',
    image: '/images/itinerary/offerings-detail.jpg',
  },
  {
    title: 'Kelas Memasak dalam Bahasa Inggris',
    description:
      'Pakai celemek dan masak 10+ hidangan Bali tradisional langkah demi langkah. Chef mengajar dalam bahasa Inggris agar tamu internasional mudah mengikuti.',
    image: '/images/itinerary/cooking-table.jpg',
  },
  {
    title: 'Santap Bersama',
    description:
      'Duduk bersama dan nikmati hidangan yang baru Anda masak dengan pemandangan desa Tumang yang menenangkan.',
    image: '/images/itinerary/guest-dessert.jpg',
  },
]

const faqs = [
  {
    question: 'Berapa harga kelas memasak di Ubud?',
    answer:
      'Kelas bersama pagi atau sore: IDR 506.370 per dewasa (2+ peserta; IDR 616.032 untuk 1) (termasuk tur pasar untuk sesi pagi saja, masak 10+ hidangan, makan, penjemputan hotel Ubud, dan buku resep). Kelas privat 1 orang: IDR 633.090. Min. 2 peserta: IDR 1.266.180.',
  },
  {
    question: 'Apa perbedaan kelas pagi dan sore?',
    answer:
      'Kelas pagi (±08:30–12:30) termasuk tur pasar pagi dan jalan sawah — cocok untuk kunjungan pertama. Kelas sore (±14:30–17:30) tidak termasuk tur pasar; fokus jalan sawah, masak menu lengkap, dan makan malam bersama.',
  },
  {
    question: 'Apakah kelas diajarkan dalam bahasa Inggris?',
    answer:
      'Ya. Kelas memasak diajarkan dalam bahasa Inggris oleh chef lokal kami, sehingga tamu internasional dapat mengikuti setiap langkah dengan jelas. Tim kami juga dapat membantu dalam bahasa Indonesia jika diperlukan.',
  },
  {
    question: 'Apakah ada menu vegetarian atau vegan?',
    answer:
      'Ya. Kami menyiapkan menu nabati lengkap (bukan sekadar pilihan sampingan). Untuk vegan, beri tahu kami saat pesan agar pasta udang dan bahan hewani diganti.',
  },
  {
    question: 'Di mana lokasi kelas dan apakah ada penjemputan?',
    answer:
      'Dapur kami di desa Tumang, sekitar 30 menit dari pusat Ubud. Penjemputan gratis dari hotel di kawasan Ubud. Area lain bisa diatur dengan biaya tambahan.',
  },
  {
    question: 'Apakah cocok untuk pemula dan anak-anak?',
    answer:
      'Ya. Tidak perlu pengalaman memasak. Anak usia 8 tahun ke atas dipersilakan. Kelompok kecil maksimal 8 orang agar setiap tamu mendapat panduan langsung dari chef.',
  },
]

export default async function IndonesianPage() {
  let bookingActivities: any[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs: activities } = await payload.find({ collection: 'activities' })
    bookingActivities = sortActivities(
      activities.map((a) => ({
        id: a.id as string,
        title: a.title as string,
        price: a.price as number,
        kidsPrice: (a as { kidsPrice?: number }).kidsPrice,
      })),
    )
  } catch (err) {
    console.error('id page: could not load activities from CMS', err)
  }

  if (bookingActivities.length === 0) {
    bookingActivities = [
      { id: 'morning-class', title: 'Kelas Pagi: Tur Pasar & Memasak (3–4 Jam)', price: 616032, groupPrice: 506370 },
      { id: 'afternoon-class', title: 'Kelas Sore: Memasak Masakan Bali (3 Jam)', price: 616032, groupPrice: 506370 },
      { id: 'private-class', title: 'Kelas Privat (1 Orang)', price: 633090, groupPrice: 1266180 },
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Kelas Memasak Bali di Ubud — Tumang Bali',
    description:
      'Kelas memasak tradisional Bali dengan tur pasar, jalan sawah, dan 10+ hidangan. Harga dari IDR 506.370.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Tumang Bali Cooking Class',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ubud',
        addressRegion: 'Bali',
        addressCountry: 'ID',
      },
      telephone: '+62-822-1013-2418',
    },
    offers: {
      '@type': 'Offer',
      price: 506370,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      url: 'https://tumangbaliclass.com/book-your-cooking-class',
    },
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE}/id#webpage`,
    url: `${SITE}/id`,
    name: 'Kelas Memasak Ubud Bali — Tumang Bali',
    description:
      'Kelas memasak Bali di Ubud: tur pasar pagi, jalan sawah, masak 10+ hidangan. Harga IDR 506,370.',
    dateModified: SITE_CONTENT_UPDATED,
    inLanguage: 'id-ID',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '[data-speakable]'],
    },
  }

  return (
    <div
      lang="id"
      dir="ltr"
      className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans selection:bg-orange-500 selection:text-white"
    >
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.setAttribute('lang','id')" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 h-20 flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
          <Link href="/id" className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden rounded-md border-2 border-orange-200 dark:border-orange-900/30">
              <Image src="/images/logo.jpg" alt="Logo Tumang Bali" fill className="object-cover" />
            </div>
            <span className="text-xl font-black tracking-tighter text-orange-600 dark:text-orange-500">
              TUMANG BALI
            </span>
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <a href="#harga" className="hidden sm:inline hover:text-orange-500 transition-colors">
              Harga
            </a>
            <a href="#faq" className="hidden sm:inline hover:text-orange-500 transition-colors">
              FAQ
            </a>
            <LanguageSwitcher
              current="id"
              className="text-stone-500 hover:text-orange-500 transition-colors"
            />
          </div>
        </div>
      </nav>

      <header className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-stone-50 to-orange-50/30 dark:from-orange-950/20 dark:via-zinc-950 dark:to-orange-900/10 -z-10" />
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-sm font-semibold tracking-wide border border-orange-200 dark:border-orange-900/30 mb-6">
            Kelas Memasak Bali Autentik di Ubud · TripAdvisor 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Kelas Memasak di{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-500">
              Ubud
            </span>{' '}
            — Dari IDR 506,370
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl font-light leading-relaxed mb-8" data-speakable>
            Tur pasar hanya di kelas pagi, jalan di sawah, dan masak 10+ hidangan Bali tradisional
            bersama chef lokal (diajarkan dalam bahasa Inggris) di desa Tumang. Kelompok kecil, ramah
            vegetarian, penjemputan hotel gratis.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <BookButton className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 active:scale-95">
              Pesan Sekarang
            </BookButton>
            <a
              href="https://wa.me/6282210132418?text=Halo%20Tumang%20Bali%2C%20saya%20ingin%20pesan%20kelas%20memasak."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/60 hover:bg-white border border-stone-200 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-center">
          Mengapa memilih kelas memasak di Ubud bersama Tumang Bali?
        </h2>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
          Ubud adalah pusat budaya Bali — pasar tradisional, sistem irigasi subak, dan dapur keluarga
          yang masih menggiling bumbu di cobek. Kelas memasak di desa Tumang (sekitar 30 menit dari
          pusat Ubud) memberi pengalaman yang jarang didapat di dapur hotel: tur pasar pagi
          (kelas pagi saja), jalan sawah, dan masak 10+ hidangan dari nol termasuk Base Genep —
          diajarkan dalam bahasa Inggris.
        </p>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
          Cocok untuk pasangan, keluarga dengan anak 8+, wisatawan kuliner, dan pemula. Menu bisa
          disesuaikan vegetarian atau vegan tanpa biaya tambahan. Setiap tamu membawa pulang buku
          resep cetak.
        </p>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-orange-600 dark:text-orange-500 text-sm font-bold uppercase tracking-wider mb-2 block">
            Pengalaman Anda
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Rangkaian Kegiatan</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-stone-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="aspect-video relative bg-stone-200 dark:bg-zinc-800 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="harga" className="py-16 px-6 bg-white dark:bg-zinc-900 border-y border-stone-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-4">
            Harga Kelas Memasak Ubud 2026
          </h2>
          <p className="text-center text-stone-500 mb-10 max-w-2xl mx-auto">
            Semua harga dalam Rupiah. Termasuk bahan, makan, dan buku resep. Penjemputan hotel Ubud
            gratis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Kelas Bersama — 2+',
                price: 'IDR 506.370',
                note: 'Per dewasa · harga terbaik untuk pasangan',
              },
              {
                label: 'Kelas Bersama — 1 orang',
                price: 'IDR 616.032',
                note: 'Pagi atau sore · peserta tunggal',
              },
              {
                label: 'Kelas Privat',
                price: 'IDR 633.090 / 1.266.180',
                note: '1 orang · atau min. 2 peserta',
              },
            ].map((tier) => (
              <div
                key={tier.label}
                className="rounded-3xl border border-stone-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-950 p-8 text-center"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-orange-600 mb-2">
                  {tier.label}
                </p>
                <p className="text-3xl font-black mb-2">{tier.price}</p>
                <p className="text-sm text-stone-500">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-stone-50 dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-10">
            Sudah Termasuk
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              'Menu Vegetarian / Vegan',
              'Penjemputan Hotel Ubud',
              'Tur Pasar (kelas pagi)',
              'Jalan-Jalan di Sawah',
              'Buku Resep Cetak',
              'Kelompok Kecil (maks. 8)',
            ].map((feature) => (
              <div
                key={feature}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-stone-200 dark:border-zinc-800 font-semibold"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-10">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div
              key={f.question}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-stone-200 dark:border-zinc-800"
            >
              <h3 className="font-bold text-lg mb-2">{f.question}</h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-black mb-4">Jelajahi lebih lanjut</h2>
        <p className="text-stone-500 mb-6 text-sm">
          Halaman bahasa Inggris dengan menu lengkap, resep, dan ulasan:
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
          <Link href="/balinese-cooking-class-ubud" className="text-orange-600 hover:underline">
            Cooking Class Ubud
          </Link>
          <span className="text-stone-300">·</span>
          <Link href="/recipes" className="text-orange-600 hover:underline">
            Resep
          </Link>
          <span className="text-stone-300">·</span>
          <Link href="/blog" className="text-orange-600 hover:underline">
            Blog
          </Link>
          <span className="text-stone-300">·</span>
          <Link href="/compare-ubud-cooking-classes" className="text-orange-600 hover:underline">
            Bandingkan Kelas
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Siap Memasak Bersama Kami?
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 mb-8">
            Pengalaman kuliner setengah hari yang tak terlupakan di Ubud. Tempat terbatas setiap
            harinya.
          </p>
          <BookButton className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95">
            Pesan Kelas Anda
          </BookButton>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-stone-200 dark:border-zinc-800 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Tumang Bali Cooking Class · Desa Tumang, Ubud, Bali ·{' '}
        <a href="/contact" className="text-orange-600 hover:underline">
          Kontak
        </a>{' '}
        ·{' '}
        <a href="/refund-policy" className="text-orange-600 hover:underline">
          Refund
        </a>{' '}
        ·{' '}
        <a href="/privacy-policy" className="text-orange-600 hover:underline">
          Privasi
        </a>{' '}
        ·{' '}
        <LanguageSwitcher current="id" className="text-orange-600 hover:underline" />
      </footer>

      <BookingModal activities={bookingActivities} />
      <WhatsAppFloat />
    </div>
  )
}
