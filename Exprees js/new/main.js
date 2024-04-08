const express = require("express");
const app = express();
const blog = require('./routes/bog')
const shop = require('./routes/shop')
const port = 3000;

app.use(express.static("public"));
app.use('/blog',blog)
app.use('/shop',shop)

app.get("/", (req, res) => {
  res.send("Hello World23!");
  console.log("I am get request");
});

app.post("/", (req, res) => {
  res.send("This is post request");
  console.log("I am Post request");
});

app.delete("/", (req, res) => {
  res.send("This is delete request");
  console.log("I am delete request");
});

app.get("/main",(req,res)=>{
  res.sendFile("templates/main.html",{root:__dirname});
  console.log("I am main.html");
})

app.get("/api",(req,res)=>{
  res.json({a:1,b:2,c:3,d:4});
  console.log("I am main.html");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
