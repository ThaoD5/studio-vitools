import {defineType} from 'sanity'
import {BlockQuoteIcon, Heading1Icon} from '@sanity/icons' // optional: for custom icons if you want to hide them visually too

export const wysiwygText = defineType({
  name: 'wysiwygText',
  title: 'Component — WYSIWYG Text',
  type: 'array',
  of: [
    {
      type: 'block',
      // Remove h1 and blockquote from the style dropdown
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        // h1 and blockquote are intentionally omitted
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                name: 'openInNewTab',
                type: 'boolean',
                title: 'Open in new tab',
                initialValue: true,
              },
            ],
          },
        ],
      },
    },
  ],
})
