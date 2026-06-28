'use client'

import React from 'react'
import Script from 'next/script'

export default function TikTokEmbed() {
  return (
    <div className="flex justify-center">
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
    </div>
  )
}
