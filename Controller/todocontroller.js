//all imports
const mongoose = require("mongoose")
const Todos = require("../Model/todomodel")
// show all todos
exports.show = async(req,res) => {
    let all_todos =await Todos.find({})
    res.send(all_todos)
}
// add new todo
exports.add = async(req,res) => {
    let { name,description,priority } = req.body //get data from request body
    const ab = new Todos({
        name:name,
        description:description,
        priority:priority
    })  
    const saved_todo = await ab.save() // saving to db
    res.send(saved_todo) //sending response
}
// editing informatio0n of todo
exports.edit = async(req,res) => {
    const { name,new_todo } = req.body  //get data from request body
    let todo_update =await Todos.findOneAndUpdate({name:name},new_todo,{new:true}) //finding todo and updating details
    res.send(`success full chenched to ${todo_update}`) //sending updatd todo as response

}
// deleting todo
exports.delete = async (req,res) => {
    const {name} = req.body   //get data from request body
    await Todos.findOneAndDelete({name:name}) //findong todo and deleteing
    res.send(`${name} deleted succesfully`) // sending response that succeffulllty eleted
}