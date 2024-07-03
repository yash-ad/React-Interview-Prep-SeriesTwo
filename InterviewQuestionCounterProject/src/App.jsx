
import { useState } from 'react'
import './App.css'

function App() {
 
  const [counter,setCounter] = useState(10)


  const incrementValue = ()=>{
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  //Now here the interview question is ?
  //If an interviewer asks what to do when there are number of setCounter method and what will be the value.
  //What to do with this scenario
  //The Answer is we can updatinng from 5 , suppose here is 10 so we can update till 15 within clicking and updating the state.

  //:- Every setState function it accepts a callBack function , and withIn the callback function there is an asychronous method it holds the previousvalue then update the value by incrementing one.
//Lets go through the practical
setCounter((prevCounter)=> prevCounter + 1)
setCounter((prevCounter)=> prevCounter + 1)
setCounter((prevCounter)=> prevCounter + 1)
setCounter((prevCounter)=> prevCounter + 1)
setCounter((prevCounter)=> prevCounter + 1)

//Here we got the solution it is increasing by 5 and updating the state.
  }
  const decrementValue = ()=>{
    setCounter(counter - 1) 
  }
  return (
   <>
<h1>Interview Question Counter</h1>
<div className='Card'>
<h2>Counter : {counter}</h2>
<br/>
<button onClick={incrementValue}>
  AddValue
</button>
<br/>
<br/>
<button onClick={decrementValue}>
  lessValue
</button>
</div>


   </>
  )
}

export default App
