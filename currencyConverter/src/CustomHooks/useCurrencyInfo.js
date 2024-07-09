import {useEffect,useState} from 'react'



function useCurrencyInfo (currency){
    const[data,setData]= useState({});
    
    //When component mounts that means the reacts lifecycle triggers the method when the after component is rendered to the Dom.
//In functional component useEffect for handling sideEffects.
//To make an API calls.
   useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
    .then((response)=> response.json())
    .then((responseData)=> setData(responseData[currency]))
    .catch((error)=> console.error(error,"Error Found"))
   }, [currency]);
return data;
}

export default useCurrencyInfo;