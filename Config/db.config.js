const Sequelize = require('sequelize');

const sequelize = new Sequelize('todo', 'postgres', 'root', {
  host: 'localhost',
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }  
});

const db = {};



 db.Sequelize = Sequelize;
 db.sequelize = sequelize;



module.exports = sequelize;



