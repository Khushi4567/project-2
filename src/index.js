// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
// import connectDB from "./db";
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})


connectDB()









/* 
import express from "express"
const app = express()

(async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DBNAME}`)
        app.on("error", (error) => {
            console.log("Error app is not being able to talk to the database", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listning on PORT ${process.env.PORT}`)
        })
    }catch(error){
        console.error("ERROR: ",error)
    }
})()
*/