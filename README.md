# eslint-plugin-baseui-clean-overrides

Use constants instead of writing overrides inline. 

## Why?

Overrides in baseui can be overwhelming when using them inline. This plugin solves that by enforcing users to spread the overrides prop into the component, so you can focus on the logic!

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


## Examples

#### The following would be acceptable
```sh
import React, { useState } from "react";
import { Input } from "baseui/input";

const inputOverrides = {
    overrides: {
        Root: {
          style: ({ $theme }) => ({
            outline: `${$theme.colors.warning600} solid`,
            backgroundColor: $theme.colors.warning600
          })
        }
    }
}

export default () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Controlled Input"
      {...inputOverrides}
    />
  );
}
```

#### The following would throw a linting error/warning
```sh
import React, { useState } from "react";
import { Input } from "baseui/input";

export default () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Controlled Input"
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            outline: `${$theme.colors.warning600} solid`,
            backgroundColor: $theme.colors.warning600
          })
        },
      }}
    />
  );
}
```


