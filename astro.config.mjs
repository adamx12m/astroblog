import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// export default defineConfig({
// 	site: 'https://astroblog-production-a61e.up.railway.app/',
// 	integrations: [mdx(), sitemap()],
// });

export default defineConfig({
	site: 'https://astroblog-production-a61e.up.railway.app',
	output: "server",
	adapter: node({
		mode: "standalone"
	  }),
    server: {
      host: true
    },
	integrations: [mdx(), sitemap()],
});