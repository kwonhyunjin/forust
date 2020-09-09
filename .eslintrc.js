module.exports = {
  "parserOptions": {
    "ecmaVersion": 9,
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "jest": true,
  },
  "plugins": [
    "editorconfig",
    "import",
    "html",
    "jsx-a11y",
    "react",
    "react-hooks",
  ],
  "extends": [
    "airbnb",
    "airbnb/hooks",
  ],
  "rules": {
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": [2, {
      ignore: ['^@/'],
    }],
    "import/order": [2, {
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true,
      },
    }],
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "max-len": 0,
    "no-console": [1, {
      allow: ["warn", "error"],
    }],
    "no-nested-ternary": 0,
    "react/button-has-type": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
  },
};
