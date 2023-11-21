const express =  require('express')
const app = express();
const taskRoutes = require('./routes/tasks')

app.use(express.json())

app.use('/api/v1/tasks',taskRoutes)
app.listen(3000,()=>{
    console.log('Server is running...')
})