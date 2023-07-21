module.exports = {
    root: true,
    extends: ["@nuxt/eslint-config"],
    ignorePatterns: ['**/node_modules/**', 'dist'],
    rules: {
        "vue/multi-word-component-names": "off"
    }
};