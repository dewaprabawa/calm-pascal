import { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'status', 'publishedDate'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return value
            if (data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      defaultValue: 'Tumang Bali Team',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 200,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'SEO Title (leave blank to use article title)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO Meta Description',
          },
        },
      ],
    },
    {
      name: 'faq',
      type: 'array',
      label: 'FAQ (for FAQPage rich results)',
      admin: {
        description: 'Add questions and answers. These generate a FAQPage schema so Google can show rich FAQ cards in search and AI Overviews.',
        condition: (_, { status }) => status === 'published',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Question',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Answer',
          maxLength: 500,
        },
      ],
    },
    {
      name: 'howToSteps',
      type: 'array',
      label: 'How-To Steps (for HowTo rich results)',
      admin: {
        description: 'Step-by-step instructions. Generates a HowTo schema so Google shows numbered steps in search and AI results.',
        condition: (_, { status }) => status === 'published',
      },
      fields: [
        {
          name: 'step',
          type: 'text',
          required: true,
          label: 'Step text',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Optional image URL for this step',
        },
      ],
    },
    {
      name: 'authorBio',
      type: 'text',
      label: 'Author Bio (for E-E-A-T)',
      admin: {
        description: 'Brief bio shown in structured data. Helps Google associate this article with an expert.',
        maxLength: 300,
      },
    },
    {
      name: 'authorRole',
      type: 'text',
      label: 'Author Role / Title',
      admin: {
        description: 'e.g. "Head Chef", "Culinary Expert", "Local Food Guide"',
      },
    },
    {
      name: 'articleSection',
      type: 'text',
      label: 'Article Section',
      admin: {
        description: 'Category for Article schema (e.g. "Recipes", "Travel Guide", "Culture", "Cooking Tips")',
      },
    },
    {
      name: 'keywords',
      type: 'array',
      label: 'SEO Keywords',
      admin: {
        description: 'Keywords for the Article schema (helps AI understand topic)',
        maxRows: 10,
      },
      fields: [
        {
          name: 'keyword',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
