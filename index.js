//Basic Express Application
//Not Really needed for the application
//All functionality is in the index.hmtl file
//Refer here for any future routing updates
const express = require('express')
const app = express()
const port = 3000
const path = require("path")

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))
