const mongoose = require("mongoose")
require("dotenv").config()
let dbconnect = async(req,res) => {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("db connected")
    )
}
module.exports = dbconnect