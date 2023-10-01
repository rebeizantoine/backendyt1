const skill=require('../models/skills-model');
const  add= async(req,res)=>{
    try{
        const Skill=new skill({
          name:req.body.name,
          image:req.body.name
        });
        await Skill.save();
        res.status(200).json({message:"A skill added successfully"});
    }catch(error){
        res.status(500).json({message:"An error occured",error:error});
    }
}
const show = async(req, res) => {
    try{
  const skills= await skill.find({});
        res.status(200).json({ message: "Your skills collection.", data: skills })
     }
     catch (error){
        res.status(500).json({ message: "An error occurred", error: error });
    }
  }
const  update= async(req,res)=>{
    try{
        let id=req.params.id;
        await skill.updateOne({_id:id},{$set: [{name:req.body.name},{image:req.body.image}]});
        res.status(200).json({message:"A skill updated successfully"});
    }catch(error){
        res.status(500).json({message:"An error occured",error:error});
    }
}
const remove= async(req,res)=>{
    try{
        let id=req.params.id;
        await skill.deleteOne({_id:id});
        res.status(200).json({message:"A row from your skills collection removed successfully!"});
    }catch(error){
        res.status(500).json({message:"An error occured",error:error});
    }
}
module.exports={add,show,update,remove};