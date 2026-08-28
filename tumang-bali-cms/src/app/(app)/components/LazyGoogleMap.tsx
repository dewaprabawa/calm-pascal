'use client'

import { useEffect, useRef, useState } from 'react'

type LazyGoogleMapProps = {
  src: string
  title: string
}

export default function LazyGoogleMap({ src, title }: LazyGoogleMapProps) {
  const [showMap, setShowMap] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (showMap) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShowMap(true)
          observer.disconnect()
        }
      },
      { rootMargin: '240px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [showMap])

  return (
    <div
      ref={ref}
      className="flex h-full min-h-[280px] w-full items-center justify-center bg-stone-200 dark:bg-zinc-800"
    >
      {showMap ? (
        <iframe
          title={title}
          src={src}
          className="h-full w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          type="button"
          onClick={() => setShowMap(true)}
          className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-700"
        >
          Load Google Map
        </button>
      )}
    </div>
  )
}
