import vue from 'rollup-plugin-vue'
import styles from "rollup-plugin-styles";
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
    {
        dedupe: ['vue'],
        input: 'src/index.js',
        output: [
            {
                format: 'esm',
                file: 'dist/index.mjs'
            },
            {
                format: 'cjs',
                file: 'dist/index.js'
            },

        ],
        plugins: [
            vue(), peerDepsExternal(),styles({mode: "extract"})
        ],

        external: [
            'moment',
            'tippy.js',
            '@tiptap/vue-3',
            'core-js/internals/internal-state',
            'vue-country-flag-next',
            '@headlessui/vue',
            'vue-multiselect',
            'vue-the-mask',
            'vue3-datepicker',
            'date-fns/locale',
            '@tiptap/extension-document',
            '@tiptap/extension-paragraph',
            '@tiptap/extension-text ',
            '@tiptap/extension-text',
            '@tiptap/starter-kit',
            '@tiptap/extension-mention'
        ]
    }
]
