import { useState,useEffect } from "react"


function Github() {
//useState hook for managing state into the functional component.
//Here we are using for stroring the data into state variable and updating the function via setState function

const [data,setData]=useState({})

    //Lets make an API call for handling sideEffects in functional component here we are using
    //useEffect hook.
    useEffect(()=>{
        fetch('https://api.github.com/users/yash-ad')
        .then((Response)=> Response.json())
        .then((Data)=> setData(Data))
    },[]) //Empty dependency array which means it will run only once after intitial render.
  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
   <h1>User Name: {data.name}</h1>
   <h1>{data.bio}</h1>
    <img  src={data.avatar_url} alt="github-image"/>
    </div>
  )
}

export default Github