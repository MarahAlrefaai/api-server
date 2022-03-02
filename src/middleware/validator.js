'use strict'
const validator = (req,res,next)=>{
if(isNaN(req.query.name )){
  req.name =req.query.name;
    console.log('its string ');
   // console.log(`name : ${req.name}`);
    next();
  }
  else{
    console.log('its not  string ');
   // req.name ="Error It's Not Name";
    next(" ( Error Its Not String Or Null )");
  }}

module.exports=validator;