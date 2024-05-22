const express = require("express");
const { courseRegister, courseUpdate, deleteCourse, getAllUser, getSingleCourse } = require("../controller/Coursecontroller");
const Routers = express.Router();

Routers.route("/registercourse").post(courseRegister);
Routers.route("/updatecourse/:id").put(courseUpdate);
Routers.route("/deletecourse/:id").delete(deleteCourse);
Routers.route("/getalluser").get(getAllUser);
Routers.route("/getsingleuser/:id").get(getSingleCourse);
module.exports = Routers;