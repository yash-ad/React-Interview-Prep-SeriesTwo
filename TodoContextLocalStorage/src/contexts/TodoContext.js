import { createContext, useContext } from 'react'


//createContext() with an initialState by default:-
export const TodoContext = createContext({
    //Todos its an array
    todos: [
    //Todo its an object
        {
            id: 1,
            todo: "Todo msg",
       completed:false,
     }
    ],
    //functionalities:-
    addTodo: (todo) => {},
    updateTodo:(id,todo)=>{},
    deleteTodo: (id) => {},
    toggleComplete:(id)=>{}
});

//context.Provider:-
export const TodoProvider = TodoContext.Provider;

//custom hook:-
export const useTodo = () => {
 return useContext(TodoContext)
};



