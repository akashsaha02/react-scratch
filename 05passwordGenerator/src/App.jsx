import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  // States
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+=-{}[];':,.<>/?|~"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
    <div>
      <h1 className=' text-white text-4xl text-center'>Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-slate-400 text-black">
        <div className="flex shadow-rounded-lg overflow-hidden py-2">

        {/* Password generation field */}
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 my-2 rounded-lg'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          {/* copy button */}
          <button
            onClick={copyToClipboard()}
            className=' outline-none bg-green-700 text-white px-3 py-2 my-2 ml-3 shrink-0 rounded-lg'>copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 pb-3">
          <div className="flex items-center gap-x-1">
          {/* Range slider */}
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className=' cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
          {/* number checkbox */}
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => { setNumberAllowed(prev => !prev) }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          {/* character checkbox */}          
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => { setCharAllowed(prev => !prev) }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App



// useCallback cache a function b/w re renders