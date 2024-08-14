const mongoose = require("mongoose");

const Database = ()=>{
      mongoose.connect("mongodb+srv://nknaveen8075:naveen2001@training-portfolio.6pp4m.mongodb.net/Training-portfolio?retryWrites=true&w=majority&appName=Training-portfolio").then((con)=>{
           console.log(`Database in start`);     
      })
      
}
Database();
module.exports = Database