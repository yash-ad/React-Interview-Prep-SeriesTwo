import { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children})=>{
//State for data.
const[user,setUser]=useState(null)

//Pass 'children' as a prop.
//We have to pass the value or values by wrapping around UserContext.Provider
    return(
        //Object for accessing values into the value 'prop'
   <UserContext.Provider value={{user,setUser}}>
{children}
   </UserContext.Provider> 
)
}


export default UserContextProvider;