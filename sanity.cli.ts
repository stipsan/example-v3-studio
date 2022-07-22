import { createCliConfig } from 'sanity/cli'
import { type UserConfig } from 'vite'

export default createCliConfig({
  api: {
    projectId: 'dlr8fnur',
    dataset: 'production',
  },
  vite: (config): UserConfig => {
    return {
      ...config,
      build: {
        ...config.build,
        target: 'esnext',
      },
    }
  },
})
