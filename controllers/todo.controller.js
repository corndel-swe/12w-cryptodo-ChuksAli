import { db } from '../db/config.js'

export const renderUserTodos = async (req, res) => {
  try {
    // Get the username and password from the Authorization header
    const base64Credentials = req.headers.authorization.split(' ')[1]
    const [username, password] = atob(base64Credentials).split(':')

    // Get the user from the database
    const user = await db('users').where({ username }).first()
    if (!user) throw new Error(`User ${username} not found.`)

    // Check if the password is correct
    const result = user.password === password
    if (!result) throw new Error('Password invalid.')

    // Get the todos for the user
    const todos = await db('todos').where({ user_id: user.id })

    // Render the list of todos
    res.render('todos/list', { todos })
  } catch (error) {
    // If there is an error, trigger the login dialogue
    console.log(error.message)
    res.set('WWW-Authenticate', 'Basic realm="cryptodo"')
    return res.status(401).send('Invalid credentials.')
  }
}
