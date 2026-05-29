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
	// Add this server configuration to handle clean URLs in development
	server: {
		watch: {
			usePolling: true,
		},
		// Remap clean URLs to their respective index.html files
		proxy: {
			'^/(about|projects)$': {
				target: 'http://localhost:5173',
				rewrite: (path) => `${path}/`,
			},
		},
	},
});
