const express = require('express')
const mongoose = require('mongoose');

const Employee = require('./model/employee');
const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', {foo: 'FOO'});
})

app.get('/generate', async(req, res) => {
   
    for (let index=0 ;index<10;index++){
        let e = await Employee.create({
            name: "saurabh",
            salary : 450000,
            language : "python",
            city : "sinnar",
            isManager : true
        })
        console.log(e)
    }
    res.render('index', {foo: 'FOO'});
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})