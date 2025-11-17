import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionQuotesSlider = defineType({
  name: 'sectionQuotesSlider',
  title: 'Section — Quotes Slider',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      type: 'sectionBackgroundColor',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'quote',
              title: 'Quote',
              type: 'title',
              validation: (rule) => rule.required(),
            },
            {
              name: 'quoteAuthor',
              title: 'Quote Author',
              type: 'customText',
              validation: (rule) => rule.required(),
            },
            {
              name: 'quoteDate',
              title: 'Quote Date',
              type: 'customText',
              validation: (rule) => rule.required(),
            },
            {
              name: 'quoteLocation',
              title: 'Quote Location',
              type: 'customText',
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'quote',
              subtitle: 'quoteAuthor',
            },
            prepare({title, subtitle}) {
              return {
                title: portableTextToPlainText(title),
                subtitle: portableTextToPlainText(subtitle),
              }
            },
          },
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
        subtitle: 'Section — Quotes Slider',
      }
    },
  },
})
