const Users = require("../module/autherSchema");
exports.authRegister = async(req,res)=>{
  

   const user = await Users.create(req.body);
   const token = user.getJWTToken();
   const option = {
    expires:new Date(Date.now() + 7 * 24*60*60*1000),
    httpOnly:true
};
    return res.status(201).cookie("token",token,option).json({
    success:true,
    token,
    user
})
};

exports.login = async(req,res)=>{

    const {email,password} = req.body;
    if(!email || !password){
        return res.status(401).json({
            success:false,
            message:"please enter email password"
        })
    }

  const user = await Users.findOne({email}).select("+password");
  if(!user){
    return res.status(400).json({
        success:false,
        message:"invalid email or password"
    })
  };

  if(! await user.isValidPassword(password)){
    return res.status(400).json({
        success:false,
        message:"does not match password"
    })
  };
  const token = user.getJWTToken();
  const option = {
   expires:new Date(Date.now() + 7 * 24*60*60*1000),
   httpOnly:true
};
   return res.status(201).cookie("token",token,option).json({
   success:true,
   token,
   user
})
};

// update
exports.updateUser = async (req,res)=>{
     try{
        const user = await Users.findById(req.params.id);
        if(!user){
            return res.status(404).json({
               success:true,
               message:"user not available"
            })
        }
        const {name,email,password,course,phone} = req.body;
    
        const studentUpdate = await Users.findByIdAndUpdate(req.params.id,{name,email,password,course,phone});
    
        return res.status(201).json({
           success:true,
           message:"update success",
        })
     }catch(er){
        return res.status(400).json({
            success:true,
            message:"server error"
         })
     }
}
// GET ALL USERS
exports.getAlluser = async(req,res)=>{
     const user = await Users.find();
     return res.status(200).json({
        success:true,
        message:"user success",
        user
     });
}

// GET SINGLE USER ID
exports.getSingleUser = async(req,res)=>{
 
     const user = await Users.findById(req.params.id);

     return res.status(200).json({
        success:true,
        message:"user success",
        user
     });
}

// GET USER PROFILE
exports.getUserProfile = async(req,res,next)=>{
    const {token} = req.cookies; 
      const user =await Users.findById(req.user.id);
      const get = req.user.id
      return res.status(200).json({
          success:true,
          get,
          token,
          user
      })
  }
//  API DELETE
exports.userDelete = async(req,res)=>{

    try{
       const user = await Users.findByIdAndDelete(req.params.id);

       return res.status(200).json({
          success:true,
          message:"delete success"
       })
    }catch(err){
        return res.status(400).json({
            success:false,
            message:"server error"
         })
    }
} 