const db = require('../Models');
const Todo =db.todo;
const Op = db.Sequelize.Op;

// Create and Save a new To-do item
exports.create = (req, res) => {
  if(!req.body.title) {
    res.status(400).json({
      message: 'Please enter Title'
    });
    return;
  }

  // create todo
  const todo = {
    title: req.body.title,
    description: req.body.description
  }

  // save todo in database
  Todo.create(tutorial)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || 'Error while creating todo item.'
      })
    })
};

// Retrieve all To-dos from the database.
exports.findAll = (req, res) => {
  
};

// Find a single To-do with an id
exports.findOne = (req, res) => {
  
};

// Update a To-do by the id in the request
exports.update = (req, res) => {
  
};

// Delete a To-do with the specified id in the request
exports.delete = (req, res) => {
  
  
};

// Delete all To-dos from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published To-do
exports.findAllPublished = (req, res) => {
  
};