import {defineType} from 'sanity'

export const sectionSideBySideMedias = defineType({
  name: 'sectionSideBySideMedias',
  title: 'Section — Side By Side Medias',
  type: 'object',
  fields: [
    {
      name: 'media',
      title: 'Media (left)',
      type: 'shopify.asset',
      description: 'Expected aspect-ratio: 1:1',
      validation: (rule) => rule.required(),
    },
    {
      name: 'media2',
      title: 'Media (right)',
      type: 'shopify.asset',
      description: 'Expected aspect-ratio: 1:1',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Side By Side Medias',
        subtitle: 'Section — Side By Side Medias',
      }
    },
  },
})
