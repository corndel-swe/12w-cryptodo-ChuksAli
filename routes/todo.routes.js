import { Router } from 'express'
import { renderUserTodos } from '../controllers/todo.controller.js'
import { createTodo } from '../controllers/todo.controller.js'

const router = Router()

router.get('/', renderUserTodos)

router.get('/new', (req, res) => {
  res.render('todos/new')
})

router.post('/', createTodo)
export default router
