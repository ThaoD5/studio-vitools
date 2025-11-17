import {defineType, defineField} from 'sanity'
import {portableTextToPlainText} from '../../helpers/functions'

export const accordionList = defineType({
  name: 'accordionList',
  title: 'Components - Accordion List',
  type: 'object',
  fields: [
    {
      name: 'accordion',
      title: 'Accordions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Accordion item : title',
              type: 'title',
              validation: (rule) => rule.required(),
            },
            {
              name: 'content',
              title: 'Accordion item : content',
              validation: (rule) => rule.required(),
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    // {title: 'Normal', value: 'normal'},
                  ],
                  marks: {
                    decorators: [
                      // {title: 'Emphasis', value: 'em'},
                      // {title: 'Superscript', value: 'sup'},
                    ],
                    annotations: [], // Disable annotations like links
                  },
                  lists: [], // Disable lists (e.g., bullet or numbered lists)
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare({title}) {
              return {
                title: portableTextToPlainText(title),
              }
            },
          },
        },
      ],
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
  preview: {
    select: {
      faq: 'faq',
    },
    prepare: ({faq}) => {
      const faqCount = faq ? faq.length : 0

      return {
        title: 'FAQ List',
        subtitle: `${faqCount} FAQ${faqCount !== 1 ? 's' : ''}`,
      }
    },
  },
})
