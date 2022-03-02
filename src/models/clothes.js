'use strict';
//this is a table (clothes model) to store data in(json data)
//sequelize, DataTypes  are parameters 
//clothes name of the table  

const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {

  //price -->column 
   price: {
     
        type: DataTypes.STRING,
        allowNull: false
    },
    
  //size -->second culomn 
    size: {
      
        type: DataTypes.STRING,
    }
})

module.exports = clothes;
