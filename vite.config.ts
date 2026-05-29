// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				about: resolve(__dirname, 'about/index.html'),
				projects: resolve(__dirname, 'projects/index.html'),
			},
		},
	},
	plugins: [
		{
			name: 'mpa-clean-urls',
			configureServer(server) {
				// Intercepts local development URLs (npm run dev)
				server.middlewares.use((req, res, next) => {
					if (req.url && (req.url === '/about' || req.url === '/projects')) {
						req.url += '/';
					}
					next();
				});
			},
			configurePreviewServer(server) {
				// Intercepts local production preview URLs (npm run preview)
				server.middlewares.use((req, res, next) => {
					if (req.url && (req.url === '/about' || req.url === '/projects')) {
						req.url += '/';
					}
					next();
				});
			},
		},
	],
});
