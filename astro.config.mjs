import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/era-residence-showcase/',
  output: 'static',
  integrations: [tailwind()],
});