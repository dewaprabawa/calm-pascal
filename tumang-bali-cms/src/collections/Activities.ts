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
        description:
          'Adult price in full IDR for 1 participant (e.g. 616032). Shared solo / private solo rate.',
      },
    },
    {
      name: 'groupPrice',
      type: 'number',
      admin: {
        description:
          'Adult price in full IDR for 2+ participants. Shared: per adult. Private: package for minimum 2 participants (e.g. 1266180).',
      },
    },
    {
      name: 'kidsPrice',
      type: 'number',
      admin: {
        description: 'Optional kids price in full IDR (legacy; adult tiered rates are preferred).',
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
