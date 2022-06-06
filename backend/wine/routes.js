import { Router } from 'express'
import {createWinePost,
    editWinePost, winesGet
} from './controller.js'

export const routerWine = Router()

routerWine.post('/wine/create', createWinePost)
routerWine.post('/wine/edit/:id', editWinePost)
routerWine.post('/wine/show', winesGet)
