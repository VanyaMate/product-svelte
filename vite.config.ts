import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';


export default defineConfig(({ mode }) => ({
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
    define : {
        __IS_DEV__: JSON.stringify(mode === 'development'),
        __API__   : JSON.stringify(
            mode === 'development'
            ? 'http://localhost:3000/api'
            : 'https://product-backend-production-7913.up.railway.app/api',
        ),
    },
}));
