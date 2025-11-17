import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionHowItWorks = defineType({
  name: 'sectionHowItWorks',
  title: 'Section — How It Works',
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
      name: 'accordion',
      title: 'Accordion',
      type: 'accordionList',
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
        subtitle: 'Section — How It Works',
      }
    },
  },
})
