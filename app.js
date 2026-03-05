import express from 'express'
import cors from 'cors'

import userRoutes from './routes/user.routes.js'
import todoRoutes from './routes/todo.routes.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (_req, res) => {
  res.render('index', { title: 'Home' })
})

app.use('/users', userRoutes)
app.use('/todos', todoRoutes)

export default app
