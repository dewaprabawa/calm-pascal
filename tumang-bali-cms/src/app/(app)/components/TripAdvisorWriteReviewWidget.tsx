'use client'

import Script from 'next/script'

export default function TripAdvisorWriteReviewWidget() {
  return (
    <div className="flex justify-center items-center w-full overflow-x-auto">
      <div id="TA_cdswritereviewlgvi797" className="TA_cdswritereviewlgvi">
        <ul id="ddGLxej7V" className="TA_links OyYK20Z5H">
          <li id="mpmL1t" className="pTmsXdCwJ5V6">
            <a target="_blank" href="https://www.tripadvisor.com/" rel="noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                alt="TripAdvisor"
              />
            </a>
          </li>
        </ul>
      </div>
      <Script
        src="https://www.jscache.com/wejs?wtype=cdswritereviewlgvi&uniq=797&locationId=26364507&lang=en_US&lang=en_US&display_version=2"
        strategy="lazyOnload"
        data-loadtrk="true"
      />
    </div>
  )
}
