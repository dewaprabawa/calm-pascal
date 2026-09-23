# GSC clicks & impressions decline — investigation (2026-09-23)

**Property:** `https://tumangbaliclass.com`  
**Question:** Why are clicks and impressions going down every week?  
**Data available:** GSC audit export **2026-06-27 → 2026-09-02** (`docs/GSC-AUDIT-REPORT.md`); live site crawl 2026-09-23.  
**Not available in this environment:** live Search Console API / fresh weekly CSV after Sep 2.

---

## Short answer

The weekly drop is **unlikely to be one bug**. It is mainly **seasonality + weak commercial rankings + index dilution**, with a **live price/snippet mismatch** that is probably suppressing CTR right now.

The Jun–early-Sep audit still showed **growth** (imps +58%, clicks +57% H1→H2). A late-September slide fits **end of Bali high season**, not a sudden crawl collapse.

---

## Ranked causes

### 1. Seasonality (high confidence)

Ubud cooking-class demand tracks visitor volume:

| Period | Typical demand |
|--------|----------------|
| Jul–Aug | Peak (high search + book) |
| Sep | Shoulder — searches fall week over week |
| Nov–Mar | Wet season — fewer first-timers searching “cooking class ubud” |

If GSC “last 7 days” keeps dropping through September, compare **same week last year** or **Sep 2025 vs Sep 2026**, not Jul vs Sep.

### 2. Commercial head terms still on page 2–3 (confirmed)

From the Sep 5 audit — when these rank, CTR is fine; **position** is the bottleneck:

| Query | Imps | Pos |
|-------|------|-----|
| cooking class ubud | 161 | **22** |
| cooking classes ubud | 96 | **25.5** |
| bali cooking class | 84 | **16.4** |
| ubud cooking class | 48 | **28.3** |

~**48% of query-attributed clicks are branded**. When brand / Indonesia demand dips seasonally, total clicks fall hard because non-brand commercial is not in top 10.

### 3. Index dilution — too many near-duplicate cooking-class URLs (confirmed)

Live sitemap (2026-09-23):

- **142** URLs total  
- **55** contain `cooking-class`  
- **40** are `/blog/*cooking-class*` variants  

GSC audit already flagged this (Finding #11). Google spreads authority across lookalike pages; money page `/balinese-cooking-class-ubud` had only **65 imps / 0 clicks** in the audit window while thin variants compete.

Shipping more similar blogs (#71 cluster; open #73 competitor cluster) can **temporarily** increase impressions on long-tail while **hurting** head-term consolidation.

### 4. Blog/recipe CTR leak (confirmed)

Blog = **68% of impressions**, **29% of clicks** (CTR **0.71%**). Top leakers:

| URL | Imps | CTR |
|-----|------|-----|
| `/blog/how-to-make-bumbu-bali` | 5,141 | 0.39% |
| `/blog/dadar-gulung-balinese-dessert-recipe` | 3,484 | 0.43% |
| `/blog/sambal-matah-recipe` | 600 | 0.33% |

If those URLs slip even 1–2 positions, **impressions and clicks both fall** even though the site is still “ranking.”

### 5. Price / SERP inconsistency this month (confirmed live)

Rapid September price story:

1. Regular shared quoted as **IDR 506,370** sitewide  
2. Promo briefly **IDR 350,000** (#64)  
3. Promo now **IDR 300,000** (#72)  

**Live 2026-09-23:**

| Page | Shows |
|------|--------|
| `/` homepage | September Promo **IDR 300.000** + regular **IDR 506.370** |
| `/tours` | Promo **300** |
| **`/balinese-cooking-class-ubud` (money page)** | **Only IDR 506,370** — no promo in meta or body |
| `/book-your-cooking-class` | Regular 506 only |
| Most commercial blogs / `landingContent.ts` | Hardcoded **506,370** |

Google’s snippet for the money page still pushes **“From IDR 506,370”** while ads/social/tours say **300k**. That mismatch lowers trust and CTR.

### 6. Chart artifact (likely for “this week”)

GSC delays ~**2–3 days**. The newest week always looks incomplete. Always compare **complete** weeks (drop last 3 days) before treating a drop as real.

---

## What is *not* the main cause

| Suspect | Evidence |
|---------|----------|
| Site down / not indexed | `/api/seo-content-health` score 100; sitemap healthy; GTM + GA4 live |
| GA4 missing | Fixed #74 — `G-WXH5VLNNKS` in production HTML (affects Analytics, not GSC clicks) |
| Single 404 wave | #67 fixed legacy `.html` 404s; not a weekly decay pattern |
| AI Overviews alone | Not measurable from our export; possible secondary factor only |

---

## What to do next (priority)

### This week (measurement)

1. In GSC → Performance → **filter last 28 days**, group by **Week**, **exclude last 3 days**.  
2. Export **Queries** + **Pages** CSV and drop into `docs/` (or share with the agent) so we can re-audit with current numbers.  
3. Split chart: **Indonesia vs US/AU/UK** and **branded (`tumang`) vs non-branded**.

### This week (fixes)

1. **Align promo price on money pages** — `/balinese-cooking-class-ubud`, booking, private, meta descriptions must use `sharedHeroPriceText()` / promo helpers (partial fix in this PR).  
2. **Stop shipping more thin `*cooking-class-ubud*` blogs** until head terms improve — hold or niche #73 carefully.  
3. **One money URL for “cooking class ubud”** — strengthen internal links from high-imp blogs → `/balinese-cooking-class-ubud` with descriptive anchors.

### Next 2–4 weeks

4. Finish dish cannibalization (dadar / pepes / sambal primary URL).  
5. Re-run meta CTR batch and verify seeds are live in CMS (`seedSeoMetaQuickWins.ts`).  
6. Prune or noindex soft-duplicate cooking-class blogs with &lt;50 imps / 0 clicks.

---

## Success checks (re-measure in GSC)

| Signal | Healthy | Still declining |
|--------|---------|-----------------|
| Complete-week impressions Sep vs Aug | −10 to −25% (seasonal OK) | &gt;−40% week over week |
| `cooking class ubud` position | Improving toward ≤15 | Stuck ≥20 |
| Money page clicks | Rising share of commercial clicks | Still ~0 |
| Blog CTR on bumbu / dadar | ≥1.5% | Still &lt;0.5% |

---

## Fixes shipped (this PR)

| Fix | Detail |
|-----|--------|
| Money page promo meta + body | `/balinese-cooking-class-ubud` uses September promo when active |
| Booking + commercial landing metas | `/book-your-cooking-class`, market-tour, vegetarian, authentic, half-day, private, homepage — promo-aware “from” price |
| Booking UI rates | `normalizeActivityPricing` surfaces promo IDR while September is active |
| Dilution redirects (301) | `/best-bali-cooking-class` → `/best-cooking-classes-bali`; `/blog/more-about-our-cooking-class` → money page; `/blog/rice-field-cooking-class` → rice-terrace blog; `/blog/tumang-vs-ubud-cooking-class` → compare; `/bali-cooking-experience` → money page |
| Sitemap | Redirect targets removed / filtered via `SEO_REDIRECTS` |
| CTR meta seed | Sharper titles/descriptions for bumbu, dadar gulung, sambal matah |

## Appendix — evidence sources

- `docs/GSC-AUDIT-REPORT.md` (2026-09-05)  
- `docs/GSC-ACTION-PLAN.md`  
- Live sitemap + HTML checks 2026-09-23  
- Pricing: `src/lib/pricing.ts` (`PROMO_SHARED_IDR = 300_000`, September only)
