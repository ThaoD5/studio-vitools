import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionSimpleMedia = defineType({
  name: 'sectionSimpleMedia',
  title: 'Section — Simple Media',
  type: 'object',
  fields: [
    {
      name: 'media',
      title: 'Media',
      type: 'shopify.asset',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      media: 'media',
    },
    prepare({media}) {
      return {
        title: media.url,
        subtitle: 'Section — Simple Media',
      }
    },
  },
})
