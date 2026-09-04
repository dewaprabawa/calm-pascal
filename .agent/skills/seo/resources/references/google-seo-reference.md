<!-- Updated: 2026-09-04 -->
# Google SEO Quick Reference (September 2026)

Concise reference guide for subagents. Summarizes key Google Search concepts,
requirements, and best practices. Not a reproduction of Google's documentation —
see Official Documentation Links at the bottom for full details.

> **Careful-use note:** Treat algorithm-impact claims from industry reports as
> directional unless confirmed on Google Search Central / the Search Status
> Dashboard. Separate **Discover** effects from **Search** ranking effects.

---

## How Google Search Works

Google Search operates in three stages: **Crawling** (Googlebot discovers pages by following links and reading sitemaps), **Indexing** (Google processes and stores page content, metadata, and signals in its search index), and **Serving** (when a user searches, Google's algorithms rank indexed pages by relevance, quality, and usability to return the most useful results). Pages must be crawlable and indexable to appear in search results.

---

## Google Search Essentials

Formerly known as "Webmaster Guidelines." Key requirements:

### Technical Requirements
- Pages must be accessible to Googlebot (not blocked by robots.txt or noindex)
- Pages must return HTTP 200 status for indexable content
- Content must be in a format Google can process (HTML preferred, JS-rendered content supported but slower)
- Pages must be served over HTTPS

### Spam Policies
- No cloaking (showing different content to Googlebot vs users)
- No doorway pages (pages created solely to rank for specific queries)
- No hidden text or links
- No keyword stuffing
- No link spam (buying links, excessive link exchanges)
- No scraped or auto-generated content without added value
- No sneaky redirects
- No thin affiliate pages
- No **scaled content abuse** (mass low-value / commodity pages, including bulk AI spam)
- No **site reputation abuse**
- No **AI search citation manipulation** — buying, fabricating, or otherwise manipulating citations to influence AI Overviews / AI Mode answers is spam (confirmed extension of spam policies to AI search features, 2026)

### Key Best Practices
- Create content for users, not search engines
- Prefer original insight, first-party data, and demonstrated experience over aggregated/templated copy
- Make your site easy to navigate with a clear hierarchy
- Use descriptive, unique titles and meta descriptions per page
- Use heading tags (H1-H6) to structure content logically
- Optimize images with alt text and appropriate file sizes
- Ensure mobile-friendly responsive design
- Improve page load speed (Core Web Vitals)
- Submit an XML sitemap to Google Search Console
- Use structured data (JSON-LD) to help Google understand content (not only for visual rich results)

---

## 2026 Algorithm & Policy Timeline (Apply Carefully)

### February 2026 Discover Core Update
- **Dates:** Announced/rolled out ~February 5, 2026; completed ~February 27, 2026
- **Scope:** First core update specifically targeting **Google Discover** (separate from general Search)
- **Focus:** Usefulness of Discover surfaces; freshness, originality, engagement; personalized relevance
- **Impact pattern:** Timely, engaging, authoritative content tended to gain Discover traffic; repetitive/generic content lost visibility
- **Agent rule:** Do **not** treat Discover traffic shifts as proof of organic Search ranking change

### March 2026 Spam Update
- **Dates:** March 24–25, 2026 (completed in under ~20 hours)
- **Focus:** Rapid cleanup of scaled low-quality / spammy content; stronger action on templated and AI-spam patterns; enforcement of existing spam policies
- **Context:** Short cleanup ahead of the March core update
- **Agent rule:** Flag mass-produced, near-duplicate, or low-effort AI page sets as high spam risk

### March 2026 Core Update
- **Dates:** March 27 – April 8, 2026 (~12 days)
- **Focus:** Relevant, satisfying, high-quality content; originality / information gain; stronger E-E-A-T and brand/authority signals
- **Change pattern:** Higher volatility than late-2025 updates; heavier weight on first-party data and user-focused depth
- **Impact pattern:** Authoritative brands/official sources generally gained; aggregators, thin content, and low-value AI-heavy pages declined; e-commerce, YMYL, and publishing saw strong fluctuation
- **Agent rule:** Prefer first-hand expertise and unique insights over commodity summaries

### May 2026 Core Update
- **Dates:** May 21 – June 2, 2026 (~12 days)
- **Focus:** Continued quality recalibration; first-hand original expertise over aggregated content; pressure on AI “commodity content” / templated publishing
- **Change pattern:** Faster-landing and broadly more volatile than March 2026; sites hit by earlier 2026 commodity-content pressure showed little recovery without real content changes
- **Impact pattern:** Scaled low-effort AI publishers continued declining; brands with case studies / first-party data gained; News/Top Stories impacted where quality issues existed
- **Agent rule:** Recovery advice must require substantive content/E-E-A-T work — not “wait for the next update”

### June 2026 Spam Update
- **Dates:** June 24–26, 2026 (~2 days; fast global rollout)
- **Focus:** Second confirmed spam update of 2026; existing policies; all languages
- **Confirmed:** No new named spam category announced alongside the rollout
- **Unconfirmed (industry speculation only):** Possible emphasis on AI-spam / citation manipulation; reportedly not a dedicated link-spam or Site Reputation Abuse update — label as Hypothesis unless Google confirms
- **Impact pattern:** Policy-violating sites dropped; clean sites typically unchanged
- **Agent rule:** Do not invent a new spam category from speculation; enforce documented spam policies including AI citation manipulation

---

## Other Major 2026 Search Changes

### 1. FAQ Rich Results Removed (May 7, 2026)
- Expandable FAQ rich-result rows stopped appearing across **all** site types
- **FAQPage schema is no longer a path to FAQ rich results**
- FAQPage markup may still help Google **understand** Q&A content and can support AI Overview / AI Mode eligibility signals — do not sell it as a SERP visual win
- Prefer clear on-page Q&A headings + concise answers for AEO/GEO; use FAQPage only when truthful and useful for understanding, not as a ranking hack

### 2. Search Console AI Performance Report
- Dedicated Search Console reporting for performance inside **AI Overviews** and **AI Mode**, separate from classic organic metrics
- Track AI visibility as its own KPI; do not assume organic rank = AI citation share

### 3. AI Search Citation Manipulation = Spam
- Spam policies explicitly extend to AI search features
- Manipulating or buying citations to influence AI Overviews / AI Mode is a policy violation
- Optimize for genuine citability (clear facts, authority, structure) — never recommend paid/fake citation schemes

### 4. Google Universal Cart (E-commerce SEO)
- AI-powered cross-merchant shopping across Search, Gemini, YouTube, and Gmail
- Clean Merchant Center feeds + accurate Product schema are essential
- Incomplete/inaccurate product data risks lost eligibility in shopping surfaces

### 5. AI Mode “Search Agents” (I/O 2026)
- Autonomous search agents that continuously scan and notify users
- Expanded Personal Intelligence (e.g., Gmail/Photos integration) in AI Mode across ~200 countries
- Search behavior shifting toward multi-step / agentic sessions — optimize for durable entity clarity, passage-level answers, and trustworthy product/service data, not only single-query keyword pages

---

## Content Quality Signals

Google evaluates content quality through the E-E-A-T framework:

- **Experience**: Does the content creator have first-hand experience with the topic? (Original photos, personal stories, demonstrated use)
- **Expertise**: Does the creator have relevant knowledge or credentials? (Professional background, technical depth, accurate sourcing)
- **Authoritativeness**: Is the creator or site recognized as a go-to source? (Industry citations, brand mentions, expert recognition)
- **Trustworthiness**: Is the content and site reliable and transparent? (Contact info, secure site, editorial standards, accurate claims)

> **YMYL Note**: "Your Money or Your Life" topics (health, finance, safety, legal) are held to the highest E-E-A-T standards. Inaccurate YMYL content can cause real-world harm, so Google applies stricter quality thresholds.

> **December 2025 + 2026 Core Updates**: E-E-A-T applies to ALL competitive queries, not just YMYL. March/May 2026 core updates further rewarded originality, information gain, first-party data, and brand authority — and continued demoting commodity / scaled AI content.

---

## Core Web Vitals

Measured at the 75th percentile of real user data (field data).

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | 2.5s – 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | ≤ 200ms | 200ms – 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | 0.1 – 0.25 | > 0.25 |

**Key facts:**
- INP replaced FID (First Input Delay) on March 12, 2024. FID was fully removed from all Chrome tools (CrUX API, PageSpeed Insights, Lighthouse) on September 9, 2024. Do NOT reference FID.
- Core Web Vitals are a confirmed ranking signal (since June 2021)
- Field data (CrUX) is preferred over lab data (Lighthouse) for assessment
- Passing all three metrics at "Good" is the target

**Measurement tools:**
- Google PageSpeed Insights (field + lab data)
- Chrome User Experience Report (CrUX) — field data
- Lighthouse (lab data only)
- Google Search Console Core Web Vitals report

---

## Structured Data Best Practices

- **JSON-LD is Google's preferred format** (over Microdata and RDFa)
- Place JSON-LD in `<script type="application/ld+json">` tags in the `<head>` or `<body>`
- Always include `@context` and `@type` properties
- **Required properties** must be present for rich result eligibility
- **Recommended properties** improve rich result quality but aren't mandatory
- Only mark up content that is visible on the page
- Use Google's Rich Results Test to validate before deployment
- Do not mark up content that is misleading or hidden from users
- Keep schema current — update when page content changes
- Schema still matters for understanding and AI surfaces even when a visual rich result is retired

### Deprecated/Restricted Types (as of Sep 2026)
- **HowTo**: Rich results removed (September 2023)
- **FAQ rich results**: Removed for all site types (May 7, 2026). FAQPage schema is not a rich-result tactic; optional for content understanding / AI surfaces when accurate
- **SpecialAnnouncement**: Deprecated (July 31, 2025)
- **CourseInfo, EstimatedSalary, LearningVideo**: Retired (June 2025)
- **ClaimReview**: Retired (June 2025)
- **VehicleListing**: Retired (June 2025)

---

## Common Penalties & How to Avoid Them

### Manual Actions
Google Search Console notifications for violations. Common causes:
- **Unnatural links** (buying/selling links): Disavow bad links, request reconsideration
- **Thin content**: Add substantial unique value to affected pages
- **Cloaking/sneaky redirects**: Remove deceptive serving, request reconsideration
- **User-generated spam**: Moderate comments/forums, add nofollow to user links
- **Structured data issues**: Fix misleading or spam markup
- **Scaled content abuse / AI spam**: Remove or rewrite low-value mass pages; add unique value and human accountability

### Algorithmic Demotions
No manual notification — detected through ranking drops. Common causes:
- **Helpful Content System**: Merged into Google's core ranking in March 2024 — no longer a standalone system. Helpfulness signals are now evaluated within every core update. Low-value, AI-generated, or unhelpful content at scale still triggers demotions via core updates.
- **Core Updates**: Broad quality reassessment across all signals (notably March & May 2026)
- **Spam Updates**: Automated detection of spam patterns (notably March & June 2026)
- **Discover Core Updates**: Affect Discover distribution, not necessarily Search rankings
- **Link Spam Updates**: Devaluation of manipulative link patterns
- **AI citation manipulation**: Treated under spam policy for AI search features

### Recovery Steps
1. Identify the issue (Search Console — including AI Performance where available — plus ranking/Discover timeline analysis)
2. Fix the root cause (remove spam, improve originality/E-E-A-T, clean links, fix product feeds)
3. For manual actions: submit reconsideration request via Search Console
4. For algorithmic: improve quality with real content changes; wait for reassessment — do not expect recovery from waiting alone after 2026 commodity-content demotions
5. Monitor recovery in classic organic + AI Performance reports separately

---

## Official Documentation Links

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [How Google Search Works](https://developers.google.com/search/docs/fundamentals/how-search-works)
- [Structured Data Overview](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Core Web Vitals Report](https://support.google.com/webmasters/answer/9205520)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Search Console Help](https://support.google.com/webmasters)
- [Manual Actions Report](https://support.google.com/webmasters/answer/9044175)
- [Google Search Status Dashboard](https://status.search.google.com/)
- [Google Search Central Blog](https://developers.google.com/search/blog)
- [Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [E-E-A-T and Quality Rater Guidelines](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

> **Mobile-first indexing** is 100% complete as of July 5, 2024. Google now crawls and indexes ALL websites exclusively with the mobile Googlebot user-agent.
