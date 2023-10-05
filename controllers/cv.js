const cv = require('../models/cv');
const add=(req,res)=>{
    const Cv = new cv({
        cv: req.body.cv
    });
    Cv.save()
    .then(response=>{
        res.status(200).json({
            message:"Your cv added successfully!"
        });
    }).catch(error => {
        res.status(500).json({ 
            message: "An error occurred",
            error: error.message,
        });
    });
}
const find=(req,res)=>{
    cv.find({})
    .then(response=>{
        if(!response)res.status(404).json({
            message:"cv not found"
        });
        res.status(200).json({
            message:"cv found",
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
    cv.updateOne({ _id:req.params.id}, { $set: {cv:req.body.cv} })
    .then(updatedCv => {
        if (!updatedCv) {
            return res.status(404).json({ message: "cv not found" });
        }
        res.status(200).json({ message: "cv updated successfully", data: updatedCv });
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
    await cv.deleteOne({_id:req.params.id});
    res.status(200).json({message:"Your cv deleted successfully!"});
   }
   catch(error){
    res.status(500).json({message:"An error occured"});
   }
}
module.exports={add,find,update,remove};