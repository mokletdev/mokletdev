module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "ignorePatterns": [
    "node_modules",
    "coverage",
    ".next",
    ".swc",
    "storybook-static",
    "build",
    "src/types/analytic.ts",
    "packages/*"
  ],
  "extends": [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "unused-imports"
    // "testing-library"
  ],
  "rules": {
    "react/no-unescaped-entities": [
      "error",
      {
        "forbid": [
          ">",
          "}"
        ]
      }
    ],
    "react/prop-types": 0,
    "react-hooks/exhaustive-deps": 0,
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    // "unused-imports/no-unused-vars": [
    //   "error",
    //   {
    //     "vars": "all",
    //     "varsIgnorePattern": "^_",
    //     "args": "none",
    //     "argsIgnorePattern": "^_"
    //   }
    // ]
  },
  "overrides": [
    // Only uses Testing Library lint rules in test files
    {
      "files": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
      ],
      // "extends": ["plugin:testing-library/react"]
    }
  ]
}