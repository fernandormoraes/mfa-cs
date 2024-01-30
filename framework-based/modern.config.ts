import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

export default defineConfig({
  runtime: {
    router: true,
    state: true,
    masterApp: {
      apps: [
        {
          name: 'Dashboard',
          entry: 'http://127.0.0.1:8081/',
        },
        {
          name: 'Inventory',
          entry: 'http://localhost:8082',
          sandbox: {
            modules: [
              () => ({
                override: {
                  localStorage: window.localStorage,
                },
              }),
            ],
          }
        },
        {
          name: 'Product',
          entry: 'http://localhost:8083',
          sandbox: {
            modules: [
              () => ({
                override: {
                  localStorage: window.localStorage,
                },
              }),
            ],
          }
        },
      ],
    },
  },
  plugins: [appTools(), garfishPlugin()],
});
