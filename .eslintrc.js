module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // uses react-specific linting rules
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier

    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    'prettier/react', // disables react-specific linting rules that conflict with prettier
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // // Allows for the parsing of JSX
    }
  },
  plugins: ['prettier'],
  env: {
    browser: true,
    jasmine: true,
    jest: true
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_'}]
  }
};
