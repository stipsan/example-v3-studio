import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

const {theme} = (await import(
  // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
  'https://themer.creativecody.dev/api/hues?default=975e86&primary=2c6ebd&transparent=975e86&positive=43d675;300&caution=fbd024;200&lightest=fdfcfd&darkest=150d13&min=1'
)) as {theme: import('sanity').StudioTheme}

export default createConfig({
  theme,
  name: 'default',
  title: 'themer-sanity-build',

  projectId: 'kieaexhf',
  dataset: 'production',

  plugins: [
    deskTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
