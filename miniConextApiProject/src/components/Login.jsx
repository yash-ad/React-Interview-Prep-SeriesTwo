import { useState,useContext } from "react";
import UserContext from '../context/UserContext'

function Login() {
//State is used for updating and storing the values of an Input Box
const[username,setUsername] = useState("");
const[password,setPassword] = useState("")


//Data sending to the profile component.
//Dispatch

const {setUser} = useContext(UserContext);

    const handleSubmit = (event)=>{
event.preventDefault();
setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input
            type="text"
            placeholder="Username"
            value={username}
          onChange={(event)=> setUsername(event.target.value)}
     
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
        />
        <button
        onClick={handleSubmit}>
        </button>
    </div>
  )
}

export default Login