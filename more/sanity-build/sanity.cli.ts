import {createCliConfig} from 'sanity/cli'
import type {UserConfig} from 'vite'

export default createCliConfig({
  api: {
    projectId: 'kieaexhf',
    dataset: 'production',
  },
  vite: (config: UserConfig): UserConfig => ({
    ...config,
    build: {...config.build, target: 'esnext'},
  }),
})
