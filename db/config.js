import knex from 'knex'

const DB_URL = new URL('../db.sqlite', import.meta.url).pathname

console.log(DB_URL)

export const db = knex({
  client: 'sqlite3',
  connection: {
    filename: DB_URL
  },
  useNullAsDefault: true
})
