module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
      extends: "eslint:recommended",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",s
        sourceType: "module",
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "windows"],
        quotes: ["error", "single"],
        semi: ["error", "always"],
    },
};
