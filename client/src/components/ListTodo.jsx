import React, {Fragment, useEffect, useState} from 'react';

const ListTodos = () =>  {

  const [todos, setTodos] = useState([]);

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
        <td>Edit</td>
        <td><button className="btn btn-danger">Delete</button></td>
      </tr>

    ))}
    

  </tbody>
  </table>
  
  </Fragment>
  )
};

export default ListTodos;