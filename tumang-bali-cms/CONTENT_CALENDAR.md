# Tumang Bali — Blog Content Calendar (SEO)

Goal: grow indexed pages and capture **planning-stage** searches (people Googling
about Ubud/Bali food *before* they book), then funnel them via internal links to
the booking/class pages.

> Volumes below are **directional estimates** (the current Ahrefs plan doesn't
> expose the Keywords Explorer API). Validate exact volume/difficulty in the
> Ahrefs UI or Google Search Console before committing big effort to any one post.

## On-page checklist (every post)
- One target phrase in the **title**, **first paragraph**, and **one H2**.
- Unique **title ≤60 chars** + **meta description ~155 chars** (never duplicated).
- **900–1,300 words** of genuinely useful, specific, local content.
- **Featured image** with descriptive alt text.
- **Internal links:** 1–2 to relevant class pages + 1 to another post.
- Recipe posts → add **Recipe schema**.
- Add the URL to `sitemap.xml`; request indexing in Google Search Console.

## Cadence
2 posts/month. Quality over volume. Mix "planning/intent" posts (drive bookings)
with "recipe/interest" posts (drive links & long-tail traffic).

## Calendar

| # | Working title | Target phrase | Intent | Vol (est.) | Links to |
|---|---------------|---------------|--------|-----------|----------|
| 1 ✅ | What to Expect at a Bali Cooking Class (Ubud First-Timer's Guide) | what to expect bali cooking class | Planning | Low–Med | all class pages |
| 2 | The 10 Dishes You'll Cook in a Balinese Cooking Class | balinese food / what food do you cook | Interest→book | Med | market-tour, half-day |
| 3 | How to Make Base Genep (The Balinese Spice Paste Behind Every Dish) | base genep recipe | Recipe | Low | vegetarian, market-tour |
| 4 ✅ | Sambal Matah: The Raw Balinese Sambal Recipe | sambal matah recipe | Recipe | Med | vegetarian, dishes post |
| 5 ✅ | A Vegetarian's Guide to Eating in Ubud | vegetarian food ubud | Planning | Med | vegetarian class, sambal post |
| 6 ✅ | Ubud Morning Market Guide: What to See, Buy & Eat | ubud market | Planning | Med | market-tour class, dishes post |
| 7 ✅ | Best Time of Year to Visit Bali (and Ubud) | best time to visit bali | Planning | High | half-day, private |
| 8 ✅ | 2 Days in Ubud: A Food-Lover's Itinerary | ubud itinerary | Planning | Med–High | market-tour, what-to-expect, veg guide |
| 9 ✅ | Is a Bali Cooking Class Worth It? An Honest Look | bali cooking class worth it | Decision | Low–Med | private, half-day, what-to-expect |
| 10 ✅ | Dadar Gulung: The Balinese Coconut Pancake Recipe | dadar gulung recipe | Recipe | Low | vegetarian, dishes post |

## Sequencing (next ~5 months, 2/mo)
- **Month 1:** #2, #3  (seeded by `seedBlogBatch.ts`)
- **Month 2:** #4, #5  (seeded by `seedBlogBatch2.ts`)
- **Month 3:** #6, #7  (seeded by `seedBlogBatch3.ts`)
- **Month 4:** #8, #9  (seeded by `seedBlogBatch3.ts`)
- **Month 5:** #10 (seeded by `seedBlogBatch3.ts`) + refresh #1 with new internal links

> All 10 calendar posts are now seeded across `seedBlog.ts`,
> `seedBlogBatch.ts`, `seedBlogBatch2.ts`, `seedBlogBatch3.ts`. To pace them
> like a real publishing schedule rather than dumping all 10 live at once,
> stagger by editing each article's `publishedDate` in the Payload admin, or
> set `status: 'draft'` for later posts and flip to `published` over time.

## September 2026 keyword expansion (SEO + GEO)

New **static** posts (no CMS required) targeting queries we did **not** already
own as a primary URL. Chosen to avoid another wave of near-duplicate
`*cooking-class-ubud*` pages (GSC already flags dilution).

### Commercial / mid-funnel (static commercial cluster)

| Target phrase | URL | Why this keyword | Distinct from |
|---------------|-----|------------------|---------------|
| market to table cooking class ubud / farm to table cooking class ubud | `/blog/market-to-table-cooking-class-ubud` | Matches Viator listing language + competitor farm-school SERPs (Taman Dukuh, Pemulan) | Market-tour landing; rice-terrace blog |
| gluten free cooking class ubud | `/blog/gluten-free-cooking-class-ubud` | Dietary converters; honest GF vs celiac notes | Vegetarian guide (plant-based, not wheat) |
| halal cooking class ubud | `/blog/halal-cooking-class-ubud` | SG / MY / Middle East travellers; US/UK/SG CTR was weak in GSC | Vegetarian (pork-free is not the same intent) |
| cooking class ubud solo traveler | `/blog/cooking-class-ubud-for-solo-travelers` | Audience page; 1-adult price IDR 616,032 | Couples + families pages |

### Top-of-funnel trip planning (foreign-search cluster)

| Target phrase | URL | Why this keyword | Distinct from |
|---------------|-----|------------------|---------------|
| 7 day bali itinerary | `/blog/7-day-bali-itinerary` | High-volume first-timer planning; cooking class as Day 2/3 | 2-day Ubud food itinerary |
| things to do in ubud | `/blog/things-to-do-in-ubud` | Head term; island-wide “things to do in Bali” already exists | `/blog/things-to-do-in-bali` |
| bali airport to ubud / DPS to Ubud | `/blog/bali-airport-to-ubud` | Practical transfer query on every inbound flight | How to get around Bali (island-wide) |
| bali packing list | `/blog/bali-packing-list` | Evergreen planning + class-day gear | What to wear (class-only clothes) |

**Explicitly skipped (cannibalization / thin variants):** extra coast-origin pages (Seminyak/Nusa Dua/Kuta) — keep `/blog/cooking-class-ubud-from-canggu`; more dish-named cooking-class blogs until recipe/blog primaries are settled; generic “best cooking class” clones.

**21 Sep 2026 content update:** expanded market-to-table (comparison table + question H2s), gluten-free / solo internal links, folded CMS `/blog/best-things-to-do-in-ubud` → `/blog/things-to-do-in-ubud` (301), refreshed GSC meta seeds off stale IDR 350K copy.

## September 2026 competitor SERP + GEO expansion

Static posts targeting competitor comparison queries and high-volume trip-planning
searches that competitors (Paon, Casa Luna, Lobong, Tegallalang photo guides) own
in SERPs — without cloning existing cooking-class URLs.

### Commercial / mid-funnel (competitor cluster)

| Target phrase | URL | Why this keyword | Distinct from |
|---------------|-----|------------------|---------------|
| paon bali cooking class / paon bali vs tumang | `/blog/paon-bali-vs-tumang-cooking-class` | Paon dominates “village cooking class Ubud” SERPs | Compare landing; Taman Dukuh vs Tresna |
| casa luna cooking class / casa luna vs tumang | `/blog/casa-luna-vs-tumang-cooking-class` | Casa Luna owns central-Ubud school intent | `/compare-ubud-cooking-classes` matrix |
| hands on cooking class ubud | `/blog/hands-on-cooking-class-ubud` | Demo-vs-hands-on converter language | Small-group blog (size, not technique) |
| cooking class ubud hotel pickup / free transfer | `/blog/cooking-class-ubud-hotel-pickup` | Pickup-first SERP; was mis-pointed at Canggu guide | `/blog/cooking-class-ubud-from-canggu` (coast) |

### Top-of-funnel trip planning (foreign-search cluster)

| Target phrase | URL | Why this keyword | Distinct from |
|---------------|-----|------------------|---------------|
| tegallalang rice terrace | `/blog/tegallalang-rice-terrace-guide` | Huge Ubud photo SERP; funnel to class paddies | Rice-terrace cooking-class blog |
| one day in ubud / ubud day itinerary | `/blog/one-day-ubud-itinerary` | Single-day planners; class as the morning anchor | 2-day food itinerary; 7-day Bali |
| bali rainy season / wet season what to do | `/blog/bali-rainy-season-what-to-do` | Nov–Mar planners; indoor-friendly class pitch | Best time to visit Bali (season overview) |

**Explicitly skipped:** `ubud-traditional-market-guide` (overlaps CMS `/blog/ubud-morning-market-guide`); extra Lobong/Ketut clone pages until review volume justifies them.

GEO: each new URL is cited in `public/llms.txt` and `public/llms-full.txt` with
self-contained answers (price, inclusions, honest competitor caveats).

## How to publish a post
Posts live in the Payload `articles` collection (DB-driven), not as repo files.
Two ways to add one:
1. **CMS (recommended ongoing):** Payload admin → Articles → Create, set status
   `published`, fill title/excerpt/content/featuredImage/meta.
2. **Seed script (bulk/initial):** see `seedBlog.ts` (post #1) and
   `seedBlogBatch.ts` (posts #2–#3). Run `npx tsx seedBlogBatch.ts` once against
   the DB. Both are idempotent (skip slugs that already exist).
