import { mergeConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default {
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [viteTsconfigPaths()],
      resolve: {
        alias: {
          '@': '/src',
        },
      },
    });
  },
};
