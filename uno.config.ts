
import {
    defineConfig,
    transformerVariantGroup,
    presetWebFonts,
    presetUno,
    presetMini
} from 'unocss'

export default defineConfig({

    safelist: [
    ],

    shortcuts: [
        {
            "after:no-content": "after:content-['']",
            "before:no-content": "before:content-['']",
        },
    ],
    rules: [
        ['text-fill-transparent', {
            '-webkit-text-fill-color': 'transparent',
            'text-fill-color': 'transparent'
        }],
        ['backdrop-blur-xs', {
            'backdrop-filter': 'blur(2px)',
            '-webkit-backdrop-filter': 'blur(2px)',
        }],
        ['max-w-8xl', {
            'max-width': '85.375rem',
        }],
    ],
    extractors: [],
    presets: [
        presetUno(),
        presetMini(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                'nunito': 'Nunito'
            },
        }),
    ],
    transformers: [
        transformerVariantGroup(),
    ],
}) 
