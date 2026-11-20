// @ts-check
import { defineConfig } from 'astro/config';

// Testphase auf GitHub Pages unter plumpsssack.github.io/reinekefunk/.
// Sobald reinekefunk.de läuft: site auf 'https://reinekefunk.de' setzen und base löschen.
export default defineConfig({
  site: 'https://plumpsssack.github.io',
  base: '/reinekefunk/',
});
