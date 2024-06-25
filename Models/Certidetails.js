const {Schema}=require('mongoose')
const {model}=require('mongoose');
const demo = new Schema({
    CertID:{type:String,required: true},
    Name:{type:String,required: true},
    CourseName:{type:String,required: true},
    Grade:{type:String,required: true},
    Date:{type:String,required: true}
    // add other fields as needed
});

const details = model('certiDetail',demo)
module.exports=details;