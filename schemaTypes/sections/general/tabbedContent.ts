import {defineType} from 'sanity'

export const sectionTabbedContent = defineType({
  name: 'sectionTabbedContent',
  title: 'Section — Tabbed Content',
  type: 'object',
  fields: [
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        defineType({
          name: 'tabbedContentItem',
          type: 'object',
          fields: [
            {
              name: 'tabTitle',
              title: 'Tab Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'title',
              title: 'Title',
              type: 'title',
              validation: (rule) => rule.required(),
            },
            {
              name: 'content',
              title: 'Content',
              type: 'wysiwygTextTabbedContent',
            },
          ],
          preview: {
            select: {
              title: 'tabTitle',
            },
            prepare({title}) {
              return {
                title: title,
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
      tabs: 'tabs',
    },
    prepare({tabs}) {
      return {
        title: `${tabs?.length || 0} Tabs`,
        subtitle: 'Section — Tabbed Content',
      }
    },
  },
})
