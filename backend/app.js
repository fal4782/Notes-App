const express=require('express')
const app=express()
require('./db/connection')
const router=require('./api/routes/router')


app.use(express.json())
app.use(router)


app.listen(3300,()=>{
    console.log('listening on port 3300')
})



