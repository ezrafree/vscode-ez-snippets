# ~/.claude/CLAUDE.md

EZ Snippets - A VS Code extension that provides useful and not-too-opionated code snippets, with prefixes that make sense based one what you'll actually type.

## Stack

- JSON
- JavaScript

## Structure

- `snippets/` – Code snippet definitions

## Commands

- `yarn docs` - Build the `SNIPPETS.md` document

## Verification

After every change, run in this order:

- `yarn docs` - Rebuild the `SNIPPETS.md` document
- Bump the version number in `package.json`.
- Update the `CHANGELOG.md` file with a new section defining a version number and a bulleted list of the changes that were made.

## Conventions

- Snippet prefixes should match what a developer would think to type. For example, if you're about to implement an `if` statement, you'd want to type `if` and then see the snippet as one of your options. Same for if you'd want to create a `forEach()`, you'd type want to type `foreach` to see the snippet.
- Always ask first before changing an existing snippet prefix.
- Use SemVer version numbers. Use a minor version bump if the changes included features, or use a patch version bump if the changes were only bug fixes.
- Snippet descriptions should be descriptive but concise.
- Use `yarn` in this project.
