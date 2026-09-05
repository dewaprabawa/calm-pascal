# Google Search Console Performance Audit — tumangbaliclass.com

**Scope:** Search Console Web performance export (Last 3 months filter; chart covers **2026-06-27 → 2026-09-02**, 68 days)  
**Property:** `https://tumangbaliclass.com`  
**Search type:** Web  
**Search appearance rows:** none in export  
**Score confidence:** High for performance metrics (export-backed); Low for indexing/CWV/manual actions (not in this file)  
**Overall organic health:** **Needs Improvement (58/100)** — impressions are growing, but CTR and commercial head-term positions underperform; traffic is heavily branded + recipe-adjacent.

---

## A) Audit Summary

| Metric | Value |
|--------|-------|
| Total clicks | **386** |
| Total impressions | **23,166** |
| Overall CTR | **1.67%** |
| Avg position (impression-weighted) | **8.9** |
| Pages in export | 90 |
| Queries in export | 996 |
| Devices | Mobile 57% of clicks / 65% of imps |

### Top 3 issues
1. **Recipe/blog content wins impressions, loses clicks** — blog CTR **0.71%** vs homepage **6.3%**; several pages sit at pos ~8–10 with &lt;0.5% CTR.
2. **Commercial head terms rank too deep** — `cooking class ubud` pos **22**, `ubud cooking class` pos **28**, `bali cooking class` pos **16**; clicks mostly from branded or long-tail.
3. **Keyword cannibalization** — blog + recipe pairs (dadar gulung, pepes ikan, sambal matah) split impressions at similar positions.

### Top 3 opportunities
1. **CTR lift on top impression pages** (bumbu bali, dadar gulung) — moving from ~0.4% → 2% CTR ≈ **+140 clicks / period** on those two URLs alone.
2. **Consolidate / differentiate recipe pairs** and retarget titles for dish queries already in striking distance (pos 4–15).
3. **Push commercial landings** (`private-cooking-class-ubud`, market-tour, vegetarian) into top 5 for Ubud cooking-class intent; they already convert impressions better when visible.

### Half-period trend
| Window | Clicks | Impressions | CTR | Pos |
|--------|--------|-------------|-----|-----|
| H1 (Jun 27–Jul 30) | 150 | 8,982 | 1.67% | 8.9 |
| H2 (Jul 31–Sep 2) | 236 | 14,184 | 1.66% | 9.0 |

Impressions **+58%**, clicks **+57%** — growth is real; CTR flat means the new visibility is not converting better.

---

## B) Findings Table

