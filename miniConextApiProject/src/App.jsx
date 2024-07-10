
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {

  return (
    <UserContextProvider>
  <h1>Mini Project using Reacts Context API</h1>
  {/* //Into the 'UserContextProvider' Lets wrap the components. */}
  <Login/>
<Profile/>
  </UserContextProvider>
  )
}

export default App



//Notes:-

///.Imp:-What is React context?
//In React context is a feature it is a mechanism for global state management.it is used to sharing the data through the component tree without passing props down manually at every level to avoid props drilling.




//1.CreateContext()
//2.create a component context.Provider and set the value as a prop.
//3.useContext ()
//4.created context into the 'useContext(createdCotext)'
//5.Dispatching the data to child component
//6.Selecting the data from parent component