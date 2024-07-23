import { useState } from "react"


function App() {

  const [value, setValue] = useState(1);

  // const [multipliedValue, setMultipliedValue] = useState(1);

  //here we can save  the above line of code:-

  let multipliedValue = value * 5;

  const handleChange = () => {
    // setMultipliedValue(value * 5)
    setValue(value + 1)
  }
  return (
    <>
      <h1>you dont need state for this | react interview question</h1>
        <h2>Main Value: {value}</h2>
        <button
          onClick={handleChange}
        >Click to multiply by 5</button>
        <h2>Multiplied Value: {multipliedValue}</h2>
    </>
  )
}

export default App
