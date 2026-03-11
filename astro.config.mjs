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
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  },
  image: {
    // Enable Sharp image service for WebP conversion
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Default quality for all images
    quality: 80,
    // Supported formats for automatic conversion
    formats: ['webp', 'avif']
  },
  // Build optimizations
  build: {
    // Inline small assets as base64
    inlineStylesheets: 'auto'
  },
  // Prefetch configuration for better performance
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport'
  },
  // Compress HTML output
  compressHTML: true
});

