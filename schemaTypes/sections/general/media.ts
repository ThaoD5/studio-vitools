import {defineType} from 'sanity'

export const sectionMedia = defineType({
  name: 'sectionMedia',
  title: 'Section — Media',
  type: 'object',
  fields: [
    {
      name: 'media',
      title: 'Media',
      type: 'shopify.asset',
      validation: (rule) => rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'customText',
      // validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
        subtitle: 'Section — Media',
      }
    },
  },
})
