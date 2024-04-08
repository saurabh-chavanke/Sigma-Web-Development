const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

let arr = [1,54,65]

app.get('/', (req, res) => {
    let sitename = "Saurabh";
    let search = "Serach Box"
  res.render("index",{sitename,search,arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Saurabh is best ";
    let blogcontent = "Saurabh is very big brand"
  res.render("templets/blog.html",{blogTitle,blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})