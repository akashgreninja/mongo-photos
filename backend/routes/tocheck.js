const express = require("express");
const fileUpload = require("../fileupload");
const User = require("../models/auth");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const multer =require('multer');
const fs =require('fs')

router.post("/goimages",fileUpload.single('image'),async(req,res)=>{
    try {
     
      const  {email,file}  = req.body;
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      console.log(file)
      const note = new User({
        email,
        photo:{
          data:req.file.filename,
          contentType:'image/jpg'
        }
        
      },
      // console.log(photo)
      )
      const SavedNote = await note.save();
      console.log(SavedNote)
      // console.log(req.file)

      // res.json(SavedNote);
    }
     catch (error) {
      console.log(error.message);
      res.status(500).send("some error from our side ");
    
    }
  }



)

router.get('/getall',async(req,res)=>{
  try{
    const pics=await User.find({id:"62c034f7b66d18eb6c9a5f57"})
    res.json(pics);
  }
  catch(error){
    console.log("error retrivibg")
  }
}) 

module.exports=router;