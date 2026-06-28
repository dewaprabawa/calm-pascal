import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  // Uploaded media must be publicly readable so /api/media/file/* serves
  // images to anonymous visitors and crawlers. Without this, Payload's
  // access control returns 403 "You are not allowed to perform this action",
  // which the Next.js image optimizer then surfaces as a 400 broken image.
  access: {
    read: () => true,
  },
  upload: {
    disableLocalStorage: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'video/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
