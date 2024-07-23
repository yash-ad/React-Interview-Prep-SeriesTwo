import { useState } from "react"


function QuestionTwo() {
    console.log("App Rendered",Math.random());
    const [value, setValue] = useState({
        value:0
    })
    const handleClick = () => {
        setValue({
        value:0
    })
    }
  return (
      <div>
          <h1>Main Value:{value.value}</h1>
          <button
              onClick={handleClick}
          >Click me</button>
    </div>
  )
}

export default QuestionTwo




//Javascript data types :-
//Primitive and non-primitive data types:-


//Primitive data types are passed by value.
//Non-primitive data types are passed by reference.