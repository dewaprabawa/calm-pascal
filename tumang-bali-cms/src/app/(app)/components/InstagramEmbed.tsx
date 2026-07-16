'use client'

import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

export default function InstagramEmbed() {
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
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/reel/DC6j8hLSKX6/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14" 
            style={{ 
              background: '#FFF', 
              border: 0, 
              borderRadius: '3px', 
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
              margin: '1px', 
              maxWidth: '540px', 
              minWidth: '326px', 
              padding: 0, 
              width: 'calc(100% - 2px)'
            }}
          >
          </blockquote>
          <Script 
            src="https://www.instagram.com/embed.js" 
            strategy="lazyOnload"
          />
        </>
      ) : (
        <span className="text-stone-500 font-medium">Loading Instagram...</span>
      )}
    </div>
  )
}
