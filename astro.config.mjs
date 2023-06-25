import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://astroblog-production-a61e.up.railway.app/',
	integrations: [mdx(), sitemap()],
});
