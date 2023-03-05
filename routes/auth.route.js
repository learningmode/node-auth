const express = require('express');
const { route } = require('express/lib/application');
const { authSchema } = require('../helpers/validation_schema');
const router = express.Router();
const User = require('../Models/User.model');

router.post('/register',async(req,res,next)=>{
    console.log(req.body);
   try{
        const {email,password} = req.body

        const result = await authSchema.validateAsync(req.body);

        if(!email || !password)throw createError.BadRequest()
            const doesExist = await User.findOne({email:email});
            if(doesExist) throw createError.Conflict(`${email} is already been registered`);
             const user = new User({email,password})
             const saveUser = await user.save();
        res.send(saveUser);
   }catch(err){
    if(err.isJoi === true) err.status = 422
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