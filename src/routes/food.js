'use strict';
//here we will create all the crud requests 
//-----------------------------------------


const express = require('express');
const router = express.Router(); //get method router 
const {foodCollection}=require('../models/index.js')

// Routes
router.get('/food',getfood);
router.post('/food',createfood);
router.get('/food/:id',getOnefood);
router.delete('/food/:id',deletefood);
router.put('/food/:id',updatedfood);
// localhost:3000/food
async function getfood(req,res) {
    let id = parseInt(req.params.id);
    let specificfood = await foodCollection.readRecord(id)//finde specific clothes using id 
    res.json(specificfood);
}

// localhost:3000/food (body:{firstName:'razan',lastName:'quran'})
async function createfood(req,res) {
    let newclothes = req.body;//that we will add it from postman
    let postfood = await foodCollection.createRecord(newclothes);//let new inside this var(imagin it like new row)
    res.status(201).json(postfood);
}

// localhost:3000/food/2 
async function getOnefood(req,res) {
    let id = parseInt(req.params.id);
    let specificfood = await foodCollection.readRecord(id)//finde specific clothes using id 
    res.json(specificfood);
}

async function deletefood(req,res){
    let deleteId = parseInt(req.params.id);
    let deletedfood = await foodCollection.deleteRecord(deleteId);
    res.status(204).json(deletedfood);
}

async function updatedfood(req,res){
    let id = req.params.id; 
    let body =req.body;
       const Updatedfood = await foodCollection.updateRecord(body,id);
       res.status(201).json(Updatedfood);
 }
module.exports = router;