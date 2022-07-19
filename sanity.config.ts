import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// @ts-expect-error -- TODO figure out how to get typings for this
import { theme } from 'https://themer.creativecody.dev/api/hues?preset=rosabel&min=1'

import { schemaTypes } from './schemas'

export default createConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: 'dlr8fnur',
  dataset: 'production',

  plugins: [
    deskTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
