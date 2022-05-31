import connectToServer from './server.js'
import connectToDatabase from './database/mongo.js'
import express from 'express'

const app = express()

connectToServer()
connectToDatabase()

