import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';",
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
      // Dead blog post — redirect to the main cooking class page.
      {
        source: '/blog/dishes-you-cook-balinese-cooking-class',
        destination: '/authentic-balinese-cooking-class',
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
    minimumCacheTTL: 60,
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
