import vue from 'eslint-plugin-vue'

export default [
    {
        ignores: [
            'node_modules/**',
            'vendor/**',
            'public/**',
        ],
    },
    {
        files: ['**/*.js', '**/*.vue'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            vue,
        },
        rules: {
            'no-unused-vars': 'warn',
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'off',
        },
    },
    ...vue.configs['flat/recommended'],
]
