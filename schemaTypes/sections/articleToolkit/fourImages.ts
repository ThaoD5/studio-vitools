import {defineType} from 'sanity'

export const sectionFourImages = defineType({
  name: 'sectionFourImages',
  title: 'Section — Four Images',
  type: 'object',
  fields: [
    {
      name: 'medias',
      title: 'Medias',
      type: 'array',
      of: [{type: 'shopify.asset'}],
      validation: (rule) => rule.required().min(4).max(4),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Four Images',
        subtitle: 'Section — Four Images',
      }
    },
  },
})
