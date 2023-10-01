const mongoose=require('mongoose');
const schema=mongoose.Schema;
const login=new schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    }
});
const log=mongoose.model('admin',login);
module.exports=log;