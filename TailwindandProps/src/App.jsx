
import './App.css'
import Card from './Card'

function App() {
 

  const myArr = [1,2,3,4,5];

  return (
 <>
<h1 className=''>
  Tailwind and Props
</h1>
<br/>
<Card ladyName ="Bella"  data = {myArr}/>
<br/>
<Card  ladyName ="Angela" data = {myArr}/>
 </>

  )
}

export default App
