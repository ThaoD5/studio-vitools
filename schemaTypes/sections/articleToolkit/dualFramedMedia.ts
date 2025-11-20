import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionDualFramedMedia = defineType({
  name: 'sectionDualFramedMedia',
  title: 'Section — Media slider',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      defaultValue: {hex: '#FFFFFF'},
      options: {
        disableAlpha: true,
      },
      validation: (rule) => rule.required(),
    },

    {
      name: 'medias',
      title: 'Medias',
      type: 'array',
      of: [
        defineType({
          name: 'dualMediaItem',
          type: 'object',
          fields: [
            {
              name: 'media',
              title: 'Media (larger frame)',
              type: 'shopify.asset',
              validation: (rule) => rule.required(),
            },
            {
              name: 'media2',
              title: 'Media (smaller frame)',
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
              title: 'caption',
            },
            prepare({title}) {
              return {
                title: title ? portableTextToPlainText(title) : 'Dual Media Item',
                subtitle: `Media Item`,
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    },
  ],
  preview: {
    select: {
      medias: 'medias',
    },
    prepare({medias}) {
      return {
        title: `${medias?.length || 0} Media Items`,
        subtitle: 'Section — Media slider',
      }
    },
  },
})
