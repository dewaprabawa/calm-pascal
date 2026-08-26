import { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'durationHours',
      type: 'number',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      admin: {
        description: 'Price in thousands of IDR (e.g. 350 = IDR 350,000). For private class, this is the adult / 1-person rate.',
      },
    },
    {
      name: 'kidsPrice',
      type: 'number',
      admin: {
        description: 'Optional kids price in thousands of IDR (e.g. 550 = IDR 550,000).',
      },
    },
    {
      name: 'instructor',
      type: 'relationship',
      relationTo: 'instructors',
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'includedItems',
      type: 'array',
      fields: [
        { name: 'item', type: 'text' }
      ]
    },
    {
      name: 'excludedItems',
      type: 'array',
      fields: [
        { name: 'item', type: 'text' }
      ]
    }
  ],
}
