import { createContext, useContext } from 'react'


//createContext():-
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
       completed:false,
     }
    ],
    addTodo: (todo) => {},
    updateTodo:(id,todo)=>{},
    deleteTodo: (id) => {},
    toggleComplete:(id)=>{}
});

//context.Provider:-
export const TodoProvider = TodoContext.Provider;

//custom hook:-
export const useTodo = () => {
   return  useContext(TodoContext)
};



