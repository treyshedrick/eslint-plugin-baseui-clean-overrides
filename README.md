# eslint-plugin-baseui-clean-overrides

Use constants instead of writing overrides inline

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-baseui-clean-overrides`:

```sh
npm install eslint-plugin-baseui-clean-overrides --save-dev
```

## Usage

Add `baseui-clean-overrides` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "baseui-clean-overrides"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "baseui-clean-overrides/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


