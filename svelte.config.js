/** @type {import('@sveltejs/kit').Config} */

const dev = process.env.NODE_ENV === 'development';

import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		},
		paths: {
			base: dev ? '' : '/anymapper-template-temp/build',
		},
		appDir: 'app',
	}
};

export default config;
