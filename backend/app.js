const express = require("express")
const Note = require('./model/notes.js')
// const mongoose = require('mongoose')
require('./connection.js')
const noteRouter = require('./routes/router.js')

const app = express()
const port = process.argv[2] || 3000

app.use(express.json())
app.use(noteRouter)

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})

