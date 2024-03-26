import fs from "fs/promises"
// const fs = require("fs")

// console.log(fs);

console.log("starting")

// fs.writeFileSync("saurabh.txt","Hi I am sSaurabh")
// fs.writeFile("Saurabh2.txt", " Hi i am saurabh")

// fs.writeFile("saurabh2.txt", "Harry is a good boy2" , () =>{
//     console.log("done")
// })

let a = await fs.writeFile("Saurabhc.txt", "saurabh chavanke");
