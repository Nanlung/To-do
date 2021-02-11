const {Sequelize} = require('sequelize');
const db = require('../Config/db.config'); 

  const Todo = db.define('todo', {
    title: {
      type: Sequelize.STRING
    }, 
    description: {
      type: Sequelize.STRING
    }
    
  });

  module.exports=Todo;
