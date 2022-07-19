import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
// @ts-expect-error -- TODO figure out how to get typings for this
import { theme } from 'https://themer.creativecody.dev/api/hues?default=60929e&primary=d8172e&transparent=60929e&positive=43d675;300&caution=fbd024;200&lightest=fcfdfd&darkest=0d1415&min=1'

//import {googleMapsInput} from '@sanity/google-maps-input'
import { schemaTypes } from './schemas'

export default createConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: 'dlr8fnur',
  dataset: 'production',
  theme,

  plugins: [
    deskTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
