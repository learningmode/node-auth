require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{dbName:'auth_tutorial',useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('Mongodb connected');
}).catch(err => console.log(err.message));

mongoose.set('strictQuery',false);

mongoose.connection.on('connected',()=>{
    console.log('Mongoose connected to DB');
})

mongoose.connection.on('error',(error)=>{
    console.log(error.message);
})

mongoose.connection.on('disconnected',(error)=>{
    console.log('Mongoose connection is disconnected');
})

process.on('SIGINT',async ()=>{
    await mongoose.connection.close();
    process.exit(0);
});