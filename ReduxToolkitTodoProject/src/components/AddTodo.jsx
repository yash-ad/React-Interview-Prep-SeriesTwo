import { useState } from 'react';
import {addTodo} from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux';


function AddTodo() {
  const [input, setInput] = useState('');

  //'useDispatch()'hook provided by the 'react-redux' is used to dispatches an action to the Redux store.
  const dispatch = useDispatch();

  //Event handler for 'form'
  const addTodoHandler = (event) => {
    event.preventDefault()
    //to check if an input filed is empty
    if (input.trim() === '') {
      alert('Kindly write some todo text !');
      return;
    }
    //Here to dispatch an action
    //And here the action is to 'addTodo'
    dispatch(addTodo(input))
    setInput('')
    
  };

  return (
    <div className=' flex justify-center'>
 <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
onChange={(event)=> setInput(event.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
      </form>
      </div>
  )
}

export default AddTodo