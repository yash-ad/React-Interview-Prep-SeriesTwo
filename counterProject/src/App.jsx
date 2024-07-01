import { useState } from 'react'
import './App.css'

function App() {
let[counter,setCounter]=useState(0);

const addValue = ()=>{
  if(counter < 20){

    setCounter(counter + 1)
  }
}

const lessValue = ()=>{
if(counter > 0)
  setCounter(counter - 1)
}

  return (
    <>
<h1>Counter Project</h1>
 <h2>Counter : {counter}</h2>
<div className='card'>
<br/>
 <button onClick={addValue}>Increment {counter}</button>
 <br/>
 <br/>
 <button onClick={lessValue}>Decrement {counter}</button>
</div>
    </>
  )
}

export default App
