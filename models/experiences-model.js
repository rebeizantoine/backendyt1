const mongoose=require('mongoose');
const schema=mongoose.Schema;
const exSchema=new schema({
    date:{type:String},
    company:{
        type:String
    },
    ex_txt:{type:String}
});
const ExSchema=mongoose.model('Experiences',exSchema);
module.exports=ExSchema;