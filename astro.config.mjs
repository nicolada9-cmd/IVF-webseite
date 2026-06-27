import { defineConfig } from 'astro/config';

// Platzhalter-Domain – wird auf die finale Live-Domain (ivf.at) gesetzt.
export default defineConfig({
  site: 'https://www.ivf.at',
  build: { format: 'directory' },
});
