const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());
const cors = require("cors");
require("dotenv").config({path:path.join(__dirname,"/config.env")});
// Router api
const database = require("./database");
const Usersrouter = require("./routers/autherRouter");
const Course = require("./routers/courseRouter");
const corsOptions={
    origin:process.env.APPLICATION_URL,
    methods:"GET,POST,PATCH,PUT,DELETE"
}
app.use(cors(corsOptions))

app.use("/api/v1",Usersrouter);
app.use("/api/v1/course",Course);
app.listen(8000,()=>{
    console.log(`server is start ${process.env.PORT}`)
    
 })