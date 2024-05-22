const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AutherSchema = new mongoose.Schema({
      name:String,
      email:String,
      password:String,
      course:String,
      phone:String
});
AutherSchema.pre("save", async function(){
      this.password = await bcrypt.hash(this.password,10);
  })
AutherSchema.methods.isValidPassword =async function(password){
     return  bcrypt.compare(password,this.password)
  }
AutherSchema.methods.getJWTToken = function(){
      return jwt.sign({id:this.id},"F66DB4EC116F3",{expiresIn:"7d"})
}
const users = mongoose.model("user",AutherSchema);
module.exports = users;