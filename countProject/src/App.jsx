import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  // Add value function 
  const addValue = () => {
    setCount(count + 1)
    console.log(count)
  }

  //remove Value function
  const removeValue = () => {
    setCount(count - 1)
  }
  return (
    <>
    <div>
      <h1> Click Count : {count}</h1>
      <button onClick={addValue}
      >addValue</button>
      <br />
      <button onClick={removeValue}
      >removeValue</button>
    </div>
      
    </>
  )
}

export default App
