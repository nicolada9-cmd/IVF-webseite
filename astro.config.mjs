import { defineConfig } from 'astro/config';

// Vorschau läuft auf GitHub Pages unter dem Unterpfad /IVF-webseite/.
// Für die finale Live-Domain (ivf.at) später: site auf 'https://www.ivf.at'
// setzen und base auf '/' (oder die base-Zeile entfernen).
export default defineConfig({
  site: 'https://nicolada9-cmd.github.io',
  base: '/IVF-webseite',
  build: { format: 'directory' },
});
