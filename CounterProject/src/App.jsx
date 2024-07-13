import { useState } from 'react'
import './App.css'

function App() {
  
  //let counter = 15;

  let [counter,setCounter] = useState(15);

  const addValue = () =>{
    counter = counter + 1;
    console.log("Value Added",counter);
    setCounter(counter);
  }

  const removeValue = () =>{
    counter = counter - 1;
    console.log("Value Decreased", counter);
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button> 
      <br/>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
