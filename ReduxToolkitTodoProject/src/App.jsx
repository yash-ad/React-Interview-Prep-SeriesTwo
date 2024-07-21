import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {
 

  return (
    <>
      <h1 className="text-4xl text-center text-white mt-5">Redux-Toolkit Todo</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
