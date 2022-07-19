import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
// @ts-expect-error -- TODO figure out how to get typings for this
import { theme } from 'https://themer.creativecody.dev/api/hues?default=294643;600&primary=ee7975&transparent=2a4543;600&positive=43d675;300&caution=fbd024;200&lightest=fcfdfd&darkest=0d1615&min=1'


import { schemaTypes } from './schemas'

export default createConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: 'dlr8fnur',
  dataset: 'production',
  theme,

  plugins: [
    deskTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
