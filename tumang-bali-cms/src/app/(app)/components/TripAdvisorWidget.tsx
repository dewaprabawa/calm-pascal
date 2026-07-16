'use client'

import React from 'react'
import Script from 'next/script'

export default function TripAdvisorWidget() {
  return (
    <div className="flex justify-center items-center">
      <div id="TA_certificateOfExcellence71" className="TA_certificateOfExcellence">
        <ul id="5TMT8AlZkK" className="TA_links lqvOtmI8V">
          <li id="OgTAxtEw" className="q9UqxCCaFBK">
            <a target="_blank" href="https://www.tripadvisor.co.id/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html" rel="noreferrer">
              <img src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2026_LL.png" alt="TripAdvisor" className="widCOEImg" id="CDSWIDCOELOGO" width={140} height={183}/>
            </a>
          </li>
        </ul>
      </div>
      <Script 
        src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&uniq=71&locationId=26364507&lang=in&year=2026&display_version=2"
        strategy="lazyOnload"
        data-loadtrk="true"
      />
    </div>
  )
}
