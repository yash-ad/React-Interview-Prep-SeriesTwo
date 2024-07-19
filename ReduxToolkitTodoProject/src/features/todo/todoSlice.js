import { createSlice, nanoid } from "@reduxjs/toolkit";

//First and foremost thing lets define an intialState which requires to the createSlice () method:-


//What is slice in redux-toolkit:-
//Slice is refers to the specific portion of Redux state and the logic related to that portion,such as actions and reducers.

//A slice includes , name of the slice , an initialState-The initialState of the slice,Reducers and Actions
//Reducers: functions that define how the state can be updated in response to actions.
//Actions:Action creators that are generated based on the reducers.


//In Redux slice can be created using createSlice () method which is provided from the Redux-Toolkit.which is for writing a logic for specific piece of state.

//'name':Name of the slice.
//'InitialState':The initial state of the slice.
//reducers:An object containing the reducer functions that define how the state can be updated.



const initialState = {
    // todos:[{id:1,text:"Hello world"}]
    todos:[]
}


export const todoSlice = createSlice({
    //Name of slice
    name: "todo",
    //By default an initial state
    initialState,
    //Reducers its an object which takes property as a key and function.
    reducers: {
        //State changes are handled by the reducers,which take the current state and action as an arguments and returns the new state.
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            //Here we want to update the state and push the todo object into an array which we have created.
            //By default intitialState is an empty.
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //Because we already have an updated state ,there are todos list ,and the goal is to remove an element or list which is unnecessary using the delete button, where the filter finds out and the condition where met it will remove the specific element or list.
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            ) 
        },
        updateTodo: (state,action) => {
           state.todos = state.todos.map((todo)=>(todo.id === action.payload.id ?{...todo,text:action.payload.text}:todo))
        }
    }
 
})

//Lets export the actions , whenever we want an Actions we can import from it.
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

//Reducer as well to fill in the store.
export default todoSlice.reducer;