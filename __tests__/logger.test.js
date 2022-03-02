'use strict'
const server=require('../src/server.js');
const supertest=require('supertest');//require fake server
const request =supertest(server.app);

//server.app this is what we send it from the server.js using module.export&& fake running server to test my app 


/*make sure to edit ("scripts": {
    "test": "jest --coverage --verbose",)*/

describe('test',()=>{

  //describe is a module to test somthing and we can create more than describe to test something else 

  //this (it) takes long time so we use (async + await) 
  //(it) its just a senario of the result that we will get 

  it('given an name in the query string, the output object is correct',async()=>{
    const response=await request.get('/person?name=marah');//the string must be the same of the post man
    expect(typeof response.body).toEqual('object');
  })
  
})