const express = require('express');
const { route } = require('express/lib/application');

const router = express.Router();
const User = require('../Models/User.model');

router.post('/register',async(req,res,next)=>{
    console.log(req.body);
   try{
        const {email,password} = req.body
        if(!email || !password)throw createError.BadRequest()
            const doesExist = await User.findOne({email:email});
            if(doesExist) throw createError.Conflict(`${email} is already been registered`);
             const user = new User({email,password})
             const saveUser = await user.save();
        res.send(saveUser);
   }catch(err){
    next(err)
   }
})

router.post('/login',async(req,res,next)=>{
    res.send('Login route');
})

router.post('/refresh-token',async(req,res,next)=>{
    res.send('Refresh-token route');
});

router.delete('/logout',async(req,res,next)=>{
    res.send('Logout route');
});

module.exports= router;