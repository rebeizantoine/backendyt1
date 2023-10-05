const admin=require('../models/login');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const add = async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new admin({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword
      });
      const response = await user.save();
      if (!response) {
        throw new Error("An error occurred while saving the admin.");
      }
      res.json({
        message: "Admin added successfully",
        response
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "An error occurred",
        error: err.message
      });
    }
  };
  const login=async(req,res)=>{
    try{
      let username=req.body.username;
      let password=req.body.password;
      const trying=await admin.findOne({$or:[{username:username},{email:username},{phone:username}]});
      if(!trying)res.status(404).json({message:"An error occured"});
      const resultat= await bcrypt.compare(password,trying.password);
      if(!resultat)res.status(401).json({message:"Wrong password"});
      let token=jwt.sign({username:trying.username},'blabla',{expiresIn:'1h'});
      res.json({
        message:"Login successfully",
        token
      });
    }catch(error){
      console.log(error);
    }
  }
  /*
const login = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    
    const trying = await admin.findOne({ $or: [{ username }, { email: username }, { phone: username }] });
    
    if (!trying) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const passwordMatch = await bcrypt.compare(password, trying.password);
    
    if (!passwordMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }
    
    const token = jwt.sign({ username: trying.username }, 'verySecretValue', { expiresIn: '1h' });
    
    res.json({
      message: "Login successfully",
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error occurred",
      error: error.message
    });
  }
};*/
module.exports={add,login};