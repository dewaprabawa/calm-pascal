import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BOKUN_LOADER_SRC } from "@/lib/bokun";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        {/* Preload LCP hero image — eliminates resource load delay on mobile */}
        <link
          rel="preload"
          as="image"
          href="/images/img4.jpg"
          fetchPriority="high"
        />
        {/* DNS prefetch for third-party scripts */}
        <link rel="preconnect" href="https://www.tripadvisor.com" />
        <link rel="preconnect" href="https://www.tripadvisor.co.id" />
        <link rel="dns-prefetch" href="https://www.jscache.com" />
        <link rel="dns-prefetch" href="https://static.tacdn.com" />
        <link rel="preconnect" href="https://widgets.bokun.io" />
        <link rel="dns-prefetch" href="https://static.bokun.io" />
        <link rel="dns-prefetch" href="https://tile.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://nominatim.openstreetmap.org" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script src={BOKUN_LOADER_SRC} strategy="afterInteractive" />
      </body>
    </html>
  );
}
