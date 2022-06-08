import DefaultLayout from './component/Layout/DefaultLayout'
import TodosList from './component/TodosList/TodosList';
import InputTodo from './component/InputTodo/InputTodo'
function TodoContainer() {
  return (
    <DefaultLayout> 
    <InputTodo />
    <TodosList/>
    </DefaultLayout>
  );
}

export default TodoContainer;