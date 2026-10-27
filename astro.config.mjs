import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://dhruvg.net',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
});
