import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export default function connectToDatabase(){
    mongoose.connect(process.env.MONGO_DB_URI)
    mongoose.connection.on("connected",() => {console.log("Database is successfully connected!")})
    mongoose.connection.on("disconnected", ()=>{console.log("Database is disconnected!")})
    mongoose.connection.on("error", ()=>{console.error("There was error with connecting to database!")})
}