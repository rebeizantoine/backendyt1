const projects = require('../models/project');
const add=(req,res)=>{
    const Project = new projects({
        title:req.body.title,
        subtitle:req.body.subtitle,
        video_link:req.body.video_link,
        deployed_link:req.body.deployed_link,
        mainPicture:req.body.mainPicture,
        pic2:req.body.pic2,
        pic3:req.body.pic3,
        pic4:req.body.pic4,
        mobile_pic:req.body.mobile_pic
    });
    Project.save()
    .then(response=>{
        res.status(200).json({
            message:"Your Project added successfully!"
        });
    }).catch(error => {
        res.status(500).json({ 
            message: "An error occurred",
            error: error.message,
        });
    });
}
const find=(req,res)=>{
    projects.find({})
    .then(response=>{
        if(!response)res.status(404).json({
            message:"The project is not found"
        });
        res.status(200).json({
            message:" A project is found",
            data:response
        })
    }).catch(error=>{
        res.status(500).json({
            message:"An error occured",
            error:error.message
        });
    });
}
const update=(req,res)=>{
    projects.updateOne({ _id:req.params.id}, { $set: {
        title:req.body.title,
        subtitle:req.body.subtitle,
        video_link:req.body.video_link,
        deployed_link:req.body.deployed_link,
        mainPicture:req.body.mainPicture,
        pic2:req.body.pic2,
        pic3:req.body.pic3,
        pic4:req.body.pic4,
        mobile_pic:req.body.mobile_pic
    } })
    .then(data => {
        if (!data) {
            return res.status(404).json({ message: "The project is not found" });
        }
        res.status(200).json({ message: "A project  updated successfully", data });
    })
    .catch(error => {
        res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    });
}
const remove=async(req,res)=>{
   try{
    await projects.deleteOne({_id:req.body.id});
    res.status(200).json({message:"Your project deleted successfully!"});
   }
   catch(error){
    res.status(500).json({message:"An error occured"});
   }
}
const findOne=async(req,res)=>{
    try{
   const data=  await projects.findOne({_id:req.params.id});
     res.status(200).json({message:"Your project",data});
    }
    catch(error){
     res.status(500).json({message:"An error occured"});
    }
 }
module.exports={add,find,update,remove,findOne};