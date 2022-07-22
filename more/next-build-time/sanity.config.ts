import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {
  createTheme,
  hues,
} from 'https://themer.creativecody.dev/api/hues?preset=pink-synth&min=1'

import {schemaTypes} from './schemas'

export default createConfig({
  theme: createTheme({
    ...hues,
    default: {...hues.default, lightest: '#ece3e9'},
  }),

  name: 'themer-next-build-time',
  title: 'My Sanity Project',
  projectId: 'kieaexhf',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {types: schemaTypes},
})
