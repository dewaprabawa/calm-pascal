# SEO/GEO CTR audit — what to do to improve clicks (2026-09-23)

**Goal:** more organic **clicks** (not only impressions).  
**Property:** https://tumangbaliclass.com  
**Evidence:** GSC export Jun 27–Sep 2 2026 (`GSC-AUDIT-REPORT.md`) + live SERP titles checked 2026-09-23.

Live health score: **100** (infra OK). Click problem is **snippet CTR + position**, not crawl health.

---

## Short answer

| Lever | Why clicks stay low | What to do |
|-------|---------------------|------------|
| **1. Blog/recipe SERP titles** | Blog CTR **0.71%**; bumbu 5.1k imps @ **0.39%** | Apply CTR meta seeds to CMS (not live yet) |
| **2. Money-page title truncated** | Title ends with `…` in SERP | Shorten absolute title ≤60 chars |
| **3. Head terms page 2–3** | `cooking class ubud` ~pos **22** | Keep hub strategy; wait + internal links (already shipping) |
| **4. Weak international CTR** | US/UK/SG ~0.7–1.1% | Put price + pickup + max 8 in every commercial meta |
| **5. Dish cannibalization** | Blog + recipe split dadar/sambal/pepes | Keep both; distinct “recipe” vs “guide” titles |

Biggest near-term click lift: **fix titles/metas on the pages that already get impressions**.

---

## Where clicks are leaking (GSC)

### Impression leaders with terrible CTR

| URL | Imps | CTR | Live title problem (2026-09-23) |
|-----|------|-----|----------------------------------|
| `/blog/how-to-make-bumbu-bali` | 5,141 | 0.39% | Still “How to Make Bumbu Bali — Learn It in Our Ubud…” — **seed not applied** |
| `/blog/dadar-gulung-…` | 3,484 | 0.43% | Still old “Coconut Pancake” title — **seed not applied** |
| `/blog/sambal-matah-recipe` | 600 | 0.33% | Seed not applied |
| `/blog/ayam-betutu-recipe-bali` | 683 | 0.44% | Partially OK; can sharpen |
| `/blog/what-is-the-subak-system-bali` | 540 | 0.19% | Vague “Understanding Bali…” opener |
| `/` | 2,319 | **6.6%** | Strong — protect |
| `/private-cooking-class-ubud` | 234 | **6.0%** | Good when visible |

If bumbu + dadar alone move to **2% CTR** → roughly **+140 clicks / ~2 months**.

### Commercial

Money page title live: `Cooking Class Ubud — Market Tour, 10+ Dishes,… | Tumang Bali` — **ellipsis kills CTR**.  
Description already shows September promo — good.

---

## Action plan (priority)

### P0 — This week (highest click ROI)

1. **Run CMS meta seed in production**  
   Trigger SEO maintenance / `seedSeoMetaQuickWins` (cron or `POST /api/seed-seo-articles` with secret).  
   Confirm live titles become (≤46 chars + ` | Tumang Bali`):
   - `Bumbu Bali Recipe — Homemade Spice Paste`
   - `Dadar Gulung Recipe — Easy Pandan Crepe`
   - `Sambal Matah Recipe — Chili Salsa (10 Min)`

2. **Shorten money-page SERP title** (no `…`)  
   Target ≤46 chars before ` | Tumang Bali`.

3. **GSC → Request indexing** on money page + the 3 recipe blogs after meta update.

### P1 — Next 2 weeks

4. Sharpen remaining high-imp metas: subak, best-time, ayam betutu, tempe manis, nasi kuning.  
5. Commercial metas: always lead with **price + free pickup + max 8** (US/UK/SG CTR).  
6. Keep dish pairs differentiated: blog = story/how-to; `/recipes/*` = “recipe card”.

### P2 — Ongoing (more clicks via better rank)

7. Do **not** add more thin `*cooking-class-ubud*` blogs.  
8. Watch `cooking class ubud` position weekly — CTR is already OK when ranked; **position** unlocks commercial clicks.  
9. GEO: keep llms cite rows (already strong) — helps AI referrals, not classic blue-link CTR.

---

## What NOT to chase for clicks

- More blog volume without better titles  
- Changing brand homepage (already 6%+ CTR)  
- Expecting GA4 alone to raise GSC clicks (different funnel)

---

## Success metrics (14–28 days)

| KPI | Baseline | Target |
|-----|----------|--------|
| Overall CTR | 1.67% | ≥2.5% |
| Blog CTR | 0.71% | ≥1.5% |
| Bumbu blog CTR | 0.39% | ≥1.5% |
| Money page clicks | ~0 in old window | Rising share of commercial clicks |
| `cooking class ubud` pos | ~22 | ≤15 |

---

## Code / ops checklist in this PR

- [x] CTR audit doc (this file)
- [x] Money-page title shortened for SERP
- [x] Meta seed titles tightened (numbers, “Easy”, dish-first)
- [ ] **You:** run production meta seed + confirm titles in view-source
