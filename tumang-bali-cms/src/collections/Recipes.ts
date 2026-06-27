import { CollectionConfig } from 'payload'
import PDFDocument from 'pdfkit'

export const Recipes: CollectionConfig = {
  slug: 'recipes',
  labels: {
    singular: 'Menu / Recipe',
    plural: 'Menu & Recipes',
  },
  admin: {
    useAsTitle: 'title',
  },
  endpoints: [
    {
      path: '/download-pdf',
      method: 'get',
      handler: async (req) => {
        try {
          const { payload } = req;
          const { docs: recipes } = await payload.find({
            collection: 'recipes',
            limit: 1000,
          });

          return new Promise((resolve) => {
            const doc = new PDFDocument();
            const chunks: Buffer[] = [];

            doc.on('data', (chunk) => chunks.push(chunk));
            doc.on('end', () => {
              const pdfBuffer = Buffer.concat(chunks);
              resolve(new Response(pdfBuffer, {
                status: 200,
                headers: new Headers({
                  'Content-Type': 'application/pdf',
                  'Content-Disposition': 'attachment; filename="tumang-bali-menu.pdf"',
                })
              }));
            });

            doc.on('error', (err) => {
               console.error("PDF generation error:", err);
               resolve(Response.json({ error: 'Failed to generate PDF' }, { status: 500 }));
            });

            doc.fontSize(25).text('Tumang Bali - Menu', { align: 'center' });
            doc.moveDown();

            const categories = [
              { id: 'regular', name: 'Regular Menu' },
              { id: 'vegetarian', name: 'Vegetarian Menu' }
            ];

            categories.forEach(category => {
              const items = recipes.filter(r => r.menuType === category.id);
              if (items.length > 0) {
                doc.fontSize(18).text(category.name, { underline: true });
                doc.moveDown(0.5);
                items.forEach(item => {
                  doc.fontSize(14).text(`${item.title}`);
                  if (item.description) {
                    doc.fontSize(10).fillColor('grey').text(item.description).fillColor('black');
                  }
                  doc.moveDown(0.5);
                });
                doc.moveDown();
              }
            });

            doc.end();
          });
        } catch (error) {
          console.error("Error fetching recipes for PDF:", error);
          return Response.json({ error: 'Internal Server Error' }, { status: 500 });
        }
      },
    },
  ],
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
    },
    {
      name: 'menuType',
      type: 'select',
      options: [
        { label: 'Regular', value: 'regular' },
        { label: 'Vegetarian', value: 'vegetarian' },
      ],
      required: true,
      defaultValue: 'regular',
    }
  ],
}
