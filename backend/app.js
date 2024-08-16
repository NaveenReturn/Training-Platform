const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
require("dotenv").config({path:path.join(__dirname,"/config.env")});
const Users = require("./module/autherSchema")
const app = express();

app.use(bodyparser.json());

const cors = require("cors");
// Router api
const database = require("./database");

const corsOptions={
    origin:process.env.APPLICATION_URL,
    methods:"GET,POST,PATCH,PUT,DELETE"
}
app.use(cors(corsOptions))

app.post("/api/v1/register",async (req,res)=>{
     
    try{

        const user = await Users.create(req.body);

        return res.status(200).send("success")
    }catch(err){
       return res.status(500).send("server error")
    }
})

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server is start ${PORT}`)
    
 })