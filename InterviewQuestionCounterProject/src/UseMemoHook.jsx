import { useMemo, useState } from 'react'

function UseMemoHook() {

//Problem solving:-

const[counterOne,setCounterOne]= useState(0);
const[counterTwo,setCounterTwo]= useState(0);


const incrementCounterOne = ()=>{
  setCounterOne(counterOne + 1)
}

const incrementCounterTwo = ()=>{
  setCounterTwo(counterTwo + 1)
}

//Lets create a function for to find Even or odd number:-
// const isEven = ()=>{
//   //Lets create some complex scenario:-
//   let i = 0;
//   while( i < 2000000000) i++;
// return counterOne % 2 === 0;
// }

///.Now here the scenario in the code is it takes time to show result, so here we want to optimize the performance of an application or website,
//So how do we do that By using 'useMemo()' comes into the picture:-


//What is useMemo() hook:-
//UseMemo is react hook that let cache the result of a calculation between re-renders.
//It is used for performance optimization concept,It accepts a callBack function and dependency array as an argument.
//Lets use it in this scenario to reduce time consuming calculations.


const optimizedCode = useMemo(()=>{
  let i = 0;
  while( i < 2000000000) i++;
return counterOne % 2 === 0;
},[counterOne])
  return (
    <div>
    <button onClick={incrementCounterOne}>counterOne:{counterOne}</button>
    <br/>
    {/* <span>{isEven() ? "Even num" : "Odd num"}</span> */}
    <span>{optimizedCode ? "Even num" : "Odd num"}</span>
    <br/>
    <button onClick={incrementCounterTwo}>counterTwo:{counterTwo}</button>
    </div>
    
  )
}

export default UseMemoHook