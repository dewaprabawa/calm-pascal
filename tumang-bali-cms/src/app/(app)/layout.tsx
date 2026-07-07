import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Cooking Class in Ubud — Market Tour & Recipes",
    template: '%s | Tumang Bali',
  },
  description: "Authentic Balinese cooking class in Ubud with market tour, rice field walk & 10+ traditional dishes. Vegetarian friendly, hotel pickup.",
  keywords: [
    // Primary high-volume keywords
    'cooking class Ubud', 'cooking class Bali', 'Balinese cooking class', 'best cooking class in Bali',
    'best cooking class in Ubud', 'Bali cooking school', 'Indonesian cooking class',
    // Long-tail experience keywords
    'authentic Balinese cooking class', 'traditional Balinese cooking experience',
    'cooking class with market tour', 'market tour and cooking class Ubud',
    'farm to table cooking class Bali', 'hands-on cooking workshop Ubud',
    'private cooking class Ubud', 'cooking class in traditional Balinese home',
    // Dietary/specialty keywords
    'vegetarian cooking class Bali', 'vegan cooking class Ubud', 'vegetarian Balinese cooking class',
    // Action/booking keywords
    'book cooking class Ubud', 'top rated cooking classes Bali', 'Ubud cooking class with pickup',
    'affordable cooking classes in Bali', 'cooking class near Ubud center',
    // Things to do keywords
    'things to do in Ubud', 'Bali activities', 'Ubud activities', 'what to do in Ubud',
    'Bali food tour', 'Ubud culinary adventure', 'Bali cultural experience',
    // Brand keywords
    'Tumang Bali', 'Tumang Bali cooking class', 'Tumang cooking class Ubud',
    // Competitor comparison keywords
    'family friendly cooking class Ubud', 'small group cooking class Bali',
    'cooking class with hotel pickup Ubud', 'half day cooking class Bali',
  ],
  openGraph: {
    title: "Authentic Balinese Cooking Class in Ubud — Market Tour & Recipes",
    description: "Join our cooking school in Ubud. Learn 10+ traditional Balinese dishes with a local chef, tour a traditional market, and take home a recipe booklet.",
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
        <link rel="preconnect" href="https://www.tripadvisor.com" />
        <link rel="preconnect" href="https://www.tripadvisor.co.id" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
