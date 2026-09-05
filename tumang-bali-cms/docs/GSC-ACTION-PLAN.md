# GSC Action Plan — tumangbaliclass.com

**Report date:** 2026-09-05  
Based on Search Console Web export (**2026-06-27 → 2026-09-02**).  
Prioritized by impact × effort. Re-check GSC 14–28 days after each batch ships.

---

## Critical / do first (this week)

### 1. Ship & verify CTR meta quick wins on impression leaders
**Impact:** High · **Effort:** Low · **Type:** Quick win  
**Confidence:** Confirmed

Already drafted in `seedSeoMetaQuickWins.ts`. Confirm these are **published live**, then extend to URLs not yet covered:

| Priority | URL | Problem | Action |
|----------|-----|---------|--------|
| P0 | `/blog/how-to-make-bumbu-bali` | 5,141 imps / 0.39% CTR | Ensure meta live; A/B title toward “Bumbu Bali recipe / spice paste” |
| P0 | `/blog/dadar-gulung-balinese-dessert-recipe` | 3,484 / 0.43% | Keep “Dadar Gulung recipe” front; shorten for mobile |
| P0 | `/blog/sambal-matah-recipe` | 600 / 0.33% | Exact-match “Sambal Matah recipe” |
| P1 | `/blog/ayam-betutu-recipe-bali` | 683 / 0.44% | Add to meta seed if missing |
| P1 | `/blog/what-is-the-subak-system-bali` | 540 / 0.19% | Clarify informational intent in title |
| P1 | `/blog/best-time-to-visit-bali-ubud` | 1,046 / 0.76% @ 6.4 | Stronger SERP hook; keep travel intent primary |

**Success metric:** Blog CTR from **0.71% → ≥1.5%** within 28 days on these URLs.

### 2. Fix zero-click pages (≥100 impressions)
**Impact:** High · **Effort:** Low–Medium · **Type:** Quick win

| URL | Imps | Pos | Action |
|-----|------|-----|--------|
| `/blog/pepes-ikan-recipe-bali` | 256 | 8.6 | Differentiate vs `/recipes/pepes-ikan` or 301 → recipe primary |
| `/recipes/tempe-manis` | 191 | 7.0 | Rewrite title/meta; add serving/time in description |
| `/recipes/nasi-kuning` | 191 | 9.4 | Same; resolve overlap with `/recipes/nasi-goreng-atau-nasi-kuning` |
| `/cooking-class-bali` | 119 | 10.1 | Rewrite as commercial hub or redirect to strongest class page |
| `/blog/is-a-bali-cooking-class-worth-it` | 102 | 8.6 | Confirm meta from seed is live; strengthen SERP copy |

---

## High priority (within 2 weeks)

### 3. Resolve dish-level cannibalization
**Impact:** High · **Effort:** Medium · **Type:** Strategic

Pick **one primary URL** per dish:

| Dish | Suggested primary | Secondary treatment |
|------|-------------------|---------------------|
| Dadar gulung | Blog (3.4k imps) **or** recipe card — pick one | Other: canonicalize / “full recipe card” cross-link only |
| Pepes ikan | `/recipes/pepes-ikan` (more clicks) | Blog → guide/story OR merge |
| Sambal matah | Blog (more imps) | Recipe: structured Recipe schema only, distinct title (“recipe card”) |
| Sate | Keep `sate-lilit` blog vs `sate-ayam` recipe as **different dishes** | Do not merge |

Implementation pattern:
1. Primary: full Recipe schema + target keyword in title.
2. Secondary: unique angle (history, class experience, tips) + `rel=canonical` **only if** near-duplicate; otherwise keep both with distinct intent.
3. Internal links: all dish mentions → primary.

### 4. Commercial head-term rank push
**Impact:** High · **Effort:** Medium · **Type:** Strategic

Target queries (position is the bottleneck; CTR already healthy when ranked):

- `cooking class ubud` (pos 22)
- `ubud cooking class` (pos 28)
- `cooking classes ubud` (pos 25.5)
- `bali cooking class` (pos 16)
- `best cooking class ubud` (pos 14, CTR 25.6% — protect)

Actions:
1. Choose **one** money page for “cooking class ubud” (likely homepage **or** dedicated `/balinese-cooking-class-ubud` / market-tour page — not both competing).
2. Consolidate thin variants: `/cooking-class-bali`, `/balinese-cooking-class-ubud`, `/half-day-cooking-class-bali`, `/authentic-balinese-cooking-class` → merge, redirect, or clearly niche.
3. Build internal link hubs from high-impression blogs → money page with descriptive anchors.
4. Double down on winners already ranking well: `/private-cooking-class-ubud` (pos 4.9, 6% CTR), market-tour, vegetarian.

