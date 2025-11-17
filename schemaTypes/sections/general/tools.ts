import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionTools = defineType({
  name: 'sectionTools',
  title: 'Section — Tools',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'customText',
      validation: (rule) => rule.required(),
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          name: 'product',
          title: 'Product',
          type: 'shopify.product',
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Section — Tools',
      }
    },
  },
})
