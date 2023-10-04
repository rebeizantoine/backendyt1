const mongoose =require('mongoose');
const schema=mongoose.Schema;
const Project=new schema({
    title:{
        type:String
    },
    subtitle:{
        type:String
    },
    description:{
       type: String
    },
    video_link:{
        type:String
    },
    deployed_link:{
        type:String
    },
    mainPicture:{
        type:String
    },
    pic2:{
        type:String
    },
    pic3:{
        type:String
    },
    pic4:{
        type:String
    },
    mobile_pic:{
        type:String
    }
});
const p=mongoose.model('projects',Project);
module.exports=p;