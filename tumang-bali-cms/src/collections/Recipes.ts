import { CollectionConfig } from 'payload'

export const Recipes: CollectionConfig = {
  slug: 'recipes',
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
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'ingredients',
      type: 'array',
      fields: [
        { name: 'item', type: 'text' },
        { name: 'quantity', type: 'text' }
      ]
    },
    {
      name: 'instructions',
      type: 'richText',
    },
    {
      name: 'relatedActivity',
      type: 'relationship',
      relationTo: 'activities',
    },
    {
      name: 'isRequestable',
      type: 'checkbox',
      label: 'Can users request this recipe?',
      defaultValue: true,
    }
  ],
}
