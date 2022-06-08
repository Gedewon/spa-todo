import React from 'react';
import TodoItem from '../TodoItem/TodoItem'
function TodosList({todoList,handleChangeProps,deleteTodoProps,setUpdate}) {
  return (<>
    {todoList.map(todo=>{
      return <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChangeProps} deleteTodoProps={deleteTodoProps} setUpdate={setUpdate}/>
    })}
    </>
  )
}

export default TodosList;