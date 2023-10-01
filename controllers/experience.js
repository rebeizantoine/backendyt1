const Ex=require('../models/experiences-model');
const  add= async(req,res)=>{
    try{
        const ex=new Ex({
            date:req.body.date,
            ex_txt:req.body.ex_txt
        });
        await ex.save();
        res.status(200).json({message:"An experience added successfully"});
    }catch(error){
        res.status(500).json({message:"An error occured",error:error});
    }
}
const show = async(req, res) => {
    try{
  const experiences= await Ex.find({});
        res.status(200).json({ message: "Your experiences collection.", data: experiences })
     }
     catch (error){
        res.status(500).json({ message: "An error occurred", error: error });
    }
  }
const  update= async(req,res)=>{
    try{
        let id=req.params.id;
        await Ex.updateOne({_id:id},{$set: {date:req.body.date,ex_txt:req.body.ex_txt}});
        res.status(200).json({message:"An experience updated successfully"});
    }catch(error){
        res.status(500).json({message:"An error occured",error:error});
    }
}
const remove= async(req,res)=>{
    try{
        let id=req.params.id;
        await Ex.deleteOne({_id:id});
        res.status(200).json({message:"A row from your experience collection removed successfully!"});
    }catch(error){
        res.status(500).json({message:"An error occured",error:error});
    }
}
module.exports={add,show,update,remove};