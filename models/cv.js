const mongoose=require('mongoose');
const schema=mongoose.Schema;
const ourcv=new schema({
    cv:{
        type:String
    }
});
const newCv=mongoose.model('cv',ourcv);
module.exports=newCv;