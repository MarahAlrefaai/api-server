'use strict'
const express =require("express");
const app=express();//to use express methods and libraries
const cors=require('cors');
const logger=require('./middleware/logger.js');
const validator=require('./middleware/validator.js');
const errorHandler = require('./error-handlers/500.js')
const notFound = require('./error-handlers/404.js')

const clothesRouter = require('./routes/clothes');//get routes 
const foodRouter = require('./routes/food.js');//get routes

//----------------------------------------------

app.use(cors());
app.use(express.json());//this route to identify body 
app.use(logger);
app.use(validator);
app.use(clothesRouter);
app.use(foodRouter);

//----------------------------------------------
app.get('/',(req,res)=>{//this is a rout
  //res.json({method : req.reqType, });
  res.send('home route');
})
app.get('/person',validator, (req,res)=>{
  res.status(200).json({
    name : req.name
  });})

app.use(errorHandler);
app.use('*',notFound);

function start(port){
  app.listen(port,()=>{
    console.log(`running on port ${port}`)
  }) 
}
//now we need to export app and start 
//so we can import it anyware and use it 
module.exports={
  app:app,
  start:start
}