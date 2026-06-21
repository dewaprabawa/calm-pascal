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
