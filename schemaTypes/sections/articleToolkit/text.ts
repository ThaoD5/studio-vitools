import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionText = defineType({
  name: 'sectionText',
  title: 'Section — Text',
  type: 'object',
  fields: [
    {
      name: 'fontFamily',
      title: 'Font family',
      defaultValue: 'default',
      initialValue: 'default',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Typewriter', value: 'typewriter'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'wysiwygText',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'content',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Section — Text',
      }
    },
  },
})
