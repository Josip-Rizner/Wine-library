import { Router } from 'express'
import {
  createWinePost,
  editWinePost,
  winesGet,
  winesGetAll,
  wineDelete
} from './controller.js'

export const routerWine = Router()

routerWine.post('/wine/create', createWinePost)
routerWine.post('/wine/edit/:id', editWinePost)
routerWine.get('/wine', winesGet)
routerWine.get('/wines', winesGetAll)
routerWine.delete('/wine/delete/:wineID', wineDelete)