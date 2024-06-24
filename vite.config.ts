import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';


export default defineConfig({
    plugins: [ sveltekit() ],
    test   : {
        include: [ 'src/**/*.{test,spec}.{js,ts}' ],
    },
    resolve: {
        alias: {
            '@/action/*' : './src/action/*',
            '@/model/*'  : './src/model/*',
            '@/shared/*' : './src/ui/shared/*',
            '@/entity/*' : './src/ui/entity/*',
            '@/feature/*': './src/ui/feature/*',
            '@/widget/*' : './src/ui/widget/*',
            '@/layout/*' : './src/ui/layout/*',
            '@/const/*'  : './src/const/*',
        },
    },
});
