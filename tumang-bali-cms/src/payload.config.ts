import { buildConfig } from 'payload'
import sharp from 'sharp'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Media } from './collections/Media'
import { Activities } from './collections/Activities'
import { Instructors } from './collections/Instructors'
import { Recipes } from './collections/Recipes'
import { Bookings } from './collections/Bookings'
import { Reviews } from './collections/Reviews'
import { ExternalListings } from './collections/ExternalListings'
import { Articles } from './collections/Articles'
import { Itinerary } from './globals/Itinerary'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
    }),
  ],
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    Media,
    Activities,
    Instructors,
    Recipes,
    Bookings,
    Reviews,
    ExternalListings,
    Articles,
  ],
  globals: [
    Itinerary,
  ],
  editor: lexicalEditor(),
  sharp,
  secret: process.env.PAYLOAD_SECRET || 'tumang-bali-secret-key',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://127.0.0.1/tumang-bali-cms',
  }),
})

