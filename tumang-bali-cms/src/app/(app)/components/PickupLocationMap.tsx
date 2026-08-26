'use client'

import { useEffect, useRef, useState } from 'react'
import type { LeafletMouseEvent, Map as LeafletMap, Marker } from 'leaflet'
import 'leaflet/dist/leaflet.css'

export type PickupLocationValue = {
  name: string
  lat: number | null
  lng: number | null
  address: string
}

type NominatimHit = {
  display_name: string
  lat: string
  lon: string
  name?: string
}

const UBUD = { lat: -8.5069, lng: 115.2625 }

type LeafletNS = typeof import('leaflet')

function leafletNS(mod: LeafletNS): LeafletNS {
  const wrapped = mod as LeafletNS & { default?: LeafletNS }
  return wrapped.default ?? mod
}

async function searchPlaces(query: string): Promise<NominatimHit[]> {
  const url = new URL('https://nominatim.openstreetmap.org/search')
  url.searchParams.set('format', 'jsonv2')
  url.searchParams.set('q', `${query}, Bali, Indonesia`)
  url.searchParams.set('limit', '6')
  url.searchParams.set('addressdetails', '1')
  url.searchParams.set('countrycodes', 'id')
  const res = await fetch(url.toString(), { headers: { Accept: 'application/json' } })
  if (!res.ok) return []
  return (await res.json()) as NominatimHit[]
}

async function reverseGeocode(lat: number, lng: number): Promise<string> {
  const url = new URL('https://nominatim.openstreetmap.org/reverse')
  url.searchParams.set('format', 'jsonv2')
  url.searchParams.set('lat', String(lat))
  url.searchParams.set('lon', String(lng))
  url.searchParams.set('zoom', '18')
  const res = await fetch(url.toString(), { headers: { Accept: 'application/json' } })
  if (!res.ok) return ''
  const data = (await res.json()) as { display_name?: string }
  return data.display_name || ''
}

export default function PickupLocationMap({
  active,
  value,
  onChange,
}: {
  active: boolean
  value: PickupLocationValue
  onChange: (next: PickupLocationValue) => void
}) {
  const mapElRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const markerRef = useRef<Marker | null>(null)
  const leafletRef = useRef<LeafletNS | null>(null)
  const valueRef = useRef(value)
  const onChangeRef = useRef(onChange)
  valueRef.current = value
  onChangeRef.current = onChange

  const [suggestions, setSuggestions] = useState<NominatimHit[]>([])
  const [searching, setSearching] = useState(false)
  const [openList, setOpenList] = useState(false)

  const applyPin = useRef(
    async (lat: number, lng: number, opts?: { name?: string; address?: string; skipReverse?: boolean }) => {
      const leaflet = leafletRef.current
      const map = mapRef.current
      if (leaflet && map) {
        const L = leaflet
        if (markerRef.current) {
          markerRef.current.setLatLng([lat, lng])
        } else {
          const icon = L.divIcon({
            className: 'pickup-pin',
            html: '<span class="pickup-pin-dot"></span>',
            iconSize: [22, 22],
            iconAnchor: [11, 20],
          })
          markerRef.current = L.marker([lat, lng], { icon, draggable: true }).addTo(map)
          markerRef.current.on('dragend', () => {
            const pos = markerRef.current?.getLatLng()
            if (!pos) return
            void applyPin.current(pos.lat, pos.lng)
          })
        }
        map.setView([lat, lng], Math.max(map.getZoom(), 16))
      }

      const current = valueRef.current
      let address = opts?.address ?? current.address
      if (!opts?.skipReverse && !opts?.address) {
        address = (await reverseGeocode(lat, lng)) || address
      }
      onChangeRef.current({
        name: opts?.name ?? current.name,
        lat,
        lng,
        address,
      })
    },
  )

  useEffect(() => {
    if (!active || !mapElRef.current || mapRef.current) return
    let cancelled = false

    void (async () => {
      const leaflet = leafletNS(await import('leaflet'))
      if (cancelled || !mapElRef.current) return
      leafletRef.current = leaflet
      const L = leaflet

      const map = L.map(mapElRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView([UBUD.lat, UBUD.lng], 13)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      map.on('click', (e: LeafletMouseEvent) => {
        void applyPin.current(e.latlng.lat, e.latlng.lng)
      })

      mapRef.current = map

      const { lat, lng } = valueRef.current
      if (lat != null && lng != null) {
        void applyPin.current(lat, lng, { skipReverse: true })
      }

      window.setTimeout(() => map.invalidateSize(), 80)
    })()

    return () => {
      cancelled = true
    }
  }, [active])

  useEffect(() => {
    if (!active || !mapRef.current) return
    const map = mapRef.current
    const t = window.setTimeout(() => map.invalidateSize(), 160)
    return () => window.clearTimeout(t)
  }, [active])

  useEffect(() => {
    return () => {
      mapRef.current?.remove()
      mapRef.current = null
      markerRef.current = null
    }
  }, [])

  useEffect(() => {
    const query = value.name.trim()
    if (query.length < 3) {
      setSuggestions([])
      return
    }
    const t = window.setTimeout(() => {
      setSearching(true)
      void searchPlaces(query)
        .then((hits) => {
          setSuggestions(hits)
          setOpenList(hits.length > 0)
        })
        .finally(() => setSearching(false))
    }, 450)
    return () => window.clearTimeout(t)
  }, [value.name])

  const applyHit = (hit: NominatimHit) => {
    const lat = Number(hit.lat)
    const lng = Number(hit.lon)
    setOpenList(false)
    setSuggestions([])
    void applyPin.current(lat, lng, {
      name: hit.name || value.name || hit.display_name.split(',')[0],
      address: hit.display_name,
      skipReverse: true,
    })
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300">
        Pickup Location (Hotel/Villa Name)
      </label>
      <div className="relative">
        <input
          type="text"
          required
          autoComplete="off"
          placeholder="e.g. Alila Ubud"
          value={value.name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
          onFocus={() => suggestions.length > 0 && setOpenList(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') e.preventDefault()
          }}
          className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
        />
        {searching && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-stone-400">
            Searching…
          </span>
        )}
        {openList && suggestions.length > 0 && (
          <ul className="absolute z-20 mt-1 w-full max-h-48 overflow-y-auto rounded-xl border border-stone-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg">
            {suggestions.map((hit) => (
              <li key={`${hit.lat}-${hit.lon}-${hit.display_name}`}>
                <button
                  type="button"
                  onClick={() => applyHit(hit)}
                  className="w-full text-left px-3 py-2.5 text-sm text-stone-700 dark:text-stone-200 hover:bg-orange-50 dark:hover:bg-orange-950/40"
                >
                  {hit.display_name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="text-xs text-stone-500 dark:text-stone-400">
        Search your hotel, then click or drag the pin on the map so we can pick you up at the right gate.
      </p>
      <div className="pickup-map-wrap rounded-xl overflow-hidden border border-stone-300 dark:border-zinc-700">
        <div ref={mapElRef} className="pickup-map h-[220px] w-full bg-stone-100 dark:bg-zinc-800" />
      </div>
      {value.lat != null && value.lng != null && (
        <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
          Pin: {value.lat.toFixed(5)}, {value.lng.toFixed(5)}
          {value.address ? ` · ${value.address}` : ''}
        </p>
      )}
    </div>
  )
}
