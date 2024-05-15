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
        camelcase: "error", //enforce camelcase naming conventions
        "func-call-spacing": "error", //avoid these: Function (args) // should be this: Function(args)
        "no-cond-assign": [ //avoid assignments inside ifs
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
        "no-unused-vars": "off", // ensure there are no variables that are not used
        "semi": [
            "error",
            "always"
        ],
        "no-return-assign": "error" // a return statement cannot feature a variable assignment
    }
};
