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
      product: 'shopifyProductId',
    },
    prepare({product}) {
      return {
        title: `Product ID: ${product}`,
      }
    },
  },
})
