import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

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
