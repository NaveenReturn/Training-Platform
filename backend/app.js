const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
const database = require("./database");
// Router api
const Usersrouter = require("./routers/autherRouter");
const Course = require("./routers/courseRouter");
app.use("/api/v1",Usersrouter);
app.use("/api/v1/course",Course);
app.listen(8000,()=>{
    console.log("server is start")
 })