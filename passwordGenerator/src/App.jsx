import {useCallback, useEffect, useRef, useState} from 'react'

function App() {
///1.Lets collect state variables first:-

//1.For length purpose:-
const[length,setLength]= useState(10);

//2.For Numbers purpose:-
const[numbersAllowed,setNumbersAllowed] = useState(false);

//3.For Characters purpose:-
const[charsAllowed,setCharsAllowed] = useState(false);

//4.For password purpose:-
const [password,setPassword] = useState("");

//5.useRef() hook:-
//What is useRef hook in react?
//useRef hook in react its responsible for creating a reference to the Dom directly within the functional component.
const passwordRef = useRef(null);

///2.Lets create a 'passwordGenerator' method for optimization and memoization concept
//Because this is an one function or method we could say we are using for several times.
//So in the React there is something known as 'useCallBack()' hook for memoization concept and we are using for optimization performance as well.
//So what is useCallBack() hook, useCallBack hook is a React hook that allow cache a function definition between re-renders.
//what is cache means cache its like a plain object , caching is a technique used in react it helps to store a copy of a given resource in our browser and serves it back when it is requested.


//What is Memoization:-
// Memoization its a smart way programming technique that we used  to make our functions faster by storing and reusing their past results and it relies on the idea of cache which is like a browsers temporary memory area.


//What is callBack function:-
//callBack function is a function that is passed as an argument to another function and then is executed when another function has finished execution.



//Logic for passwordGenerator:-
const passwordGenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(numbersAllowed) str += "0123456789";
  if(charsAllowed) str += "!@#$%^&*-_+=[]{}~`";
  for (let i = 1; i <= length; i++) {
//Generating random password
let char = Math.floor(Math.random() * str.length + 1);

pass += str.charAt(char)  
  }
  setPassword(pass);
},[length,numbersAllowed,charsAllowed,setPassword]);

//Logic for copying the password to clipboard
//Here again we are using useCallBack hook for performance optimization:-
const copyPassWordToClipboard =  useCallback(()=>{
  //React has an access of window because it has client side rendering.
  passwordRef.current?.select();
window.navigator.clipboard.writeText(password);
},[password])


//What is useEffect hook():-
//useEffect hook in react is used for performing sideEffects in functional components, 
//with the help of useEffect hook it has something to be done after rendering the component or after a state change, we can used in data fetching,manipulating the DOM ,it accepts two arguments the first is callBack function and the second is an optional dependency array.
//Now what are sideffects in react, sideEffects refer to any operations or behaviors that occurs in a component after rendering it ,these sideeffects can be such as data fetching,interactions with the outer world and manipulating the DOM.


//Dependency array in useEffect hook:-
//1.No dependency array:-
//Which means that the effect will run after every render which can lead to performance issues.

//2.Empty dependency array:-
//Which means that it will render only once after initial render.

//3.Dependency array filled with dependencies:-
//Which means that the effect runs when there is change in the dependency.
useEffect(()=>{
passwordGenerator();
},[length,numbersAllowed,charsAllowed,passwordGenerator])


  return (
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 '>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type='text'
          //lets inject the variable 'password'.
          className="outline-none w-full py-1 px-3"
          value={password}
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copyPassWordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600'>
          copy
        </button>
      </div>
    <div  className='flex text-sm gap-x-5'>
    <div className='flex items-center gap-x-1'>
    <input
      type='range'
      min={13}
      max={50}
      id='rangeLength'
      className='cursor-pointer'
      value={length}
      //onChange Event handler:-
      //In React onChange event handler is used to it handles and triggers the action when there is chang in the input field.
      onChange={(event)=> setLength(event.target.value)}
    />
  <label htmlFor='rangeLength'>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input
        type='checkbox'
        defaultChecked={numbersAllowed}
        id='numberInput'
        //setState function can also accepts a callBack function that can take previous values.
        //so here the logic is 'prev' that means by default of numbersAllowed is false so when the user clicks on a check button its true so here the prev value is false then not operator means opposite true converted.
        onChange={()=> setNumbersAllowed((prev)=> !prev)}
      />
        <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charsAllowed}
              id="characterInput"
              //onChange it triggers the callBack function
              onChange={() => {
                  setCharsAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
  )
}

export default App
