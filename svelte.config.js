import adapter from '@sveltejs/adapter-auto';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        alias: {
            "@/entity/*": "./src/ui/entity/*",
            "@/feature/*": "./src/ui/feature/*",
            "@/shared/*": "./src/ui/shared/*",
            "@/widget/*": "./src/ui/widget/*",
            "@/styles/*": "./src/ui/styles/*",
            "@/model/*": "./src/model/*",
            "@/lib/*": "./src/lib/*",
            "@/action/*": "./src/action/*"
        }
    }
};

export default config;
