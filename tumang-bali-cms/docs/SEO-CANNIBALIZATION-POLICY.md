# SEO cannibalization policy — Tumang Bali (2026-09-24)

**Rule:** one primary URL per search intent. Spokes support sales; they must not fight the money page for head terms.

## Primary owners (do not steal)

| Intent | Primary URL | Spokes may mention, not rank for |
|--------|-------------|-------------------------------|
| cooking class ubud / ubud cooking class | `/balinese-cooking-class-ubud` | All blogs |
| private cooking class ubud | `/private-cooking-class-ubud` | Price blog only for “price” |
| market tour class | `/cooking-class-with-market-tour-ubud` | Morning blog |
| half day | `/half-day-cooking-class-bali` | Duration blog (clock only) |
| beginners | `/bali-cooking-class-for-beginners` | Hands-on / English blogs |
| vegetarian landing | `/vegetarian-cooking-class-ubud` | Veg *guide* blog |
| family landing | `/family-cooking-class-bali` | Families *blog* |
| compare matrix | `/compare-ubud-cooking-classes` | Paon / Casa Luna deep-dives |

## Spoke roles (booking-stage cluster — keep)

| Spoke | Owns only | Must not target |
|-------|-----------|-----------------|
| last-minute | same-day / availability | head “cooking class ubud” |
| how-to-book | process (site / WA / OTA) | single OTA brand queries |
| duration-schedule | clock length / times | morning vs afternoon *choice* |
| allergy-friendly | dairy / nut / shellfish | GF / halal / vegetarian |
| birthday | birthday party | couples / honeymoon / anniversary |
| team-building | corporate / retreat | small-group max-8 product |

## Do not publish (frozen until `cooking class ubud` ≤ pos 15)

- Another `*cooking-class-ubud*` clone without a **new** intent
- Anniversary / gift / English / rainy-day / what’s-included / book-direct blogs (overlap couples, rainy-season, OTA guides, money-page inclusions) — **PR #80 closed for this reason**
- Seminyak / Kuta / Nusa Dua origin clones
- Dish-named cooking-class blogs
- Extra Lobong / Ketut competitor clones

## Checklist before any new commercial blog

1. Is the keyword already in `relatedCookingClassKeywords.ts`? → extend that URL, don’t add a twin.
2. Does the meta title contain bare “Cooking Class Ubud” without a modifier (price, last-minute, allergy…)? → rewrite.
3. Does the first paragraph link to `/balinese-cooking-class-ubud` as the booking page? → required.
4. Will GSC show two URLs for the same query? → pick one primary; 301 or noindex the loser later if needed.

## llms / keyword map

- Head terms → money page only.
- Long-tail → one spoke max.
- Never list the same query twice with two different URLs.
