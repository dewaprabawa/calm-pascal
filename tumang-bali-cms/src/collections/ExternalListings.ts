import { CollectionConfig } from 'payload'

export const ExternalListings: CollectionConfig = {
  slug: 'external-listings',
  admin: {
    useAsTitle: 'platformName',
  },
  fields: [
    {
      name: 'platformName',
      type: 'select',
      options: [
        { label: 'Klook', value: 'klook' },
        { label: 'Agoda', value: 'agoda' },
        { label: 'Airbnb Experience', value: 'airbnb' },
        { label: 'Expedia', value: 'expedia' },
        { label: 'Viator', value: 'viator' },
        { label: 'Instagram', value: 'instagram' },
      ],
      required: true,
    },
    {
      name: 'activity',
      type: 'relationship',
      relationTo: 'activities',
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'externalId',
      type: 'text',
      label: 'External Platform ID (Optional)',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    }
  ],
}
