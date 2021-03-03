import React, {Fragment, useState} from 'react';

const EditTodo =  ({todo}) => {
  const [title,setTitle] = useState(todo.title)

  // update Title
  const updateTitle = async e => {
    e.preventDefault();;
  try {
    const body = {title};
    const response = await fetch(`http://localhost:5000/todo/${todo.id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    })

    window.location="/";
  } catch (error) {
    console.log(error.message);
  }
  }
  return <Fragment>
    
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.id}`}>
 Edit
</button>


<div class="modal" id={`id${todo.id}`} onClick={() => setTitle(todo.title)}>
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={() => setTitle(todo.title)}>&times;</button>
      </div>

      
      <div class="modal-body">
        <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateTitle(e)}>Edit</button>
      </div>
     
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setTitle(todo.title)}>Close</button>
      </div>

    </div>
  </div>
</div>
  </Fragment>

}

export default EditTodo;