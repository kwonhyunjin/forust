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
    "react/jsx-props-no-spreading": "off",
  },
};
