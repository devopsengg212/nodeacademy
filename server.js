const express = require('express')
const app = express()
require('dotenv').config()
const contactRoutes = require('./routes/contactRoutes')
const userRoutes = require('./routes/userRoutes')
const errorHandler = require('./middleware/error-handler')
const {connectDb} = require('./db/connectDb')

connectDb()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h2>Welcome to Home Page </h2>')
})

app.use('/api/contacts',contactRoutes)
app.use('/api/users',userRoutes)

app.use(errorHandler)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})