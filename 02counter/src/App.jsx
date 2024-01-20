import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {
    counter += 1
    setCounter(counter)
  }

  const decreaseValue = () => {
    counter -= 1
    if (counter < 0) counter = 0
    setCounter(counter)
  }

  return (
    <>
      <h1>Hello Bossman</h1>
      <h2>Counter value:{counter}</h2>
      <div className="btns">
        <button onClick={addValue}>Add value</button> <br />
        <button onClick={decreaseValue}>Decrease value</button>
      </div>
    </>
  )
}

export default App
