# Change Log

All notable changes to the "ez-snippets" extension will be documented in this file.

## [1.4.4]

- Update .vscodeignore list

## [1.4.3]

- Bugfix: Ignore image from VS Code extension package

## [1.4.2]

- Update project README

## [1.4.1]

- Reorganize snippets: move hooks and exports to react.json, scoped to JSX and TSX files only
- Remove use-client and use-server from javascript.json
- Fix react-component to use fragment instead of hardcoded div
- Fix reactnative-component to use style prop instead of className
- Clean up react-typescript component boilerplate — remove opinionated imports and hardcoded props
- Clean up reactnative-typescript component boilerplate — remove deprecated FunctionComponent pattern

## [1.4.0]

- Add React hook snippets: useState (with auto-capitalized setter), useEffect, useCallback, useMemo, useRef, useContext, useReducer
- Add export snippets: export-default, export-named, export-fn
- Add Next.js directive snippets: use-client, use-server
- Improve useEffect snippet to include dependency array and fix indentation

## [1.3.0]

- Add JavaScript snippets: console.table, console.error, console.time, console.timeEnd, forEach, map, filter, and reduce
- Fix testfile snippet indentation and update to use @testing-library/react with tab stops on import

## [1.2.0]

- Add JavaScript snippets: array and object destructuring, Promise, Promise.all, fetch, ternary, nullish coalescing, optional chaining, for-of, and for-in loops

## [1.1.0]

- Add JavaScript snippets: arrow functions, async arrow functions, try/catch, setTimeout, setInterval, localStorage get/set
- Standardize all snippet prefixes to kebab-case
- Add auto-generated SNIPPETS.md for full snippet reference

## [1.0.2]

- Add HTML meta and link snippets.
- Add LICENSE file.

## [1.0.1]

- Add HTML page layout snippets.
- Enable CSS snippets for LESS and SCSS languages.

## [1.0.0]

- Initial release, featuring various boilerplate HTML, CSS, and JavaScript snippets.
