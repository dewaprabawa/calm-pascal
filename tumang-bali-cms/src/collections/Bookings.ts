import { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
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
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'activity',
      type: 'relationship',
      relationTo: 'activities',
      required: true,
    },
    {
      name: 'dateTime',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'participants',
      type: 'number',
      required: true,
      min: 1,
    },
    {
      name: 'pickupRequested',
      type: 'checkbox',
      label: 'Pickup Service Requested?',
      defaultValue: false,
    },
    {
      name: 'pickupAddress',
      type: 'textarea',
      admin: {
        condition: (data) => data.pickupRequested,
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'pending',
    }
  ],
}
