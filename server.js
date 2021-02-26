const express=require('express');
const morgan=require('morgan');
const path=require('path');
const fs=require('fs');
const { exception } = require('console');

const app=express();

const port=process.env.port || 4000;

var accessFileStream=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});

app.use(morgan("combined",{stream:accessFileStream}));


app.get('/',function(req,res){
res.send('hello');
});

app.listen(port,function(request,response){
    try{
    console.log('server running at port'+ port);
    }
    catch(e){
      throw new exception('error while connecting server');
    }
});