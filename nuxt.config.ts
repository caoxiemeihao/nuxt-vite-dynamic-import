import { defineNuxtConfig } from 'nuxt3';
import dynamicImport from 'vite-plugin-dynamic-import';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [dynamicImport()],
    resolve: {
      alias: {
        '~': __dirname,
      },
    },
  },
});
