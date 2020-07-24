const mongoose=require('mongoose');

mongoose.connect('mongodb://13.233.229.223/Dev_Connect',{ useNewUrlParser: true ,useUnifiedTopology: true });

const db=mongoose.connection;

db.on('error',console.error.bind('Error Connecting to MongoDb'));

db.once('open',()=>{
    console.log('Connected to database');
});

module.exports=db;