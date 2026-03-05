import { Router } from 'express'
import { renderUserTodos } from '../controllers/todo.controller.js'

const router = Router()

router.get('/', renderUserTodos)

export default router
