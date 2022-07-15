import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    documentDriven: true,
  },
  tailwindcss: {
    injectPosition: 0,
    viewer: false,
  },
});
