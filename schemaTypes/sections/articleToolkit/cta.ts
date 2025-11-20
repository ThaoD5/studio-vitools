import {defineType} from 'sanity'

export const sectionToolkitCTA = defineType({
  name: 'sectionToolkitCTA',
  title: 'Section — Toolkit CTA',
  type: 'object',
  fields: [
    {
      name: 'button',
      title: 'Button',
      type: 'button',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      button: 'button',
    },
    prepare({button}) {
      return {
        title: button?.label || 'Toolkit CTA',
        subtitle: 'Section — Toolkit CTA',
      }
    },
  },
})
