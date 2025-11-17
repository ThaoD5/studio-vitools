import {defineType} from 'sanity'

export const productIcon = defineType({
  name: 'productIcon',
  title: 'Components - Product Icon',
  type: 'object',
  fields: [
    {
      name: 'productIcon',
      title: 'Product Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Curve 1', value: 'curve-1'},
          {title: 'Curve 2', value: 'curve-2'},
          {title: 'Curve 3', value: 'curve-3'},
          {title: 'Point', value: 'point'},
        ],
        layout: 'select',
      },
      validation: (rule) => rule.required(),
    },
  ],
})
