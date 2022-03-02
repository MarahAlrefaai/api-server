'use strict'
// this index.js is deferent of the outside index.js

require('dotenv').config(); //this allows us to access database
const Collection = require('./collection-class.js')
const {Sequelize, DataTypes} = require('sequelize'); // npm i pg sequelize
//------------------------------------

//after creating the models we must require( import it after export it )
const clothes = require('./clothes.js');
const food = require('./food.js');
//------------------------------------
//prepare the connection

const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
 // npm i sqlite3

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

//if we didn't add in the gethub there is no .env  there
//this is the linke syored in .env (include our password and email)
//DATABASE_URL --> postgres <<--- (its server itself)://marah:0000@localhost:5432/movies  (marah0000 username & password for postgres)(5432--> port number for postgres server itself)
//our port 3000 and its require from postgres (5432)
//each app must work on port number 
//movies -->database name 
//-------------------------------------

//sequelizeOptions to deploy the app on heroku

//real connecting the sequelize with DATABASE_URL(database url )
let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);
let clothesmodel=clothes(sequelize,DataTypes);
let clothesCollection =new Collection(clothesmodel)

let foodmodel=food(sequelize,DataTypes);
let foodCollection =new Collection(foodmodel)

module.exports = {
  
  db: sequelize, //for real connection and will use it in index.js
  clothesCollection: clothesCollection ,// for creating the table and will use it in our routes
  
  foodCollection: foodCollection  // for creating the table and will use it in our routes

}