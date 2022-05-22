import express from 'express'
import dotenv from 'dotenv'
import { routerUser } from './user/routes.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const server = express()

export default function connectToServer() {
  server.use(express.json())
  server.use(express.urlencoded({ extended: true }))
  server.use(cookieParser())
  server.use(routerUser)
  server.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
  })
}
