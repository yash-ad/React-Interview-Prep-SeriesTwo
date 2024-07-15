import { useState } from 'react'
import {ThemeProvider} from './context/theme.js'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import { useEffect } from 'react';

function App() {
//Lets define some functionalities that the context have provided.
const[themeMode,setThemeMode] = useState("light");

const darkTheme = ()=>{
  setThemeMode("dark")
}

const lightTheme = ()=>{
  setThemeMode("light")
}


//Actual change in theme in the App component because here we are providing the context for ThemeBtn and Card component:-
 //For handling sideEffects in functional component we are using useEffect hook for manipulating the dom whenever there is something change in the UI , it re-renders the component with a dependency array.
 useEffect(()=>{
document.querySelector('body').classList.remove("light","dark")
document.querySelector('body').classList.add(themeMode)
 },[themeMode])



  return (
    //Extracted the values variable and methods from the context.
<ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* ThemeBtn component */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                               {/* Card component */} 
                               <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App



























// import { useState } from 'react'
// import ThemeProvider from './context/theme.js'

// function App() {

// //Lets use the variable and function for functionalities over here which is created in the context.
// //Because we have an access from context.
// const[themeMode,setThemeMode]=useState("light");

// const lightTheme = ()=>{
//   setThemeMode("light")
// }
// const darkTheme = ()=>{
// setThemeMode("dark")
// }
//   return (
//    //Lets wrap themeContext because we want an access of 'Context' in the components.
// <ThemeProvider value={{themeMode , darkTheme , lightTheme}}>
// <div className="flex flex-wrap min-h-screen items-center">
//                 <div className="w-full">
//                     <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//                         {/* themeBtn */}
//                     </div>

//                     <div className="w-full max-w-sm mx-auto">
//                        {/* Card */}
//                     </div>  
//                 </div>
//             </div>

// </ThemeProvider>


//   )
// }

// export default App
