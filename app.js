const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config();
const AuthRoute = require('./routes/auth.route');


const app = express();
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});

app.get('/',async(req,res,next)=>{
   res.send('Hello from express');   
});

app.use('/auth',AuthRoute);

app.use(async(req,res,next)=>{
    // const error = new Error('Route not found');
    // error.status=404;
    // next(error);
    //NOTE: OR below
    next(createError.NotFound('Route is not found'));
})

app.use((err,req,res,next)=> {
    res.status(err.status || 500);
    res.send({
        error:{
            status:err.status || 500,
            message:err.message,
        }
    })
})