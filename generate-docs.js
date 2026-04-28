import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join, basename } from 'path'

const SNIPPETS_DIR = './snippets'
const OUTPUT_FILE = './SNIPPETS.md'

const DISPLAY_NAMES = {
  'html': 'HTML',
  'css': 'CSS',
  'javascript': 'JavaScript',
  'typescript': 'TypeScript',
  'javascriptreact': 'React / JSX',
  'typescriptreact': 'React / TypeScript',
  'testing': 'Unit Tests',
}

const getDisplayName = (filename) => {
  const key = basename(filename, '.json').toLowerCase()
  return DISPLAY_NAMES[key] ?? key.charAt(0).toUpperCase() + key.slice(1)
}

const files = readdirSync(SNIPPETS_DIR)
  .filter(f => f.endsWith('.json'))
  .sort((a, b) => {
    const aKey = basename(a, '.json').toLowerCase()
    const bKey = basename(b, '.json').toLowerCase()
    const keys = Object.keys(DISPLAY_NAMES)
    const aIndex = keys.indexOf(aKey)
    const bIndex = keys.indexOf(bKey)
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  })

let output = `# Snippets\n\n`

for (const file of files) {
  const name = getDisplayName(file)
  const snippets = JSON.parse(readFileSync(join(SNIPPETS_DIR, file), 'utf8'))
  const entries = Object.values(snippets)

  if (entries.length === 0) continue

  output += `## ${name}\n\n`
  output += `| Prefix | Description |\n`
  output += `| ------ | ----------- |\n`

  for (const { prefix, description } of entries) {
    output += `| \`${prefix}\` | ${description ?? ''} |\n`
  }

  output += `\n`
}

writeFileSync(OUTPUT_FILE, output.trimEnd() + '\n')
console.log(`Generated ${OUTPUT_FILE}`)
