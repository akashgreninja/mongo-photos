const mongoose = require('mongoose');

const connectToMongo=()=>{
    mongoose.connect('mongodb://localhost:27017/Imagecheck',()=>{
    console.log("sucess")
    }
    )
}



module.exports= connectToMongo;