import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import svgLoader from "vite-svg-loader";
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        AutoImport({
            imports: ['vue', 'vue-router'],
            dirs: ['./composables'],
            vueTemplate: true
        }),
        Components({
            dirs: [
                './components/*'
            ],
            dts: true,
            directoryAsNamespace: true
        }),
        svgLoader(),
        UnoCSS()
    ],
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url))
        }
    }
})
