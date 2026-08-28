'use client'

import Image from 'next/image'
import { useState } from 'react'

const TIKTOK_VIDEO_ID = '7368745244579335441'
const POSTER_SRC = '/images/gallery-girls.jpg'

export default function TikTokEmbed() {
  const [loaded, setLoaded] = useState(false)

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="absolute inset-0 h-full w-full border-0 p-0 cursor-pointer group"
        aria-label="Play guest TikTok video of the Tumang Bali cooking class"
      >
        <Image
          src={POSTER_SRC}
          alt="Guests enjoying a Balinese cooking class feast in Ubud"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 384px"
          className="object-cover"
        />
        <span className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-orange-600 shadow-lg group-hover:scale-105 transition-transform">
            <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </button>
    )
  }

  return (
    <iframe
      title="Guest TikTok of the Tumang Bali cooking class"
      src={`https://www.tiktok.com/player/v1/${TIKTOK_VIDEO_ID}?music_info=0&description=0&autoplay=1&loop=1`}
      allow="encrypted-media; fullscreen; accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  )
}
