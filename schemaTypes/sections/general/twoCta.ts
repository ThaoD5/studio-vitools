import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionTwoCta = defineType({
  name: 'sectionTwoCta',
  title: 'Section — Two CTA',
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
      name: 'text',
      title: 'Text',
      type: 'customText',
      validation: (rule) => rule.required(),
    },
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
      name: 'buttonPrimary',
      title: 'Button',
      type: 'button',
    },
    {
      name: 'buttonSecondary',
      title: 'Button',
      type: 'button',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Section — Two CTA',
      }
    },
  },
})
