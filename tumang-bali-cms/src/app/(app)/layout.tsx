import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tumangbaliclass.com'),
  title: {
    default: "Authentic Balinese Cooking Class in Ubud | Tumang Bali",
    template: "%s | Tumang Bali",
  },
  description: "Authentic Balinese cooking class in Ubud with market tour, rice field walk & 10+ traditional dishes. Vegetarian friendly, hotel pickup.",
  openGraph: {
    title: "Authentic Balinese Cooking Class in Ubud | Tumang Bali",
    description: "Join our Ubud cooking class. Learn 10+ traditional Balinese dishes with a local chef, tour a market, and take home a recipe booklet.",
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
    title: 'Best Cooking Class in Ubud | Tumang Bali ⭐ 5-Star Rated',
    description: 'Authentic Balinese cooking class with market tour, rice field walk & 10+ dishes. Vegetarian friendly. Hotel pickup. Book today!',
    images: ['/images/gallery-group.jpg'],
    creator: '@tumangbali',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Site summary files for crawlers */}
        <link rel="describedby" href={LLMS_TXT} type="text/plain" title="Site summary" />
        <link rel="alternate" href={LLMS_TXT} type="text/plain" title="Site summary" />
        <link rel="alternate" href={LLMS_FULL} type="text/plain" title="Full site summary" />
        <link rel="author" href={LLMS_TXT} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
