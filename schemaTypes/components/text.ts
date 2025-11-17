import {defineType} from 'sanity'

export const customText = defineType({
  name: 'customText',
  title: 'Component — Text',
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
})
