//importing modules
const mongoose = require("mongoose")
//todo schema 
todoSchema = new mongoose.Schema({
    name:String,
    description:String,
    priority:{
        type:String,
        enum:["low","med","high"],
        default:"low"
    }
})
//todo model
todomodel = mongoose.model("todomodel",todoSchema)
module.exports = todomodel