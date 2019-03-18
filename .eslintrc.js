module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "import/prefer-default-export": 0,
        "import/named": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "react/jsx-one-expression-per-line": 0,
        "jsx-a11y/accessible-emoji": 0
    }
};