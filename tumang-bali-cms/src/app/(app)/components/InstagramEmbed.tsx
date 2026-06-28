'use client'

import React from 'react'
import Script from 'next/script'

export default function InstagramEmbed() {
  return (
    <div className="flex justify-center w-full max-w-[400px] bg-white dark:bg-black rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-800">
      <blockquote 
        className="instagram-media w-full" 
        data-instgrm-permalink="https://www.instagram.com/reel/DC6j8hLSKX6/?utm_source=ig_embed&amp;utm_campaign=loading" 
        data-instgrm-version="14" 
        style={{ background: '#FFF', border: 0, margin: 1, padding: 0, width: '100%', minWidth: '326px' }}
      >
      </blockquote>
      <Script 
        src="//www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
