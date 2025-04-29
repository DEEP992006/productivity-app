// all impiorts
const express = require("express")
const todo = require("../Controller/todocontroller")

const route = express.Router() // using exxpress route
route.get("/",todo.show)
route.post("/",todo.add)
route.put("/",todo.edit)
route.delete("/",todo.delete)
module.exports = route