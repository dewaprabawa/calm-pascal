import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400' },
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400' },
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            // Next may advertise Sec-CH-Prefers-Color-Scheme as Critical-CH, which
            // forces a second document request (~800ms+) and tanks mobile LCP.
            // Clear both so the first HTML response is final.
            key: 'Accept-CH',
            value: '',
          },
          {
            key: 'Critical-CH',
            value: '',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https: data: blob:; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' https: data: blob:; font-src 'self' https: data:; frame-src 'self' https:; connect-src 'self' https:;",
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.tumangbaliclass.com' }],
        destination: 'https://tumangbaliclass.com/:path*',
        permanent: true,
      },
      // Dead blog post — redirect to the main cooking class page.
      {
        source: '/blog/dishes-you-cook-balinese-cooking-class',
        destination: '/authentic-balinese-cooking-class',
        permanent: true,
      },
      // GSC: zero-click pepes blog cannibalizing /recipes/pepes-ikan (primary).
      {
        source: '/blog/pepes-ikan-recipe-bali',
        destination: '/recipes/pepes-ikan',
        permanent: true,
      },
      // GSC: consolidate thin commercial URL into the "cooking class ubud" money page.
      {
        source: '/cooking-class-bali',
        destination: '/balinese-cooking-class-ubud',
        permanent: true,
      },
      // Common URL patterns that visitors and bots try — redirect to homepage anchors.
      {
        source: '/faq',
        destination: '/#faq',
        permanent: true,
      },
      {
        source: '/reviews',
        destination: '/#reviews',
        permanent: true,
      },
    ];
  },
  // Keep pdfkit external so webpack does not bundle it. Bundling rewrites the
  // module's __dirname and breaks its relative lookup of the bundled .afm font
  // metrics files, which makes `new PDFDocument()` throw at runtime (the 500 on
  // /api/recipes/download-pdf).
  serverExternalPackages: ['sharp', 'pdfkit'],
  // Ensure pdfkit's font-metrics data files are traced into the serverless
  // bundle for the PDF download route.
  outputFileTracingIncludes: {
    '/api/recipes/download-pdf': ['./node_modules/pdfkit/js/data/**'],
  },
  images: {
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default withPayload(nextConfig);
