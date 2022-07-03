const mongoose = require('mongoose');
const {Schema}=mongoose;



const UserSchema = new Schema({
   
       email:{
        type:String,
       
        
       },
       photo:{
        type:String
       }
    
   });

const User=mongoose.model('user',UserSchema)
module.exports=User