import React, {Fragment, useEffect, useState} from 'react';
import EditTodo from './EditTodo';

const ListTodos = () =>  {

  const [todos, setTodos] = useState([]);

  // Delete Todo
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todo/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  }
  

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todo");
      const jsonData =  await response.json();

      setTodos(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (<Fragment>
    
    <table className="table table-dark table-hover mt-5 text-center">
  <thead>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(todo => (
      <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td><EditTodo todo={todo}/></td>
        <td><button onClick={()=> deleteTodo(todo.id)} className="btn btn-danger">Delete</button></td>
      </tr>

    ))}
    

  </tbody>
  </table>
  
  </Fragment>
  )
};

export default ListTodos;