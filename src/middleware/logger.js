'use strict'

const logger = (req,res,next)=>{
  
  console.log('method ', req.method);
  console.log('method ', req.path);
 
  next();
}

module.exports=logger;