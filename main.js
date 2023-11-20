const express = require('express')
const {readFileSync,writeFileSync} = require('fs')
const app = express();

const home = readFileSync('./index.html','utf-8')
const about = readFileSync('./about.html','utf-8')
const notfound = readFileSync('./notFound.html','utf-8')

app.get("/",(req,res)=>{
res.status(200).end(home)
})

app.get("/about",(req,res)=>{
    res.status(200).end(about)
    })

    app.get("*",(req,res)=>{
        res.status(200).end(notfound)
        })
        



app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

 