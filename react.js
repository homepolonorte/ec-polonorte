module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
    ignorePatterns: ["node_modules"],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:sonarjs/recommended",
    "plugin:react-hooks/recommended",
    "plugin:cypress/recommended",
    "plugin:react/jsx-runtime"
  ],
  plugins: ["react", "react-hooks", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "import/no-cycle": "off",
    "import/no-default-export": "error",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "no-console": "error",
    "no-nested-ternary": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-no-useless-fragment": [
      2,
      {
        allowExpressions: true,
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-unknown-property": [
      2,
      {
        ignore: ["jsx"],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/control-has-associated-label": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  },
};
