import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from './schemas'

const { theme, hues, createTheme } = await import(
  'http://localhost:3000/api/hues?default=a2a19e;400&primary=c9bab5;300&transparent=a2a19e;400&positive=43d675;300&caution=fbd024;200&critical=f0392f&lightest=fafafa&darkest=121211'
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
