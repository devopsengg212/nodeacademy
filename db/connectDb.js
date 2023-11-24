const mongoose = require('mongoose')
require('dotenv').config()

const connectDb = async () =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI) 
    console.log("Database connected\nThe host is :" ,
    connect.connection.host,"\nThe database is :",
    connect.connection.name )}
    catch(err){
        console.log(err)
        exit(1)
    }
}

module.exports = {connectDb}