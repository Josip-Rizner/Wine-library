import { Router } from 'express'
import {createWinePost,
    editWinePost
} from './controller.js'

export const routerWine = Router()

routerWine.post('/wine/create', createWinePost)
routerWine.post('/wine/edit/:id', editWinePost)
