const mongoose=require('mongoose');
const schema=mongoose.Schema;
const aboutschema=new schema({
    txt:{
        type:String
    }
});
const about=mongoose.model('About',aboutschema);
module.exports=about;