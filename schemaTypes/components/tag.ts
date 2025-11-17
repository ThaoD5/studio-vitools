import {defineType, defineField} from 'sanity'
import {link} from './legacy/link'

export const tag = defineType({
  name: 'tag',
  title: 'Components - Tag',
  type: 'object',
  fields: [
    // Current button fields (keep intact)
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Pink', value: 'pink'},
          {title: 'Blue', value: 'blue'},
          {title: 'Teal', value: 'teal'},
          {title: 'Green', value: 'green'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
  preview: {
    select: {
      label: 'label',
    },
    prepare: ({label}) => {
      if (label) {
        return {
          title: label,
        }
      }
    },
  },
})
