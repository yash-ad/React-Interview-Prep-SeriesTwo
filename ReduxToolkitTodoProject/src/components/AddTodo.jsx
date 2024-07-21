import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo({ editId, editText, onUpdate }) {
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editId !== null) {
      setInput(editText);
      setIsEditing(true);
    } else {
      setInput('');
      setIsEditing(false);
    }
  }, [editId, editText]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === '') {
      alert('Kindly write some todo text!');
      return;
    }
    if (isEditing) {
      onUpdate(input);
    } else {
      dispatch(addTodo(input));
    }
    setInput('');
    setIsEditing(false);
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className="space-x-3 mt-15">
        <input
          type="text"
          className={`${isEditing ?"bg-gray-800 rounded border border-gray-700 focus:border-green-600 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" :"bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"}`}
          placeholder="Enter a Todo..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          type="submit"
          // {/* //Conditional rendering for button color */}
      //     If isEditing is true, the button will have the classes for the "Update Todo" styling.
      // If isEditing is false, the button will have the classes for the "Add Todo" styling.
          className={`${isEditing ? 'text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg' 
          : 'text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'}`}
        >
          {/* //Conditional rendering for button text */}
          {isEditing ? 'Update Todo' : 'Add Todo'}
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
