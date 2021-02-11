const db = require('../Config/db.config');
const Todo = require('../Models/todo.model');
const Op = db.Sequelize.Op

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
  Todo.create(todo)
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
  const title = req.query.title;
  let condition = title ? { title: { [Op.iLike]: `%${title}%`}} : null

  Todo.findAll({ where: condition })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || 'Error while retrieving Todo'
      })
    })

};

// Find a single To-do with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Todo.findByPk(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({
        message: err.message || "Error retrieving Todo item no. " + id
      });
    });
};

// Update a To-do by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;


Todo.update(req.body, {
  where: {id: id}
})
  .then(num => {
    if (num == 1) {
      res.json({
        message: "Todo item was successfully updated."
      })
    } else {
      res.json({
        message: `Cannot update Tutorial with id=${id}.`
      })
       
    }
  })
  .catch(err => {
    res.status(500).json({
      message: "Error updating Todo with id= " + id
    });
  });
}
// Delete a To-do with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Todo.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.json({
        message: "Todo item was deleted successfully!"
      })
      
    } else {
      res.json({
        message: `Cannot delete Todo item no.${id}.`
      })
      
    }
  })
  .catch(err => {
    res.status(500).json({
      message: `Could not delete Todo item no.${id}`
    });
  });
  
};

// Delete all To-dos from the database.
exports.deleteAll = (req, res) => {
  Todo.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.json({ message: `${nums} Todo items were deleted successfully`})
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || "Error occured while deleting Todos"
      })
    })
};
