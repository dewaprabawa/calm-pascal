import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ZapierChatbotLazy from "./components/ZapierChatbotLazy";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tumangbaliclass.com'),
  title: {
    default: "Cooking Class Ubud | Tumang Bali",
    template: "%s | Tumang Bali",
  },
  description: "Hands-on Balinese cooking in Ubud: market tour, rice paddies, 10+ dishes, veg options & free hotel pickup.",
  openGraph: {
    title: "Cooking Class Ubud | Tumang Bali",
    description: "Join our Ubud kitchen for a market tour, rice-field walk, and 10+ traditional dishes with a local chef.",
    url: 'https://tumangbaliclass.com',
    siteName: 'Tumang Bali Cooking Class',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/gallery-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Tumang Bali Cooking Class - Happy guests enjoying authentic Balinese cooking experience in Ubud rice fields',
      },
      {
        url: '/images/gallery-chopping.jpg',
        width: 1200,
        height: 630,
        alt: 'Hands-on Balinese cooking class - Chopping fresh ingredients for traditional spice paste in Ubud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cooking Class Ubud | Tumang Bali',
    description: 'Market tour, rice-field walk & 10+ dishes. Vegetarian friendly. Hotel pickup. Book today!',
    images: ['/images/gallery-group.jpg'],
    creator: '@tumangbali',
  },
  // Avoid googleBot max-snippet overrides — some SEO tools misread max-snippet:-1 as blocking.
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tumangbaliclass.com',
    languages: {
      'en-US': 'https://tumangbaliclass.com',
      'id-ID': 'https://tumangbaliclass.com/id',
      'x-default': 'https://tumangbaliclass.com',
    },
  },
  verification: {
    google: 'ExEq4rknSvS0B1G9RnLrgDI0IH8AyCEcSpzERrOvnZM',
  },
  category: 'travel',
  other: {
    'geo.region': 'ID-BA',
    'geo.placename': 'Ubud, Bali',
    'geo.position': '-8.4945634;115.2810863',
    'ICBM': '-8.4945634, 115.2810863',
    'rating': 'general',
    'revisit-after': '7 days',
    'author': 'Tumang Bali Cooking Class',
  },
};

const LLMS_TXT = 'https://tumangbaliclass.com/llms.txt'
const LLMS_FULL = 'https://tumangbaliclass.com/llms-full.txt'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        {/* Site summary files for crawlers — no early third-party preconnects (hurts LCP) */}
        <link rel="describedby" href={LLMS_TXT} type="text/plain" title="Site summary" />
        <link rel="alternate" href={LLMS_TXT} type="text/plain" title="Site summary" />
        <link rel="alternate" href={LLMS_FULL} type="text/plain" title="Full site summary" />
        <link rel="author" href={LLMS_TXT} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-[200%] rounded-lg bg-orange-700 px-4 py-2 font-semibold text-white transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          Skip to main content
        </a>
        {children}

        {/* Chat loads after interaction to avoid PSI Best Practices cookie/iframe hits */}
        <ZapierChatbotLazy />

        <GoogleAnalytics />
      </body>
    </html>
  );
}
