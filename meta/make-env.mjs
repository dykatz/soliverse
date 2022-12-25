// @ts-check
import { readFileSync, writeFileSync } from 'fs'

const data = readFileSync('.env-example', 'utf8')

// ...

writeFileSync('.env', data)
