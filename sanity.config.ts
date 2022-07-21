import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from './schemas'

const { theme, createTheme, hues } = await import(
  'https://themer.creativecody.dev/api/hues?preset=verdant&min=1'
)
console.log(createTheme(hues), { hues })

export default createConfig({
  name: 'default',
  title: 'My Sanity Project',
  theme,

  projectId: 'dlr8fnur',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
