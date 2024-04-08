const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

app.use(express.static("public"))

app.use((req,res,next) =>{
    // res.send("I am hacked system")
    // console.log(req.headers)  
    req.saurabh = 56;
    console.log(`${Date.now()}is a ${req.method}`)
    fs.appendFileSync("logs.txt",`${Date.now()}is a ${req.method} \n`)
    console.log("Logged")
    next()
})

app.use((req,res,next) =>{
    console.log("second middleware")
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!' + req.saurabh)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})