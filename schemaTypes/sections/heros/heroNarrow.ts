import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const heroNarrow = defineType({
  name: 'heroNarrow',
  title: 'Hero — Narrow',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'theme',
      title: 'Text Theme',
      description: 'Light = white text, Dark = dark text',
      defaultValue: 'light',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Hero — Narrow',
      }
    },
  },
})
