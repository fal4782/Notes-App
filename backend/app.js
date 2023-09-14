const express = require("express")
require('./db/connection.js')
const noteRouter = require('./api/routes/router.js')

const app = express()
const port = process.argv[2] || 3000

app.use(express.json())
app.use(noteRouter)

app.listen(port,()=>{
    console.log("Listening on port ",port);
})
