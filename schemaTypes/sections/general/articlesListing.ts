import {defineType} from 'sanity'

export const sectionArticlesListing = defineType({
  name: 'sectionArticlesListing',
  title: 'Section — Articles Listing',
  type: 'object',
  fields: [
    {
      name: 'variant',
      title: 'Variant',
      defaultValue: 'default',
      initialValue: 'default',
      type: 'string',
      description: '"Variant 2" has typewriter font + framed medias',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Variant 2', value: 'variant-2'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'loadMoreAmount',
      title: 'Load More after how many articles?',
      description: 'Set to 0 to disable load more button',
      defaultValue: 4,
      initialValue: 4,
      type: 'number',
    },
    {
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'articles'}]}],

      validation: (rule) => rule.required().min(2),
    },
  ],
  preview: {
    select: {
      articles: 'articles',
      variant: 'variant',
    },
    prepare({articles, variant}) {
      const title = `${articles?.length || 0} article(s) with ${variant} variant`
      return {
        title: title,
        subtitle: 'Section — Articles Listing',
      }
    },
  },
})
