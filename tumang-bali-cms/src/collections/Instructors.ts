import { CollectionConfig } from 'payload'

export const Instructors: CollectionConfig = {
  slug: 'instructors',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'specialties',
      type: 'array',
      fields: [
        { name: 'specialty', type: 'text' }
      ]
    }
  ],
}
