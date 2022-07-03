const express = require("express");
const fileUpload = require("../fileupload");
const User = require("../models/auth");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const multer =require('multer');
const fs =require('fs')

router.post("/goimages",fileUpload.single('image'),async(req,res)=>{
    try {
     
      const  {email,photo}  = req.body;
      console.log(photo)
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // console.log(file)
      const note = new User({
        email,
        photo:photo.image
        
      },
      // console.log(photo)
      )
      const SavedNote = await note.save();
      // console.log(SavedNote)
    

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
    const pics=await User.find({id:"62c06aedcdc9038182dd9a0a"})
    res.json(pics);
  }
  catch(error){
    console.log("error retrivibg")
  }
}) 

module.exports=router;