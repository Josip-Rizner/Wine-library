import express from 'express'
import dotenv from 'dotenv'
import { routerUser } from './user/routes.js'
import { routerWine } from './wine/routes.js'
import cookieParser from 'cookie-parser'
import path from 'path'
import __dirname from 'path'
import { appendFile } from 'fs'

dotenv.config()

const server = express()

export default function connectToServer() {

  //server.set('views', path.join('C:/Users/Josip/Documents/Faks/Diplomski/Web programiranje/Wine-library','/frontend'));
  //const publicDirectory = path.join('C:/Users/Josip/Documents/Faks/Diplomski/Web programiranje/Wine-library', './frontend');
  server.set('views', path.join('E:/IVAN_NEW/ivan/Web programiranje/Wine-library','/frontend'));
  const publicDirectory = path.join('E:/IVAN_NEW/ivan/Web programiranje/Wine-library', './frontend');
  console.log(publicDirectory);
  server.use(express.static(publicDirectory))

  server.set('view engine', 'hbs');

  /*server.get("/", (req, res) => {
    res.render("homePage/index")
  });*/
  
  server.use(express.json())
  server.use(express.urlencoded({ extended: true }))
  server.use(cookieParser())
  server.use(routerUser)
  server.use(routerWine)
  server.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
  })
}
