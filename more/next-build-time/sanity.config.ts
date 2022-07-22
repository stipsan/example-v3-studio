import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {theme} from 'https://themer.creativecody.dev/api/hues?preset=dew&min=1'

import {schemaTypes} from './schemas'

export default createConfig({
  theme,

  name: 'default',
  title: 'themer-next-build-time',
  projectId: 'kieaexhf',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {types: schemaTypes},
})
