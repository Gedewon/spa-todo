import React, { useState } from 'react'

function InputTodo({addTodoProps}) {
  const [title, setTitle]  = useState({title:''});
  const onChange = (e)=>{
    setTitle({
        [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (title.title.trim()) {
    addTodoProps(title.title);
    setTitle({title:''});
    }else {
      alert("Please write item")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Add todo..."
          value={title.title}
          name="title"
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputTodo