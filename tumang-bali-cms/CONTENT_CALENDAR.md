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

## How to publish a post
Posts live in the Payload `articles` collection (DB-driven), not as repo files.
Two ways to add one:
1. **CMS (recommended ongoing):** Payload admin → Articles → Create, set status
   `published`, fill title/excerpt/content/featuredImage/meta.
2. **Seed script (bulk/initial):** see `seedBlog.ts` (post #1) and
   `seedBlogBatch.ts` (posts #2–#3). Run `npx tsx seedBlogBatch.ts` once against
   the DB. Both are idempotent (skip slugs that already exist).
