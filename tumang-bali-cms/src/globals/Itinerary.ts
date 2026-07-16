import { GlobalConfig } from 'payload'

export const Itinerary: GlobalConfig = {
  slug: 'itinerary',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'steps',
      type: 'array',
      label: 'Itinerary Steps',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'duration',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
