const express = require("express");
const { authRegister, login, updateUser, getUserProfile, getSingleUser, getAlluser, userDelete } = require("../controller/Authercontroller");
const { isAuthenticatedUser } = require("../middleware/isAuthenticate");
const Routers = express.Router();

Routers.route("/register").post(authRegister);
Routers.route("/loginuser").post(login);
Routers.route("/updateuser/:id").put(isAuthenticatedUser,updateUser);
Routers.route("/getuser/profile").get(isAuthenticatedUser,getUserProfile);
Routers.route("/getsingleuser/:id").get(getSingleUser);
Routers.route("/getalluser").get(getAlluser);
Routers.route("/deleteuser/:id").delete(userDelete)

module.exports = Routers;