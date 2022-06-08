import React, { useEffect, useState } from 'react'
import style from './TodoItem.module.css'
function TodoItem({todo,handleChangeProps,deleteTodoProps,setUpdate}) {
 
  const [editing,setEditing] = useState(false);
 
 
  const handleCheckbox =()=>handleChangeProps(todo.id);
  const handleDelete =()=>deleteTodoProps(todo.id);
  const handleEditing =()=>setEditing(!editing);
  const handleUpdate = (e)=>setUpdate(e.target.value,todo.id);
  const handleUpdateDone = (e)=>setEditing(!(e.key === 'Enter'));
  
  return (
    <li>

    <div onDoubleClick={handleEditing} className={editing ?style.hide:style.show}>
      <input type="checkbox" checked={todo.completed} onChange={handleCheckbox}/>
      {todo.title}
      <button onClick={handleDelete}>delete</button>
    </div>
    <input type="text" value={todo.title} className={`${style.textInput} ${editing ? style.show : style.hide}`} onChange={handleUpdate} onKeyDown={handleUpdateDone}/>
    </li>
  )
}

export default TodoItem