import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://themiragestudio.github.io',
  base: '/blog',
  integrations: [
    tailwind(),
    mdx({
      components: {
        Callout: './src/components/mdx/Callout.astro',
      }
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
