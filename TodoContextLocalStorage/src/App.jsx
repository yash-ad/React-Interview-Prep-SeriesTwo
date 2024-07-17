import { TodoProvider } from "./contexts/TodoContext";
import { useState } from "react";


function App() {

  //State for Data management and make changes into the UI:-
  const [todos, setTodos] = useState([]);

  //Lets define functionalities for these methods which are extracted from the Context:-
  
  //1.For adding a todo into the Todos list which means into an Array.
  const addTodo = (todo) => {
    //We know that each setState method or function from the useState hook that has an access of callBack function and in this callback function we can access of previous value.
    //Because here the goal is to add an individual todo with previous todo list.
    //Spread operator in an array for spreading the existing values.
    //And here 'Todos' its an Array.
    setTodos((prevTodos)=> [{id:Date.now(),...todo},prevTodos])
  };

  //2.For updating the todo into the Todos list which means into an Array.
  //So here what the method 'updateTodo' showing is that it has its own id and todo.
  //By calling to the previous todos , here we want to loop over all previous todos to find an individual todo and the id is matching to the given todo if its is then update the todo or otherwise individual todo remain the same.
  const updateTodo = (id,todo) => {
    setTodos((prevTodos)=> prevTodos.map((individualTodo)=>(individualTodo.id === id ? todo : individualTodo)))
  }


  //3.For deleting the todo from a previousTodos:-
  const deleteTodo = (id) => {
    setTodos((prevTodos)=> prevTodos.filter((individualTodo)=> individualTodo.id !== id))
  }



  //4.toggleComplete functionality for toggle whenever the task is completed:-
  const toggleComplete = (id) => {
    console.log(id);
  //For previous state access 'prevTodo'
    setTodos((prevTodos)=> prevTodos.map((individualTodo)=> individualTodo.id === id ? {...individualTodo,completed:!individualTodo.completed}:individualTodo))
  }
  



  
  return (
    //Object destructuring to extract the values from the context.
    <TodoProvider value={{addTodo,updateTodo,deleteTodo,toggleComplete}}>
 <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
