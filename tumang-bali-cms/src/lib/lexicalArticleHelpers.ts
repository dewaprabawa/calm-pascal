type LexNode = Record<string, unknown>

export type FaqItem = { question: string; answer: string }

export type ArticleSeed = {
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  metaTitle: string
  metaDescription: string
  author: string
  authorRole: string
  authorBio: string
  articleSection: string
  keywords: string[]
  faq: FaqItem[]
  content: LexNode
}

export const text = (value: string, format = 0): LexNode => ({
  type: 'text',
  version: 1,
  detail: 0,
  format,
  mode: 'normal',
  style: '',
  text: value,
})

export const link = (value: string, url: string): LexNode => ({
  type: 'link',
  version: 2,
  fields: { url, newTab: false, linkType: 'custom' },
  direction: 'ltr',
  format: '',
  indent: 0,
  children: [text(value)],
})

export const paragraph = (children: LexNode[]): LexNode => ({
  type: 'paragraph',
  version: 1,
  direction: 'ltr',
  format: '',
  indent: 0,
  children,
})

export const heading = (tag: 'h2' | 'h3', value: string): LexNode => ({
  type: 'heading',
  tag,
  version: 1,
  direction: 'ltr',
  format: '',
  indent: 0,
  children: [text(value)],
})

export const list = (items: string[], ordered = false): LexNode => ({
  type: 'list',
  version: 1,
  listType: ordered ? 'number' : 'bullet',
  start: 1,
  tag: ordered ? 'ol' : 'ul',
  direction: 'ltr',
  format: '',
  indent: 0,
  children: items.map((it, i) => ({
    type: 'listitem',
    version: 1,
    value: i + 1,
    direction: 'ltr',
    format: '',
    indent: 0,
    children: [text(it)],
  })),
})

export const root = (children: LexNode[]): LexNode => ({
  root: {
    type: 'root',
    version: 1,
    direction: 'ltr',
    format: '',
    indent: 0,
    children,
  },
})

/** Standard commercial close — book CTA + internal links */
export function commercialClose(extra?: string): LexNode[] {
  const nodes: LexNode[] = [
    heading('h2', 'Book a Balinese cooking class on your Bali trip'),
    paragraph([
      text(
        extra ??
          'Whether you stay in a villa, resort, or guesthouse, a half-day at Tumang Bali puts real culture on your itinerary — morning market tour, rice-field walk, hand-ground bumbu, and 10+ dishes you cook and eat together.',
      ),
    ]),
    paragraph([
      text('Shared class from IDR 350,000 per person. Private 1-person class IDR 650,000. Free Ubud-area pickup. '),
      link('Book your cooking class', '/book-your-cooking-class'),
      text(' or see the full '),
      link('Balinese cooking class in Ubud', '/balinese-cooking-class-ubud'),
      text(' page. TripAdvisor Travelers\' Choice 2026 — max 8 guests per shared session.'),
    ]),
  ]
  return nodes
}
