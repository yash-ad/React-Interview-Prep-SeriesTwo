import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todoSlice'

//1.What is store in Redux:-
//In redux the store represents its an object that holds the application's state.
//The store in redux created using method called 'configureStore()', it requires a reducer property which is an object containing the slice reducers.
export const store = configureStore({
    // reducer: sliceReducer, [For Example]

   reducer: todoReducer
});