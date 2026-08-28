'use client'

const TRIPADVISOR_REVIEW_URL =
  'https://www.tripadvisor.com/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html'

export default function TripAdvisorWriteReviewWidget() {
  return (
    <div className="flex justify-center items-center w-full">
      <a
        href={TRIPADVISOR_REVIEW_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-3 rounded-full border-2 border-green-600 bg-white px-8 py-4 font-bold text-stone-900 shadow-md transition-all hover:-translate-y-0.5 hover:bg-green-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
          alt=""
          width={120}
          height={24}
          loading="lazy"
          decoding="async"
          className="h-6 w-auto"
        />
        Write a review on TripAdvisor
      </a>
    </div>
  )
}
