import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const { theme } = await import(
  // @ts-expect-error -- TODO figure out how to get typings for this
  /* webpackIgnore: true */ 'https://themer.creativecody.dev/api/hues?preset=verdant&min=1'
)
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
