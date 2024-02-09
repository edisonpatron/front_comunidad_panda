import {fileURLToPath, URL} from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {PrimeVueResolver} from 'unplugin-vue-components/resolvers';
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [PrimeVueResolver()]
        }),
        Components({
            resolvers: [PrimeVueResolver()]
        }),

    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            // 'formvalidation': fileURLToPath(new URL('./vendors/formvalidation/dist/es6', import.meta.url))
        }
    }
})
