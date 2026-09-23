# SEO / GEO rank audit — keep articles & keywords (2026-09-23)

**Property:** https://tumangbaliclass.com  
**Strategy:** Rank for head terms **without deleting** the commercial or foreign SEO article cluster. Treat blogs as spokes; money page as hub.

**Live health (pre-deploy):** `/api/seo-content-health` overall **100** — 31 static commercial + 24 foreign routes, all cited in llms, all have `page.tsx`.

---

## Scorecard (ranking lens)

| Area | Score | Notes |
|------|------:|-------|
| Technical / indexability | 90 | Sitemap, redirects, GA4+GTM live; promo body on money page may need ISR refresh |
| Keyword → URL map | 85 | Expanded map; head + pickup → money; spokes kept |
| Money-page authority | 80 | Hub links + geo-cite/faq IDs; still need head-term pos lift in GSC |
| GEO / llms citability | 85 | Paon + hotel pickup cite rows added; compare matrix expanded |
| Content cluster (kept) | 95 | 55 cooking-class URLs retained as intentional long-tail spokes |
| Commercial head-term rank | 45 | GSC (Jun–Sep): `cooking class ubud` ~pos 22 — main growth lever |
| **Composite rank readiness** | **~78** | Strong infra; position still the bottleneck |

---

## Keep (do not delete)

- All `STATIC_COMMERCIAL_SLUGS` blogs (price, couples, families, dietary, OTA guides, market-to-table, etc.)
- All `FOREIGN_SEARCH_SLUGS` trip-planning articles
- Keyword map entries for long-tail (halal, gluten-free, solo, rice terrace, home cooking, …)
- Open competitor cluster PR #73 (Paon / Casa Luna / hands-on / hotel-pickup) — **merge when ready**; map already points pickup to money until then

---

## Fixes in this PR (rank while keeping cluster)

1. **Keyword map** — head terms + hotel pickup → `/balinese-cooking-class-ubud`; fill missing commercial spokes (families, morning, lemongrass, OTA, spice paste, …)
2. **Money page hub** — expanded “Plan your Ubud cooking class” links to more kept articles
3. **GEO speakable** — `#geo-cite-answer` + `#faq` on ClassLanding; speakable CSS selectors aligned with homepage
4. **llms.txt / llms-full.txt** — Paon vs Tumang, hotel pickup → money page, richer Casa Luna/Paon compare
5. **Satellite roles** — guide-2026 + best-in-Ubud softened off exact head-term keyword stuffing; early link to money page
6. **Price accuracy** — guide private rate IDR 650,000 → **633,090**
7. **Freshness** — `SITE_CONTENT_UPDATED` → 2026-09-23

---

## Still open (next)

| Priority | Action | Why |
|----------|--------|-----|
| P0 | Merge [#73](https://github.com/dewaprabawa/calm-pascal/pull/73) competitor articles when CI green | Adds Paon/Casa Luna/hands-on/pickup URLs already researched |
| P0 | GSC: request indexing money page + measure `cooking class ubud` position weekly | Rank is the bottleneck |
| P1 | Mid-body money links from high-imp CMS recipes (bumbu, dadar) | Footer-only is weak for those URLs |
| P1 | After Sep: drop promo from SERP snippets automatically (`isPromoActive`) | Already coded; verify October rates |
| P2 | No new thin `*cooking-class-ubud*` clones until head terms ≤15 | Keep existing; don’t dilute further |

---

## Hub → spoke model (target)

```
/balinese-cooking-class-ubud   ← head “cooking class ubud” + pickup
        ↓ internal links
   /blog/* commercial cluster  ← long-tail + research (KEEP)
   /blog/* foreign trip guides ← TOF funnel (KEEP)
   /compare-ubud-cooking-classes ← Paon / Casa Luna / Ketut
```

---

## Measurement (14–28 days)

1. GSC queries: `cooking class ubud` / `ubud cooking class` average position  
2. Money page clicks + CTR  
3. Blog CTR on bumbu / dadar (meta seeds)  
4. Confirm llms cite rows appear in AI answers (manual ChatGPT / Perplexity spot-check)
