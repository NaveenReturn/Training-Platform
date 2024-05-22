const jwt = require("jsonwebtoken");

const Users = require("../module/autherSchema");
exports.isAuthenticatedUser = async(req,res,next)=>{
    const {token} = req.cookies; 
    if(!token){
       return res.status(401).json({
          success:false,
          message:"fist login next move"
       })
    };

    const decode = jwt.verify(token,"F66DB4EC116F3");
     req.user = await Users.findById(decode.id)
    next();
}