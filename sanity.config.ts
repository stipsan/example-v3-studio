import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from './schemas'

// @ts-expect-error
const { theme } = await import(
  /* webpackIgnore: true */ 'https://themer.creativecody.dev/api/hues?default=845b52;600&primary=f6401a&transparent=845b52;600&positive=43d675;300&caution=fbd024;200&critical=f02f34&lightest=fdfcfc&darkest=150f0d&min=1'
)

export default createConfig({
  name: 'default',
  title: 'My Sanity Project',
  theme,

  projectId: 'dlr8fnur',
  dataset: 'production',

  plugins: [
    deskTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
