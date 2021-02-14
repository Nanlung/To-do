import React, {Fragment} from 'react';

const InputTodo = () => {
  return ( 
    <Fragment>
     
      <h1 className="text-center mt-5">Todo</h1>
      <form>
        <input type="text" placeholder="Title" className="form-control"/>
        <input type="text" placeholder="Description" className="form-control"/>
        <button className="btn btn-success">Add</button>
      </form>

     
    
    </Fragment>
    
  )
}

export default InputTodo;