import { defineConfig } from 'astro/config';

// Base-Pfad ist umgebungsabhängig:
//  - GitHub Pages (Projekt-Repo): Unterpfad "/IVF-webseite" (Standard)
//  - Netlify / eigene Domain (Root): SITE_BASE="/" setzen
//  - Finale Live-Domain (ivf.at): ebenfalls SITE_BASE="/"
const base = process.env.SITE_BASE ?? '/IVF-webseite';
const site = process.env.SITE_URL ?? 'https://nicolada9-cmd.github.io';

export default defineConfig({
  site,
  base,
  build: { format: 'directory' },
});
