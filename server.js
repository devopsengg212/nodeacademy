const express = require('express')
const app = express()
require('dotenv').config()


app.get('/',(req,res)=>{
    res.send('<h2>Welcome to Home Page </h2>')
})



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})