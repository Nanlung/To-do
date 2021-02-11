module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define('todo', {
    id: {
      type: Sequelize.SERIAL
    },
    title: {
      type: Sequelize.STRING
    }, 
    description: {
      type: Sequelize.STRING
    }
    
  });

  return Todo;
}