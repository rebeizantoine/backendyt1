const mongoose=require('mongoose');
const schema=mongoose.Schema;
const skill=new schema({
    name:{
        type:String
    },
    image:{
        type:String
    }
});
const Skill=new mongoose.model('skills',skill);
module.exports=Skill;
