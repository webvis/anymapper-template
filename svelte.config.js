/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		},
		paths: {
			base: '/anymapper-template-temp/build',
		},
	}
};

export default config;
