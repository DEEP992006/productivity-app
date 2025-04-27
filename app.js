//importing all  module and packages
const express = require('express')
const todoroute = require("./Route/todoroute")
const dbconnect = require("./core/db")
//express setup
const app = express()
const port = 5000
//middlewares 
app.use(express.json()) // to parse json 
// data base connection
try{
   dbconnect()
}
catch{
    console.log("error");
    
}// all route
app.use("/todo",todoroute)
app.get('/', (req, res) => {
  res.send('welcome to todo app')
})

// port starting
app.listen(port, () => {
  console.log(`app running on ${port}`)
})
