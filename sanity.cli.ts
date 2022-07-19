import { createCliConfig } from 'sanity/cli'
import { type UserConfig } from "vite";

export default createCliConfig({
  api: {
    projectId: 'dlr8fnur',
    dataset: 'production',
  },
  vite: (config): UserConfig => {
    return {
      ...config,
      plugins,
      build: {
        ...config.build,
        minify: 'esbuild',
        target: "esnext"
      },
    };
  },
})
