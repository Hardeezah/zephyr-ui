module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "plugin:storybook/recommended"
    ],
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // Add custom rules here
    }
  };