const about = require('../models/about-model');
const About=require('../models/about-model');
const add=(req,res)=>{
    const about = new About({
        txt: req.body.txt
    });
    about.save()
    .then(response=>{
        res.status(200).json({
            message:"Your About added successfully!"
        });
    }).catch(error => {
        res.status(500).json({ 
            message: "An error occurred",
            error: error.message,
        });
    });
}
const find=(req,res)=>{
    about.find({})
    .then(response=>{
        if(!response)res.status(404).json({
            message:"About not found"
        });
        res.status(200).json({
            message:"About found",
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
    about.updateOne({ _id:req.params.id}, { $set: {txt:req.body.txt} })
    .then(updatedAbout => {
        if (!updatedAbout) {
            return res.status(404).json({ message: "About not found" });
        }
        res.status(200).json({ message: "About updated successfully", data: updatedAbout });
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
    await about.deleteOne({_id:req.params.id});
    res.status(200).json({message:"Your about deleted successfully!"});
   }
   catch(error){
    res.status(500).json({message:"An error occured"});
   }
}
module.exports={add,find,update,remove};