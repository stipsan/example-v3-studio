import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from '../sanity-build/schemas'

export default createConfig({
  name: 'default',
  title: 'themer-next-build-time',
  projectId: 'kieaexhf',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {types: schemaTypes},
})
