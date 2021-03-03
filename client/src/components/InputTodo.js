import React, {Fragment, useState} from 'react';

const InputTodo = () => {

  const {title, setTitle, description, setDescription} = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return ( 
    <Fragment>
     
      <h1 className="text-center mt-5">Todo</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm} >
        <input type="text" placeholder="Title" className="form-control mr-2" value={title} onChange={e => setTitle(e.target.value)}/>
        <input type="text" placeholder="Description" className="form-control mr-2" value={description} onChange={e => setDescription(e.target.value)}/>
        <button className="btn btn-success">Add</button>
      </form>

     
    
    </Fragment>
    
  )
}

export default InputTodo;