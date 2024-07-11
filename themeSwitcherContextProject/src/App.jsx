import { useState } from 'react'
import ThemeProvider from './context/theme.js'

function App() {

//Lets use the variable and function for functionalities over here which is created in the context.
//Because we have an access from context.
const[themeMode,setThemeMode]=useState("light");

const lightTheme = ()=>{
  setThemeMode("light")
}
const darkTheme = ()=>{
setThemeMode("dark")
}
  return (
   //Lets wrap themeContext because we want an access of 'Context' in the components.
<ThemeProvider value={{themeMode , darkTheme , lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themeBtn */}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                    </div>  
                </div>
            </div>

</ThemeProvider>


  )
}

export default App
