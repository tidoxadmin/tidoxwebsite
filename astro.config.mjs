// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://tidox.online';
const ROOT = path.dirname(fileURLToPath(import.meta.url));

// Directories that are not publishable pages, mirroring scripts/link-legacy-pages.sh.
const SKIP = new Set([
  'dist', 'src', 'public', 'node_modules', 'theme', 'scripts', 'docs', 'demo',
  '.git', '.omc', '_astro', 'fonts', 'images', 'videos',
]);

// Pages that Astro already builds as routes; @astrojs/sitemap emits these itself.
const ASTRO_ROUTES = new Set(['apps']);

/**
 * The product pages predate the Astro migration. They live as pre-built static
 * directories at the repo root and reach the build through symlinks in public/,
 * which makes them assets rather than routes — so @astrojs/sitemap cannot see
 * them and emitted only two URLs.
 *
 * Collect them here and hand them over as customPages. A directory is included
 * only when its index.html canonicalises to itself, which keeps alias pages
 * (identity, local-listen, support, privacy-policy) out of the sitemap.
 */
function legacyPageUrls() {
  const urls = [];
  for (const entry of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    if (name.startsWith('.') || SKIP.has(name) || ASTRO_ROUTES.has(name)) continue;

    const indexPath = path.join(ROOT, name, 'index.html');
    if (!fs.existsSync(indexPath)) continue;

    const html = fs.readFileSync(indexPath, 'utf8');
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
    const self = `${SITE}/${name}/`;
    if (canonical !== self) continue;

    urls.push(self);
  }
  return urls.sort();
}

export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: [react(), sitemap({ customPages: legacyPageUrls() })],
  vite: {
    plugins: [tailwindcss()],
  },
});
