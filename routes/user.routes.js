import { Router } from 'express'
import { createUser } from '../controllers/user.controller.js'

const router = Router()

router.post('/', createUser)

router.get('/new', (req, res) => {
  res.render('users/new')
})

export default router
