//CRUD Oepration

//Create
use("Cruddb")

// db.createCollection("courses")

// db.courses.insertOne({
//     name : "saurabh",
//     price : "0",
//     assignment : "12",
//     project : "45"
// })

// //Read

// let a = db.courses.find({price: "0" })

// console.log(a.toArray())


//update
// db.courses.updateOne({price : "0"},{$set:{price : 100}})
db.courses.updateMany({price : "0"},{$set:{price : 100}})

// Delete

// db.courses.deleteOne({price:100})
db.courses.deleteMany({price:100})
