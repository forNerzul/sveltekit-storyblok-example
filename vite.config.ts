import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';

import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), mkcert()],
	server: {
		https: true
	}
};
export default config;
