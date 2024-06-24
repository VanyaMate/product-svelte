import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        alias: {
            '@/action/*': './src/action/*',
            '@/model/*': './src/model/*',
            '@/shared/*': './src/ui/shared/*',
            '@/entity/*': './src/ui/entity/*',
            '@/feature/*': './src/ui/feature/*',
            '@/widget/*': './src/ui/widget/*',
            '@/layout/*': './src/ui/layout/*',
            '@/style/*': './src/ui/style/*',
            '@/const/*': './src/const/*',
        }
    }
};

export default config;
