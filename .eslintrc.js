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
    "import/no-unresolved": [2, {
      ignore: ['^@/'],
    }],
    "import/order": [2, {
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true,
      },
    }],
    "jsx-a11y/label-has-associated-control": [2, {
      "assert": "either",
    }],
    "react/button-has-type": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
  },
};
