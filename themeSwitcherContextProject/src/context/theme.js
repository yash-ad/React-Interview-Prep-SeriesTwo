//Lets create a context :-
import {createContext,useContext} from 'react'


//Lets define some intialState and the methods and variables:-
export const ThemeContext = createContext({
themeMode:"light",
darkTheme:()=>{},
lightTheme:()=>{},
}
);

//Context provider
export const ThemeProvider = ThemeContext.Provider;


//Custom hook:-
export default function useTheme(){
return useContext(ThemeContext);
}

























// import {createContext,useContext} from 'react';


// //In the 'createContext()' we can take as a default value an object:-
// export const ThemeContext = createContext({
//     //We can pass any values from the context as such like variables and methods or functions
//     themeMode:"light",
//     darkTheme:()=>{},
//     lightTheme:()=>{},
// });


// //Also we can make a variable provider and also export from it within the same file.
// export const ThemeProvider = ThemeContext.Provider;

// //Also we can make a custom hook function for using 'useContext()' hook:-
// //'useContext(createContext())'
// export default function useTheme(){
//     return useContext(ThemeContext)
// }