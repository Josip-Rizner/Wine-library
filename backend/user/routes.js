import { Router } from 'express'
import {
  indexGet,
  signupGet,
  signupPost,
  loginGet,
  loginPost,
  logoutGet
} from './controller.js'



export const routerUser = Router()

routerUser.get('/', indexGet)
routerUser.get('/signup', signupGet)
routerUser.post('/signup', signupPost)
routerUser.get('/login', loginGet)
routerUser.post('/login', loginPost)
routerUser.get('/logout', logoutGet)
