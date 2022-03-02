'use strict';
//this is a table (food model) to store data in(json data)
//sequelize, DataTypes  are parameters 
//food name of the table  

const food = (sequelize, DataTypes) => sequelize.define('food', {

  //name -->column 
   name: {
     
        type: DataTypes.STRING,//we can choose the data type 
        allowNull: false
    },
    
  //price -->second culomn 
  price: {
      
        type: DataTypes.STRING,//we can choose the data type
    }
})

module.exports = food;