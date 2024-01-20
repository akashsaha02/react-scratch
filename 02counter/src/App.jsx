import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {
    counter += 1
    setCounter(counter)
    // update as a state no callback
    // setCounter(counter)
    // setCounter(counter)
    // setCounter(counter)

    // result will be +1

    // updates with respect to previous state the callback
    // setCounter(prevcounter=>prevcounter+1)
    // setCounter(prevcounter=>prevcounter+1)
    // setCounter(prevcounter=>prevcounter+1)
    // setCounter(prevcounter=>prevcounter+1)

    // result will be +4
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
