# eslint-plugin-baseui-clean-overrides

Use constants instead of writing overrides inline.

## Why?

Overrides in baseui can be overwhelming when using them inline with other react components. This plugin solves that by enforcing users to spread the overrides prop into the component instead of wriing the override inline.

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


Then configure to use the basic rule under the rules section.

```json
{
    "rules": {
        "baseui-clean-overrides/basic": 2
    }
}
```


