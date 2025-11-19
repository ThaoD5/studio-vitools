// components/CustomSlugInput.jsx
import React, {useEffect, useState} from 'react'
import {Card, Stack, Text} from '@sanity/ui'
import {SlugInput as DefaultSlugInput} from 'sanity'
import {useClient} from 'sanity'
import {useFormValue} from 'sanity'
import {siteUrl} from '../../helpers/constants'

const CustomSlugInput = (props) => {
  const {schemaType, value, onChange, validation, elementProps} = props
  const site = `https://www.vestwell.com/`
  const stage = 'https://staging--vestwell-2025.netlify.app/'
  const {staging} = schemaType.options
  const prefix = schemaType.options?.prefix || ''
  const client = useClient({apiVersion: '2023-05-03'}) // Adjust API version as needed
  const [suffix, setSuffix] = useState('')

  // Construct the full URL
  const fullUrl = `${siteUrl}${prefix}${value?.current || value || ''}${suffix}`

  return (
    <Stack space={3}>
      <Card padding={2} tone={validation?.length > 0 ? 'critical' : 'default'}>
        <DefaultSlugInput
          {...props}
          value={value}
          onChange={onChange}
          elementProps={elementProps}
        />
      </Card>
      <Text size={1} muted>
        Full URL:{' '}
        <a href={fullUrl} target="_blank" rel="noopener noreferrer">
          {fullUrl || '[FULL URL]'}
        </a>
      </Text>
    </Stack>
  )
}

export default CustomSlugInput
