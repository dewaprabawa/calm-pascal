import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
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
