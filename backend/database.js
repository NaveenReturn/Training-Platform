const mongoose = require("mongoose");

const Database = ()=>{
      mongoose.connect("mongodb://localhost:27017/zoho").then((con)=>{
           console.log(`Database in start ${con.connection.host}`);
      })
      
}
Database();
module.exports = Database