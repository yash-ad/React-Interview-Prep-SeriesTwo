
import './App.css'
import Card from './Card'

function App() {
 

  const myArr = [1,2,3,4,5];

  const clickHandler = ()=>{
    console.log("Button clicked");
  }

  return (
 <>
<h1 className=''>
  Tailwind and Props
</h1>
<br/>
<Card ladyName ="Bella"  data = {myArr} btnText = "Browse Me" handler = {clickHandler}/>
<br/>
<Card  ladyName ="Angela" data = {myArr} btnText = "Click Me" handler = {clickHandler}/>
 </>

  )
}

export default App
