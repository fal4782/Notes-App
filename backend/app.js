const express=require('express')
const app=express()
require('./db/connection')
const router=require('./api/routes/router')
//const cors= require('cors')
const path = require('path')

app.use(express.json())
app.use(router)
// app.use(cors({
//     credentials:true,
//     origin:'*',
// }));
app.use(express.static(path.join(__dirname, "../frontend")))


app.listen(3300,()=>{
    console.log('listening on port 3300')
})



