# EZ Snippets

<p>
  <a href="https://marketplace.visualstudio.com/items?itemName=ezrafree.ez-snippets">
    <img src="https://vsmarketplacebadges.dev/version/ezrafree.ez-snippets.svg" alt="Version" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=ezrafree.ez-snippets">
    <img src="https://vsmarketplacebadges.dev/installs/ezrafree.ez-snippets.svg" alt="Installs" />
  </a>
</p>

This is a collection of useful web development code snippets for VS Code. This extension offers snippets for HTML, CSS, JavaScript, React, TypeScript, React Native and Jest.

## Install Instructions

This extension can be installed through the VS Code Marketplace:

[https://marketplace.visualstudio.com/items?itemName=ezrafree.ez-snippets](https://marketplace.visualstudio.com/items?itemName=ezrafree.ez-snippets)

## Suggestions Ordering

If you want to show snippet suggestions first add this to your VS Code settings:

```json
"editor.snippetSuggestions": "top"
```

## Features

### HTML

| Shortcut               | Command                                                         |
| ---------------------- | --------------------------------------------------------------- |
| `html`                 | an HTML boilerplate with tab stops                              |
| `meta-og`              | OpenGraph meta tags                                             |
| `meta-twitter`         | Twitter meta tags                                               |
| `script-src`           | `<script src="${1}" ${2\|defer,async\|}></script>`              |
| `script`               | `<script></script>`                                             |
| `style`                | `<style></style>`                                               |
| `link`                 | `<link rel="stylesheet" href="$1">`                             |
| `font-face`            | a self-hosted `@font-face` block                                |
| `html-layout`          | a simple HTML page layout with header, main & footer            |
| `html-layout-sidebar`  | a simple HTML page layout with header, main, aside, & footer    |

### HTML

| Shortcut               | Command                                                         |
| ---------------------- | --------------------------------------------------------------- |
| `box-sizing`           | box-sizing reset (include padding+border in width/height)       |
| `@media`               | a media query with tab stops                                    |
| `root`                 | a custom CSS properties block                                   |
| `css-reset`            | a base CSS reset                                                |
| `flex-center`          | Flexbox centering properties                                    |
| `grid`                 | CSS grid layout                                                 |
| `hidden`               | Properties to visually hide but keep element accessible         |
| `css-layout`           | The CSS for the markup that `html-layout` implements            |
| `css-layout-sidebar`   | The CSS for the markup that `html-layout-sidebar` implements    |

### Console Logs

| Shortcut   | Command                                                               |
| ---------- | --------------------------------------------------------------------- |
| `cl`       | `console.log('foo: ', foo)`                                           |
| `clog`     | `console.log(foo)`                                                    |
| `cljson`   | `console.log(JSON.stringify(foo, null, 2))`                           |
| `clobj`    | `console.log({ foo })`                                                |
| `cleslint` | `// eslint-disable-next-line no-console \n console.log('$1: ', $1)`   |

### Eslint

| Shortcut            | Command                                                            |
| ------------------- | ------------------------------------------------------------------ |
| `esdisable`         | `/* eslint-disable @typescript-eslint/no-unused-vars */`           |
| `esdisablenextline` | `/* eslint-disable-next-line @typescript-eslint/no-unused-vars */` |

### Import Statements

| Shortcut | Command                                |
| -------- | -------------------------------------- |
| `imp`    | `import defaultExport from 'module'`   |
| `impn`   | `import { namedExport } from 'module'` |

### Jest Unit Tests

| Shortcut       | Command                               |
| -------------- | ------------------------------------- |
| `testfile`     | Unit test boilerplate                 |
| `testdescribe` | `describe('', () => {})`              |
| `testspec`     | `it('', () => {})`                    |
| `testassert`   | `expect(variable).toEqual(result)`    |

### React

| Shortcut                 | Command                            |
| ------------------------ | ---------------------------------- |
| `react-typescript`       | React component boilerplate        |
| `reactnative-typescript` | React Native component boilerplate |
| `use-effect`             | React useEffect hook boilerplate   |
