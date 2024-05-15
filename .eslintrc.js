module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        camelcase: "error",
        "func-call-spacing": "error",
        "no-cond-assign": [
            "error",
            "always"
        ],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "no-unused-vars": "off",
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "after-used",
                caughtErrors: "all"
            }
        ],
        "no-use-before-define": "error",
        "no-return-assign": "error"
    }
};
