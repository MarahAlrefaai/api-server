'use strict'
const server=require('../src/server.js');
const supertest=require('supertest');//require fake server
const {db}=require('../src/models/index.js');//now we have db inside test 
const request =supertest(server.app);
let userId ;

//server.app this is what we send it from the server.js using module.export&& fake running server to test my app 


/*make sure to edit ("scripts": {
    "test": "jest --coverage --verbose",)*/

    beforeAll(async () => {
      await db.sync();
  });
  afterAll(async () => {
      await db.drop();
  }); 
describe('test',()=>{

it ('post test', async () => {
  const response = await request.post('/clothes').send({
    price: "lar",
      size : "large"
  });
  expect(response.status).toBe(201);
    userId = response.body.id
});

it('get test',async()=>{
  const response = await request.get('/clothes')
  expect(response.status).toBe(200)
})
  
it ('get by id test',async()=>{

 const response = await request.get(`/clothes/${userId}`)
 expect(response.status).toBe(200);
})


it ('update test', async () => {
const response = await request.put(`/clothes/${userId}`).send({
  price: "lar",
  size : "lar"
})
expect(response.status).toBe(201);
})
it ('deleting by id test',async()=>{
const response = await request.delete(`/clothes/${userId}`)
expect(response.status).toBe(204)

})
  
})
//--------------------------------------------------------------
//testing for food

describe('test',()=>{



it ('post test', async () => {
  const response = await request.post('/food').send({
    name:"falafel",
  price : "th"
  });
  expect(response.status).toBe(201);
    userId = response.body.id
});

it('get test',async()=>{
  const response = await request.get('/food')
  expect(response.status).toBe(200)
})
  
it ('get by id test',async()=>{

 const response = await request.get(`/food/${userId}`)
 expect(response.status).toBe(200);
})


it ('update test', async () => {
const response = await request.put(`/food/${userId}`).send({
  name:"falafel",
  price : "th"
})
expect(response.status).toBe(201);
})
it ('deleting by id test',async()=>{
const response = await request.delete(`/food/${userId}`)
expect(response.status).toBe(204)

})
  
})


