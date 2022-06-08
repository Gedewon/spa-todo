import DefaultLayout from './component/Layout/DefaultLayout'
import TodosList from './component/TodosList/TodosList';
import InputTodo from './component/InputTodo/InputTodo'
import React,{ useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Route, Routes, Switch } from "react-router-dom"
import About from './component/pages/About';
import NotFound from './component/pages/404';
function TodoContainer() {
  const [todoList,setTodoList] = useState([]);
  useEffect(()=>{
    setTodoList([
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ])
  },[]);
  const handleChangeProps =(id)=>{
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      }
    )
    )
  }

  const delTodo = (id)=>setTodoList(todoList.filter(todo => todo.id !== id))
  const addTodoItem = (title)=>setTodoList([...todoList, {title,completed : false,id:uuidv4()}])
  const setUpdate = (updateTitle,id)=>setTodoList(todoList.map(todo=>  todo.id == id ? {...todo,title : updateTitle} : todo))
  

  return (
    <DefaultLayout> 
      <Routes>
          <Route exact path="/" element={

            <React.Fragment>
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList todoList={todoList} handleChangeProps={handleChangeProps} deleteTodoProps={delTodo} setUpdate={setUpdate}/>
              </React.Fragment>
          }
          >
          </Route>
          <Route path="/about" element={

            <About />
          }>
          </Route>
          <Route path="*" element={

            <NotFound />
          }>
          </Route>
      </Routes>
    </DefaultLayout>
  );
}

export default TodoContainer;