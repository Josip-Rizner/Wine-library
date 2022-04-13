import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const server = express()

export default function connectToServer(){
    server.listen(process.env.PORT, () => {
        console.log(`Server started on port ${process.env.PORT}`)
    })
}