| # | Severity | Confidence | Finding | Evidence | Impact | Fix |
|---|----------|------------|---------|----------|--------|-----|
| 1 | Warning | Confirmed | Blog cluster CTR is critically low | Blog: 49 pages, 15,837 imps, **0.71% CTR**; top: `/blog/how-to-make-bumbu-bali` 5,141 imps / 0.39% CTR | Wastes largest visibility pool | Rewrite titles/meta + first paragraph for dish intent; add clear recipe rich snippet eligibility signals (see #6) |
| 2 | Warning | Confirmed | Recipe pages underperform vs position | `/recipes/pepes-ikan` 699 imps / 0.86% CTR @ 9.2; `/recipes/sambal-matah` 376 / 0.27% @ 10.6; `/recipes/sate-ayam` 361 / 0.28% @ 9.5 | Mid-page rankings without clicks | Unique H1/title vs blog twin; tighten title to exact dish + “recipe” |
| 3 | Warning | Confirmed | Commercial head terms buried page 2–3 | `cooking class ubud` 161 imps @ **22.0**; `ubud cooking class` 48 @ **28.3**; `cooking classes ubud` 96 @ **25.5** | Blocks booking demand | Internal links + unique commercial pages; strengthen homepage/service pages for “cooking class ubud” |
| 4 | Warning | Confirmed | Brand dependence | Branded queries: **48% of query-attributed clicks** (78/162) from 5 queries; non-branded CTR **0.79%** | Growth capped when brand awareness stalls | Prioritize non-brand commercial + dish CTR work |
| 5 | Warning | Confirmed | Blog/recipe cannibalization | Dadar gulung: blog 3,484 imps + recipe 464; Pepes: recipe 699 + blog 256 (0 clicks); Sambal: blog 600 + recipe 376 | Dilutes ranking signals | Pick one primary URL per dish; canonicalize or clearly differentiate (guide vs card) |
| 6 | Warning | Confirmed | Zero-click pages with meaningful impressions | `/blog/pepes-ikan-recipe-bali` 256 imps / 0 clicks; `/recipes/tempe-manis` 191; `/recipes/nasi-kuning` 191; `/cooking-class-bali` 119; `/blog/is-a-bali-cooking-class-worth-it` 102 | Dead SERP real estate | Meta rewrite or merge/redirect thin duplicates |
| 7 | Warning | Confirmed | US/UK/SG CTR far below ID/AU | US 3,169 imps / **0.7%** CTR; UK 1.1%; SG 1.0% vs Indonesia **3.3%**, Australia **2.5%** | International travelers see listings but don’t click | English title/meta tone for traveler intent; clearer value props (price, pickup, group size) |
| 8 | Info | Confirmed | Mobile dominates impressions | Mobile 15,050 imps (CTR 1.46%) vs Desktop 7,908 (CTR 2.01%) | Mobile SERP snippet quality matters more | Optimize titles ≤ ~55 chars; ensure mobile CWV (not in this export) |
| 9 | Info | Confirmed | Homepage carries brand + mixed intent | `/` 154 clicks / 2,319 imps / 6.6% CTR @ **11.8**; `/id` 32 / 623 / 5.1% @ 5.2 | Homepage ranking mid-page still CTR-strong due to brand | Keep brand strength; don’t over-optimize homepage for every dish query |
| 10 | Pass | Confirmed | Impression growth trajectory | Weekly imps from ~53 (W26) → 2k–3.6k (W29–W35) | Site is gaining index coverage / topical reach | Protect with quality; avoid thin scaled pages |
| 11 | Warning | Likely | Over-proliferation of near-duplicate commercial URLs | 30+ URLs matching “cooking-class” with many &lt;100 imps and 0 clicks | Crawl/index dilution; confusing internal competition | Audit thin commercial/blog variants; consolidate or noindex soft duplicates |
| 12 | Info | Confirmed | Search appearance empty | Export `Search appearance` = 0 rows | No rich-result performance visible in this pull | Verify Recipe/LocalBusiness rich results in GSC Enhancements separately |
| 13 | Info | Hypothesis | Early Jun CTR spike was small-sample | W26: 16 clicks / 53 imps / 30% CTR @ pos 3 | Not a regression baseline | Use Jul–Aug as true baseline |

---

## C) Segment Deep Dive

### 1. Branded vs non-branded (query table)

| Segment | Queries | Clicks | Impressions | CTR |
|---------|---------|--------|-------------|-----|
| Branded (`tumang`, `warung tumang`) | 5 | 78 | 494 | **15.8%** |
| Non-branded | 991 | 84 | 10,651 | **0.79%** |

Note: Query-dimension clicks (**162**) are lower than chart totals (**386**) because GSC anonymizes many queries — expected.

### 2. Non-branded by average position

| Position | Queries | Clicks | Impressions | CTR |
|----------|---------|--------|-------------|-----|
| 1–3 | 141 | 1 | 240 | 0.42% |
| 3–5 | 68 | 2 | 247 | 0.81% |
| 5–10 | 379 | 44 | 7,141 | **0.62%** |
| 10–20 | 269 | 27 | 2,326 | 1.16% |
| 20–50 | 112 | 10 | 668 | 1.50% |

Largest pool is **positions 5–10** with very low CTR — classic title/snippet mismatch or weak SERP appeal vs recipe sites / OTA aggregators.

### 3. Page type performance

| Type | Pages | Clicks | Impressions | CTR |
|------|-------|--------|-------------|-----|
| Homepage (`/`, `/id`, locales) | 8 | 186 | 2,958 | **6.29%** |
| Blog | 49 | 113 | 15,837 | **0.71%** |
| Commercial landings | 14 | 50 | 1,819 | **2.75%** |
| Recipes | 16 | 46 | 4,101 | **1.12%** |
| Other | 3 | 2 | 225 | 0.89% |

Blog = **68% of impressions**, **29% of clicks**. That imbalance is the core GSC problem.

### 4. Devices

| Device | Clicks | Impressions | CTR | Position |
|--------|--------|-------------|-----|----------|
| Mobile | 219 | 15,050 | 1.46% | 8.0 |
| Desktop | 159 | 7,908 | 2.01% | 10.7 |
| Tablet | 8 | 208 | 3.85% | 6.5 |

### 5. Top countries

| Country | Clicks | Impressions | CTR | Position |
|---------|--------|-------------|-----|----------|
| Indonesia | 192 | 5,812 | 3.3% | 8.9 |
| Australia | 46 | 1,801 | 2.5% | 8.9 |
| United States | 21 | 3,169 | **0.7%** | 9.5 |
| Singapore | 12 | 1,231 | 1.0% | 8.3 |
| United Kingdom | 12 | 1,147 | 1.1% | 9.7 |
| France | 12 | 301 | 4.0% | 8.9 |

Indonesia + Australia drive most clicks. US is #3 impressions but weak CTR — traveler/expat audience not clicking recipe or class listings as shown.

---

## D) Highest-leverage URL watchlist

### Impression leaders (CTR problem)

| URL | Clicks | Imps | CTR | Pos |
|-----|--------|------|-----|-----|
| `/blog/how-to-make-bumbu-bali` | 20 | 5,141 | 0.39% | 8.1 |
| `/blog/dadar-gulung-balinese-dessert-recipe` | 15 | 3,484 | 0.43% | 8.9 |
| `/` | 154 | 2,319 | 6.64% | 11.8 |
| `/blog/best-time-to-visit-bali-ubud` | 8 | 1,046 | 0.76% | 6.4 |
| `/recipes/pepes-ikan` | 6 | 699 | 0.86% | 9.2 |
| `/blog/ayam-betutu-recipe-bali` | 3 | 683 | 0.44% | 9.6 |
| `/blog/cooking-class-bali-faqs` | 5 | 660 | 0.76% | 7.1 |
| `/blog/sambal-matah-recipe` | 2 | 600 | 0.33% | 8.6 |
| `/blog/what-is-the-subak-system-bali` | 1 | 540 | 0.19% | 8.9 |

### Commercial winners (protect & scale)

| URL | Clicks | Imps | CTR | Pos |
|-----|--------|------|-----|-----|
| `/private-cooking-class-ubud` | 14 | 234 | **6.0%** | **4.9** |
| `/best-cooking-classes-bali` | 8 | 156 | 5.1% | 9.2 |
| `/vegetarian-cooking-class-ubud` | 9 | 321 | 2.8% | 9.5 |
| `/cooking-class-with-market-tour-ubud` | 8 | 355 | 2.3% | 6.4 |
| `/compare-ubud-cooking-classes` | 4 | 83 | 4.8% | 9.2 |

### Commercial underperformers (fix or consolidate)

| URL | Clicks | Imps | CTR | Pos |
|-----|--------|------|-----|-----|
| `/cooking-class-bali` | 0 | 119 | 0% | 10.1 |
| `/balinese-cooking-class-ubud` | 0 | 65 | 0% | 14.2 |
| `/half-day-cooking-class-bali` | 0 | 69 | 0% | 11.6 |
| `/authentic-balinese-cooking-class` | 1 | 158 | 0.63% | 6.8 |
| `/blog/is-a-bali-cooking-class-worth-it` | 0 | 102 | 0% | 8.6 |
| `/blog/ubud-cooking-class-price` | 0 | 48 | 0% | 9.2 |

---

## E) Query opportunities (striking distance)

Non-branded queries with **≥50 impressions** and **position 4–15**:

| Query | Clicks | Imps | CTR | Pos |
|-------|--------|------|-----|-----|
| dadar gulung | 5 | 2,026 | 0.25% | 9.4 |
| bumbu bali | 1 | 373 | 0.27% | 8.9 |
| bumbu sauce | 0 | 362 | 0% | 9.6 |
| ayam betutu | 3 | 305 | 0.98% | 10.1 |
| dadar gulung recipe | 3 | 258 | 1.16% | 8.6 |
| pepes ikan | 2 | 255 | 0.78% | 10.1 |
| sambal matah | 0 | 241 | 0% | 9.7 |
| sate ayam | 0 | 238 | 0% | 9.6 |
| balinese spice paste | 0 | 178 | 0% | 9.5 |
| sambal matah recipe | 2 | 122 | 1.64% | 9.2 |
| balinese recipes | 8 | 115 | **7.0%** | 8.8 |
| tempe manis | 0 | 101 | 0% | 6.8 |
| ubud morning market | 4 | 55 | 7.3% | 5.2 |

**Commercial head terms needing rank lift (not just CTR):**

| Query | Clicks | Imps | CTR | Pos |
|-------|--------|------|-----|-----|
| cooking class ubud | 5 | 161 | 3.1% | **22.0** |
| cooking classes ubud | 0 | 96 | 0% | **25.5** |
| bali cooking class | 1 | 84 | 1.2% | **16.4** |
| ubud cooking class | 1 | 48 | 2.1% | **28.3** |
| best cooking class ubud | 10 | 39 | **25.6%** | 14.2 |
| private cooking class ubud | 6 | 25 | **24.0%** | 16.1 |

When these commercial queries surface, CTR is strong — **position is the bottleneck**, not the snippet.

---

## F) Estimated CTR upside (directional)

If the top underperforming content URLs reach **2% CTR** (still conservative for pos ~8–9):

| URL | Current clicks | @2% CTR | Lift |
|-----|----------------|---------|------|
| how-to-make-bumbu-bali | 20 | ~103 | **+83** |
| dadar-gulung blog | 15 | ~70 | **+55** |
| best-time-to-visit-bali-ubud | 8 | ~21 | +13 |
| ayam-betutu blog | 3 | ~14 | +11 |
| sambal-matah blog | 2 | ~12 | +10 |
| subak blog | 1 | ~11 | +10 |

Combined ~**+180 clicks / ~2 months** from metadata + snippet work alone — before commercial rank gains.

---

## G) Environment / data limitations

- Export is **Performance → Web** only; no Coverage, Page Experience, Links, Manual Actions, or AI Performance report.
- Query totals ≠ chart totals (GSC privacy filtering).
- No page×query crossover table in this export — cannibalization inferred from URL paths + query themes.
- `seedSeoMetaQuickWins.ts` already targets several of these URLs; this audit should validate whether those metas are live and re-measure in 14–28 days.

---

## H) Score breakdown (GSC performance lens)

| Category | Score | Notes |
|----------|-------|-------|
| Visibility / impressions growth | 75 | Strong upward trend |
| CTR efficiency | 40 | Blog/recipe CTR failure |
| Commercial capture | 45 | Head terms page 2–3; long-tail CTR good when ranked |
| Brand strength | 80 | Branded queries dominate clicks efficiently |
| International CTR | 50 | ID/AU OK; US/UK/SG weak |
| Content architecture | 45 | Cannibalization + thin commercial variants |
| **Composite** | **~58** | Needs Improvement |
