import { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'customerName',
  },
  fields: [
    {
      name: 'customerName',
      type: 'text',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: 'comment',
      type: 'textarea',
    },
    {
      name: 'activity',
      type: 'relationship',
      relationTo: 'activities',
    },
    {
      name: 'source',
      type: 'select',
      options: [
        { label: 'Internal/Website', value: 'internal' },
        { label: 'Google', value: 'google' },
        { label: 'TripAdvisor', value: 'tripadvisor' },
      ],
      defaultValue: 'internal',
    },
    {
      name: 'externalLink',
      type: 'text',
      label: 'Link to original review (for Google/TripAdvisor)',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft / Pending', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
    }
  ],
}