**Success metric:** `cooking class ubud` average position **&lt;15** in 30–45 days; private/vegetarian pages hold or improve top 10.

### 5. International CTR (US / UK / SG)
**Impact:** Medium–High · **Effort:** Low · **Type:** Quick win

For English traveler SERPs:
- Put **price, pickup, group size, location (near Ubud)** in meta descriptions.
- Avoid Indonesia-centric phrasing on global commercial pages.
- Spot-check US SERP for top 5 commercial URLs (manual).

---

## Medium priority (this month)

### 6. Recipe schema & SERP features
**Impact:** Medium · **Effort:** Medium  
Export had **0 Search appearance rows** — separately verify in GSC → Enhancements whether Recipe rich results are valid.

- Ensure recipe pages have complete JSON-LD (`Recipe`: name, image, ingredients, instructions, totalTime).
- Do **not** rely on FAQPage for rich results (deprecated for rich results as of May 2026).

### 7. Prune / noindex soft-duplicate cooking-class blogs
**Impact:** Medium · **Effort:** Medium · **Type:** Maintenance

Many `/blog/*cooking-class*` URLs have &lt;50 imps and 0 clicks. Keep unique high-intent posts (price, worth-it, first-timers, compare); fold or noindex near-duplicates (OTA booking variants with negligible traffic, thin “more about” pages).

### 8. Protect branded demand
**Impact:** Medium · **Effort:** Low  
Branded queries already CTR **~16–39%**. Ensure homepage + GBP NAP consistency for `tumang bali cooking class` / `tumang cooking class`.

---

## Low / backlog

### 9. Informational travel content
`/blog/best-time-to-visit-bali-ubud` and subak content: improve CTR, but measure **assisted conversions** (booking CTA clicks) — these are top-of-funnel, not direct bookers.

### 10. Expand winning dish angles only after cannibalization is fixed
Do not add more recipe/blog pairs for the same dish until primary URLs are clear.

---

## Measurement plan

| Checkpoint | When | What to export from GSC |
|------------|------|-------------------------|
| Baseline | Done | This audit (Jun 27–Sep 2) |
| Meta batch | +14 days | Pages filter: top 10 URLs above; CTR Δ |
| Cannibalization | +28 days | Query → page for dadar/pepes/sambal |
| Commercial | +45 days | Queries containing `cooking class` + `ubud` |
| Geo | +28 days | Countries: US, UK, SG CTR |

**North-star KPIs (next 60 days of Web search):**
1. Overall CTR **≥2.5%** (from 1.67%)
2. Non-branded query CTR **≥1.5%** (from ~0.8%)
3. Clicks **≥600 / comparable 68-day window** (from 386) without relying only on brand
4. At least one of `cooking class ubud` / `ubud cooking class` average position **≤15**

---

## Explicit non-goals (from this export)

- Do not treat Discover or AI Overview shifts as proven (not in export).
- Do not mass-produce additional AI/templated class pages — dilution is already a risk.
- Do not chase FID; use INP for any CWV follow-up (separate from this GSC file).

---

## Implemented in code (2026-09-05)

Shipped on branch `cursor/gsc-performance-audit-bc59`:

| Action | Status | Where |
|--------|--------|--------|
| 1. CTR meta quick wins (P0 + P1 articles) | Seed updated; apply via cron or `npx tsx --env-file=.env seedSeoMetaQuickWins.ts` | `seedSeoMetaQuickWins.ts` (+ SEO maintenance cron) |
| 2. Zero-click pepes blog | **301** → `/recipes/pepes-ikan` | `next.config.ts` |
| 2. Zero-click `/cooking-class-bali` | **301** → `/balinese-cooking-class-ubud` (money page) | `next.config.ts` |
| 2. Recipe CTR titles (tempe manis, nasi kuning, etc.) | Code overrides in `generateMetadata` | `src/app/(app)/recipes/[slug]/page.tsx` |
| 2. Static worth-it SERP copy | Meta rewritten | `salesGeoCommercialContent.tsx` |
| 3. Dish cannibalization (pepes) | Blog → recipe primary via redirect; dadar/sambal recipe titles marked “recipe card” | redirects + recipe overrides |
| 4. Commercial head-term money page | `/balinese-cooking-class-ubud` meta sharpened for “cooking class ubud” + price/pickup/max 8 | page metadata |
| 5. International CTR | Price, pickup, group size in commercial metas (private, vegetarian, market tour, half-day, authentic) | landing page metadata |

**Still manual / post-deploy:**
- Run or wait for SEO maintenance cron so CMS article metas go live.
- Re-export GSC in 14 days to validate CTR lift.
- Internal-link hub pass from top blogs → `/balinese-cooking-class-ubud` (not fully automated here).
- GBP NAP check for branded queries (off-site).
