import ShopifyProductIdInput from './ShopifyProductIdInput'
import {defineType} from 'sanity'

export const shopifyProductId = defineType({
  name: 'shopify.product',
  title: 'Shopify product ID',
  type: 'object',
  fields: [
    {
      name: 'shopifyProductId',
      title: 'Shopify Product ID',
      type: 'string',
    },
  ],
  preview: {
    select: {
      gid: 'shopify.product',
    },
    prepare({gid}) {
      const id = gid?.startsWith('gid://shopify/Product/')
        ? gid.slice('gid://shopify/Product/'.length)
        : gid
      return {
        title: `Product ID: ${id || '(none)'}`,
      }
    },
  },
})
