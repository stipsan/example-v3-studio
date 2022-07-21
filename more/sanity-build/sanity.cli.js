import {createCliConfig} from 'sanity/cli'

export default createCliConfig({
  api: {
    projectId: 'kieaexhf',
    dataset: 'production',
  },
  vite: (config) => ({
    ...config,
    build: {...config.build, target: 'esnext'},
  }),
})
