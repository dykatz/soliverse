// @ts-check
import postgres from 'postgres'

const url = process.env.DATABASE_URL
if (url === undefined) throw 'error: environment variable `DATABASE_URL` is undefined'

const sql = postgres(url)

export default sql
