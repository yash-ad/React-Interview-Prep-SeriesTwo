import { useSelector, useDispatch } from 'react-redux';
import { removeTodo ,updateTodo} from '../features/todo/todoSlice';
import { useState } from 'react';

function Todos() {


  //'useSelector()' hook provided by the 'react-redux' which is used to accessing the Redux stores state in a react component.
  //It allows us to extract specific pieces of data from the store's state it subscribe to updates to the data.
  const todos = useSelector((state)=> state.todos)


  //Dispatches an action:-
  const dispatch = useDispatch();

  //An edit states to the component to updating and editing the todo:-
  const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

//Add a function to toggle the edit state , when the edit button is clicked:-
  const handleEdit = (id,text) => {
    setEditId(id)
    setEditText(text)
  }
  
  //Updating the state and dispatches an action to the Redux's store
  const handleUpdate = ()=>{
    dispatch(updateTodo({
        id:editId,
        text:editText
    }));
    setEditId(null)
    setEditText('')
}

  return (
        <>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-1 py-2 rounded"
                        key={todo.id}
                    >

{/* 3.Conditionally render either an input field or the todo text based on the edit state. */}
{/* //Here it checks if the editId is equal eqauls to the todo.id , which means that the user clicks on a button of an edit the editId is matching to the individuals todo.id then it shows the input field and update button to update the behavior */}

{
 editId === todo.id ? 
 (
<>
    <input
    type='text'
    className="bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-7 leading-8 transition-colors duration-200 ease-in-out"
    value={editText}
    onChange={(event)=> setEditText(event.target.value)}
    />

    <button
        className="text-white bg-green-500 border-0 py-1 px-5 focus:outline-none hover:bg-green-600 rounded text-lg ml-14"
        onClick={handleUpdate}
        >
        Update Todo
    </button>
</>
) :
 (
<>
                  
<div className="text-white">{todo.text}</div>
<button
    className="flex flex-row-reverse text-white bg-blue-600 border-0 py-1 px-4 focus:outline-none hover:bg-blue-800 rounded text-mg ml-auto space-x-10 mx-5"
    onClick={()=>handleEdit(todo.id,todo.text)}                            
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path fill="#FFFFFF" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                                    </svg>
                                </button>
                        </>
)
}
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos