const jwt =require('jsonwebtoken');
const authenticate=async(req,res)=>{
    try{
        const token= req.headers.authorization.split(' ')[1];
        const decode=jwt.verify(token,"blabla");
        req.user=decode;
    }catch(err){
        res.status(401).JSON({message:"Authentication failed"});
    }
}
module.exports={authenticate};