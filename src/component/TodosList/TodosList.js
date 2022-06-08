import React from 'react';
import PropTypes, { object } from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

function TodosList({
  todoList, handleChangeProps, deleteTodoProps, setUpdate,
}) {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </>
  );
}

TodosList.propTypes = {
  todoList: PropTypes.instanceOf(Array).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
