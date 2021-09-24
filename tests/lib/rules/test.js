"use strict";
const eslint = require('eslint');
const rule = require("../../../lib/rules/basic");

const ruleTester = new eslint.RuleTester({
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: { jsx: true },
    },
});

ruleTester.run("eslint-plugin-baseui-clean-overrides", rule, {

    valid: [
        "const test = { overrides: { test: 20 } }",
    ],

    invalid: [
        {
            code: "<Test overrides={ { test: 20 } } />",
            errors: [{
                message: "Place overrides in const instead of inline",
                type: "JSXIdentifier"
            }]
        }
    ]
});