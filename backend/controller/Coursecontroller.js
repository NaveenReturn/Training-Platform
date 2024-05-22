const Course = require("../module/courseSchema");
exports.courseRegister = async(req,res)=>{

    try{
       const course = await Course.create(req.body);
       return res.status(201).json({
        success:true,
        message:"add success",
        course
     })
    }catch(err){
        return res.status(400).json({
            success:false,
            message:"server error"
         })
    }
}
// UPDATE API

exports.courseUpdate = async(req,res)=>{
    try{
        const {id} = req.parsms.id
        const {coursename,price,offer,description} = req.body;
        const course = await Course.findByIdAndUpdate(id,{coursename,price,offer,description});

        return res.status(201).json({
            success:true,
            message:"update success",
            course
         })
             
    }catch(er){
        return res.status(400).json({
            success:false,
            message:"server error"
         })
    }
}
// DELETE API

exports.deleteCourse = (req,res)=>{
       try{
        const {id} = req.parsms.id
        Course.findByIdAndDelete(id);
        return res.status(200).json({
            success:true,
            message:"delete success",
         })
       }catch(err){
        return res.status(400).json({
            success:false,
            message:"server error"
         })
       }
};
// GET API ALL
exports.getAllUser = async(req,res)=>{

    const course = await Course.find();

    return res.status(200).json({
        success:true,
        course
    })
}
// GET SINGLE COURSE
exports.getSingleCourse = async(req,res)=>{
      
     const course = await Course.findById(req.params.id);

     return res.status(200).json({
         success:true,
         course
     })
}