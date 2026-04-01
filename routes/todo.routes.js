import { Router } from 'express'
import { renderUserTodos } from '../controllers/todo.controller.js'
import { createTodo } from '../controllers/todo.controller.js'
import { protect } from '../middleware/protect.js'

const router = Router()

router.get('/',  protect, renderUserTodos)

router.get('/new', (req, res) => {
  res.render('todos/new')
})

router.post('/', protect, createTodo)
export default router
