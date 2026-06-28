import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import BookButton from '../components/BookButton'
import BookingModal from '../components/BookingModal'
import WhatsAppFloat from '../components/WhatsAppFloat'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Kelas Memasak Terbaik di Ubud Bali | Tumang Bali',
  description:
    'Kelas memasak Bali autentik di Ubud: tur pasar lokal, jalan-jalan di sawah & memasak langsung 10+ hidangan tradisional. Ramah vegetarian, penjemputan hotel.',
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
      'Bergabunglah dengan kelas memasak terbaik di Ubud! Tur pasar + jalan-jalan di sawah + 10+ hidangan. Pilihan vegetarian. Penjemputan hotel termasuk.',
    url: 'https://tumangbaliclass.com/id',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Kelas Memasak Tumang Bali - Tamu menikmati pengalaman memasak Bali autentik di sawah Ubud',
      },
    ],
  },
}

const highlights = [
  {
    title: 'Tur Pasar Lokal',
    description:
      'Jelajahi pasar pagi tradisional Ubud dan temukan rempah, sayuran, serta bahan segar khas Bali bersama pemandu kami.',
    image: '/images/img2.jpg',
  },
  {
    title: 'Jalan-Jalan di Sawah',
    description:
      'Nikmati jalan santai melewati hamparan sawah hijau dan pelajari cara petani Bali menanam padi sebelum kelas dimulai.',
    image: '/images/img3.jpg',
  },
  {
    title: 'Kelas Memasak Langsung',
    description:
      'Pakai celemek dan masak 10+ hidangan Bali tradisional langkah demi langkah bersama chef lokal berpengalaman.',
    image: '/images/img1.jpg',
  },
  {
    title: 'Santap Bersama',
    description:
      'Duduk bersama dan nikmati hidangan yang baru Anda masak dengan pemandangan indah Ubud yang menenangkan.',
    image: '/images/img4.jpg',
  },
]

export default async function IndonesianPage() {
  const payload = await getPayload({ config: configPromise })
  const { docs: activities } = await payload.find({ collection: 'activities' })
  const bookingActivities = activities.map((a) => ({
    id: a.id as string,
    title: a.title as string,
    price: a.price as number,
  }))

  return (
    <div
      lang="id"
      className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-50 font-sans selection:bg-orange-500 selection:text-white"
    >
      {/* Navigation */}
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
          <Link
            href="/"
            hrefLang="en"
            className="text-sm font-semibold text-stone-500 hover:text-orange-500 transition-colors"
          >
            English
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-stone-50 to-orange-50/30 dark:from-orange-950/20 dark:via-zinc-950 dark:to-orange-900/10 -z-10" />
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-sm font-semibold tracking-wide border border-orange-200 dark:border-orange-900/30 mb-6">
            Kelas Memasak Bali Autentik di Ubud
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Rasakan Jiwa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-500">
              Bali
            </span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl font-light leading-relaxed mb-8">
            Selami cita rasa tradisional, bahan-bahan segar dari pasar, dan rahasia kuliner kuno yang
            diwariskan turun-temurun. Memasak, bersantap, dan berbagi keindahan sawah Ubud.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <BookButton className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 active:scale-95">
              Pesan Sekarang
            </BookButton>
            <a
              href="https://wa.me/6282210132418"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/60 hover:bg-white border border-stone-200 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Highlights / Itinerary */}
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

      {/* What's included */}
      <section className="py-16 px-6 bg-white dark:bg-zinc-900 border-y border-stone-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-10">
            Sudah Termasuk
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              'Menu Vegetarian',
              'Penjemputan Hotel',
              'Tur Pasar',
              'Jalan-Jalan di Sawah',
              'Buku Resep',
              'Kelompok Kecil',
            ].map((feature) => (
              <div
                key={feature}
                className="bg-stone-50 dark:bg-zinc-950 rounded-2xl p-5 border border-stone-200 dark:border-zinc-800 font-semibold"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Siap Memasak Bersama Kami?
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 mb-8">
            Pengalaman kuliner setengah hari yang tak terlupakan di Ubud. Tempat terbatas untuk
            kelompok kecil setiap harinya.
          </p>
          <BookButton className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95">
            Pesan Kelas Anda
          </BookButton>
          <p className="mt-8 text-sm text-stone-500">
            Ingin melihat detail lengkap, menu, dan ulasan?{' '}
            <Link href="/" hrefLang="en" className="text-orange-600 font-semibold underline">
              Kunjungi situs lengkap kami (Bahasa Inggris)
            </Link>
          </p>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-stone-200 dark:border-zinc-800 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Tumang Bali Cooking Class · Ubud, Bali
      </footer>

      <BookingModal activities={bookingActivities} />
      <WhatsAppFloat />
    </div>
  )
}
