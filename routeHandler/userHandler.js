const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userSchema = require('../Schemas/userSchema');

//new object model
const User = new mongoose.model("User",userSchema);

//POST user sign_up

router.post('/sign_up', async (req,res)=> {
    const newUser = new User(req.body);
    await newUser.save((err)=>{
        if(err){
            res.status(500).json({
                error: "There was a serverside error"
            });
        } else{
            res.status(200).json({
                message: "user data are inserted successfuly!"
            });

        }
    })

});