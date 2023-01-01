// @ts-check
import { randomBytes } from 'crypto'
import { readFileSync, writeFileSync } from 'fs'

const template = readFileSync('.env-example', 'utf8')

const authSecret = randomBytes(16).toString('hex')
const data = template.replace('%AUTH_SECRET%', authSecret)

writeFileSync('.env', data)
