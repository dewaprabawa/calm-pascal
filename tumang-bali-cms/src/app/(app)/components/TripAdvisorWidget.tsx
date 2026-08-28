'use client'

import React from 'react'

const TRIPADVISOR_URL =
  'https://www.tripadvisor.co.id/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html'

export default function TripAdvisorWidget() {
  return (
    <div className="flex justify-center items-center">
      <a
        target="_blank"
        href={TRIPADVISOR_URL}
        rel="noreferrer noopener"
        className="inline-block"
        aria-label="TripAdvisor Travelers' Choice 2026 — Tumang Bali Cooking Class"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2026_LL.png"
          alt="TripAdvisor Travelers' Choice 2026"
          width={140}
          height={183}
          loading="lazy"
          decoding="async"
          className="h-auto w-[140px]"
        />
      </a>
    </div>
  )
}
