const mongoose = require("mongoose");

const AutherSchema = new mongoose.Schema({
    coursename:String,
    price:String,
    offer:String,
    description:String
});
const course = mongoose.model("course",AutherSchema);
module.exports = course;