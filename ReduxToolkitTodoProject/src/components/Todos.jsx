import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTodo, removeTodo, updateTodo } from '../features/todo/todoSlice';
import AddTodo from './AddTodo';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdate = (text) => {
    dispatch(updateTodo({
      id: editId,
      text: text,
    }));
    setEditId(null);
    setEditText('');
  };

  //We can use localStorage using useEffect() hook to load todos when the component mounts.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      storedTodos.forEach((todo) => {
      dispatch(addTodo(todo))
    })
    }
  },[dispatch])


  // Save todos to local storage whenever they are updated.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
      <div>Todos</div>
      <AddTodo editId={editId} editText={editText} onUpdate={handleUpdate} />
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
              className="flex flex-row-reverse text-white bg-blue-600 border-0 py-1 px-4 focus:outline-none hover:bg-blue-800 rounded text-mg ml-auto space-x-10 m-2 mx-5"
              onClick={() => handleEdit(todo.id, todo.text)}
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
