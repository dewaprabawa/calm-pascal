# Keyword research — sales / CTA SEO–GEO cluster (2026-09-24)

**Goal:** articles that improve **bookings and CTA clicks**, not raw impression volume.  
**Method:** gap analysis vs existing `STATIC_COMMERCIAL_SLUGS` + foreign cluster + GSC commercial intent patterns + competitor booking UX (same-day, cancel 24h, group/private).

---

## Funnel map

| Stage | Intent | Existing coverage | Gap filled this release |
|-------|--------|-------------------|-------------------------|
| Discover | best / compare / Paon | Strong | — |
| Decide | price / worth it / dietary | Strong | Allergy (beyond GF/halal/veg) |
| **Book** | how / when / today / party | Weak | **6 new URLs** |
| Trust | refund | `/refund-policy` | Linked from how-to-book |

---

## Keywords researched → primary URL

| Keyword / phrase | Intent | Primary URL | CTA |
|------------------|--------|-------------|-----|
| last minute cooking class ubud | Urgency | `/blog/last-minute-cooking-class-ubud` | WhatsApp + money |
| same day cooking class ubud | Urgency | same | WhatsApp |
| how to book cooking class ubud | Process | `/blog/how-to-book-cooking-class-ubud` | `/book-your-cooking-class` |
| book cooking class ubud online | Process | same | Book form |
| cooking class ubud duration | Clock | `/blog/cooking-class-ubud-duration-schedule` | Book + half-day |
| cooking class ubud schedule / what time | Clock | same | Book |
| how long cooking class ubud | Clock | same | Book |
| allergy friendly cooking class ubud | Risk | `/blog/allergy-friendly-cooking-class-ubud` | WA + money |
| dairy free cooking class bali | Risk | same | WA |
| birthday cooking class ubud | Occasion | `/blog/birthday-cooking-class-ubud` | Private / shared |
| team building cooking class bali | B2B | `/blog/team-building-cooking-class-bali` | Private |
| corporate cooking class ubud | B2B | same | Private |

Head terms (`cooking class ubud`) remain on `/balinese-cooking-class-ubud` — these spokes link up, they do not steal the money page.

---

## Skipped (cannibalization)

- Extra coast-origin pages (Seminyak / Kuta / Nusa Dua)
- Another “best cooking class” blog
- Dish-named cooking-class blogs
- Lobong / Ketut competitor clones
- Duplicate of CMS `private-group-cooking-class-ubud` → used **team-building** angle instead

---

## Sitemap

New slugs registered in `src/lib/staticCommercialSlugs.ts`.  
`sitemap.ts` spreads `STATIC_COMMERCIAL_SLUGS` → `/blog/{slug}` priority **0.8** automatically.
