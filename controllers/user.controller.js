import { db } from '../db/config.js'

export const createUser = async (req, res) => {
  const { username, email, password } = req.body

  const sql = `
  INSERT INTO users
  (username, email, password)
  VALUES (?, ?, ?)
  `

  await db.raw(sql, [username, email, password])
  res.redirect('/todos')
}
