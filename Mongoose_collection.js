const mongoose=require('mongoose');
const Productcsh=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports=mongoose.model('registerd',Productcsh);