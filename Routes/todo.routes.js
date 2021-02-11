const express = require('express');
const router = express.Router();
const todo = require('../Controllers/to-do.controller');



 // Create a new Todo item
 router.post("/", todo.create);

 // Retrieve all Todo items
 router.get("/", todo.findAll);

 
 // Retrieve a single Todo with id
 router.get("/:id", todo.findOne);

 // Update a Todo with id
 router.put("/:id", todo.update);

 // Delete a Todo item with id
 router.delete("/:id", todo.delete);

 // Delete all Todo items
 router.delete("/", todo.deleteAll);

 module.exports = router;
