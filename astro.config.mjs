// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Determine the base path depending on the environment
const base = process.env.NODE_ENV === 'production' ? '/WebSiteAsteroids1979' : '/';

console.log(`[DEBUG] NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`[DEBUG] Using base path: ${base}`);

// https://astro.build/config
export default defineConfig({
  site: 'https://luisplata.github.io',
  base: base,
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
