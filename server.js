const express = require('express')
const app = express()
require('dotenv').config()
const contactRoutes = require('./routes/contactRoutes')

app.get('/',(req,res)=>{
    res.send('<h2>Welcome to Home Page </h2>')
})

app.use('/api/contacts',contactRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})