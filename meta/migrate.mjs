// @ts-check
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import postgres from 'postgres'

/** @param name {string} */
const create = name => {
  const timestamp = new Date()
  const year = timestamp.getUTCFullYear().toString().padStart(4, '0')
  const month = (timestamp.getUTCMonth() + 1).toString().padStart(2, '0')
  const days = timestamp.getUTCDate().toString().padStart(2, '0')
  const hours = timestamp.getUTCHours().toString().padStart(2, '0')
  const minutes = timestamp.getUTCMinutes().toString().padStart(2, '0')
  const seconds = timestamp.getUTCSeconds().toString().padStart(2, '0')
  const label = `migrations/${year}${month}${days}${hours}${minutes}${seconds}_${name}`

  mkdirSync(label, { recursive: true })

  writeFileSync(`${label}/up.sql`, '-- migration sql code')
  writeFileSync(`${label}/down.sql`, '-- rollback sql code')
}

const getSql = () => {
  const envFile = readFileSync('.env', 'utf8')
  const databaseUrlPattern = /(?:^|\n)\s*DATABASE_URL\s*=\s*(.*)\s*(?:\r?\n|$)/
  const search = databaseUrlPattern.exec(envFile)
  if (search === null) throw 'error: failed to find DATABASE_URL in .env'
  let searchResult = search[1]
  if ((searchResult.startsWith("'") && searchResult.endsWith("'")) || (searchResult.startsWith('"') && searchResult.endsWith('"'))) searchResult = searchResult.substring(1, searchResult.length - 1)
  return postgres(searchResult)
}

/**
 * @param sql {postgres.Sql<{}>}
 * @param path {string}
 */
const runMigration = async (sql, path) => {
  await sql.file(`migrations/${path}/up.sql`)

  await sql`CREATE SCHEMA IF NOT EXISTS Meta`

  await sql`CREATE TABLE IF NOT EXISTS Meta.AppliedMigrations (
    name TEXT NOT NULL PRIMARY KEY,
    when TIMESTAMP NOT NULL DEFAULT NOW
  )`

  await sql`INSERT INTO Meta.AppliedMigrations (name) VALUES (${path})`
  console.log(`Applied migration: ${path}`)
}

/** @param sql {postgres.Sql<{}>} */
const migrate = async sql => {
  const ranNames = (await sql`SELECT name FROM Meta.AppliedMigrations`).map(x => x.name)
  const createdNames = readdirSync('migrations')
  const namesToRun = createdNames.filter(n => !ranNames.includes(n)).sort()
  for (const name of namesToRun) await runMigration(sql, name)
}

/** @param sql {postgres.Sql<{}>} */
const rollback = async sql => {
  const [{ name }] = await sql`SELECT name FROM Meta.AppliedMigrations ORDER BY when DESC LIMIT 1`
  await sql.file(`migrations/${name}/down.sql`)
  await sql`DELETE FROM Meta.AppliedMigrations WHERE name = ${name}`
  console.log(`Rolled back migration: ${name}`)
}

const command = process.argv[2]

switch (command) {
  case 'create':
    const name = process.argv[3]
    create(name)
    break
  case 'up':
    migrate(getSql())
    break
  case 'down':
    rollback(getSql())
    break
}
