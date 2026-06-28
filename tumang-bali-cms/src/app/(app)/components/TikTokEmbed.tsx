'use client'

import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

export default function TikTokEmbed() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex justify-center w-full min-h-[600px] bg-stone-100 dark:bg-zinc-900 rounded-3xl animate-pulse flex-col items-center">
      {isVisible ? (
        <>
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@yas.melati/video/7368745244579335441"
            data-video-id="7368745244579335441"
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            <section>
              <a
                target="_blank"
                title="@yas.melati"
                href="https://www.tiktok.com/@yas.melati?refer=embed"
                rel="noreferrer"
              >
                @yas.melati
              </a>
            </section>
          </blockquote>
          <Script
            src="https://www.tiktok.com/embed.js"
            strategy="lazyOnload"
          />
        </>
      ) : (
        <span className="text-stone-500 font-medium">Loading TikTok...</span>
      )}
    </div>
  )
}
