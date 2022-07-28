import vue from 'rollup-plugin-vue'
import styles from "rollup-plugin-styles";
import path from "path";
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
    {
        // dedupe: ['vue'],
        input: 'src/index.js',
        output: [
            {
                format: 'esm',
                file: 'dist/index.mjs',
                assetFileNames: "[name][extname]"
            },
            {
                format: 'cjs',
                file: 'dist/index.js',
                assetFileNames: "[name][extname]"
            },

        ],
        plugins: [
            vue(), peerDepsExternal(),styles({
                mode: "extract",
                extensions: [".scss", ".css", ".pcss", ".postcss", ".sss"],
                import: {
                    extensions: [".scss", ".css", ".pcss", ".postcss", ".sss"]
                },
                sass: {
                    impl: "sass",
                    includePaths: [path.resolve("../../node_modules")]
                }
            })
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
            '@tiptap/extension-mention',
            'vue-filepond',
            'filepond/dist/filepond.min.css',
            'filepond-plugin-file-validate-type',
            'filepond-plugin-image-preview',
            'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css',
        ]
    }
]
