// @ts-check
import { defineConfig } from 'astro/config';

// Set `site` to the municipality's final domain before deploying.
export default defineConfig({
  site: 'https://mirikmunicipality.example',
  redirects: { '/projects': '/notices/#projects', '/announcements': '/notices/', '/town-guide': '/about/#town-guide' },
});
