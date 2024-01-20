import { useState } from 'react'


function App() {
  const [color, setColor] = useState("lavender");
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-center py-10 font-extrabold text-3xl text-white uppercase bg-lime-950"
        >Simple color changer using React Hooks useState</h1>
        <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-0' >


          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl'>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-xl text-white shadow-xl'
              style={{ backgroundColor: 'red' }}
            >Red</button>
            <button
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-xl text-white shadow-xl'
              style={{ backgroundColor: 'green' }}
            >Green</button>
            <button
              onClick={() => setColor("blue")}
              className='outline-none px-4 py-1 rounded-xl text-white shadow-xl'
              style={{ backgroundColor: 'blue' }}
            >Blue</button>
            <button
              onClick={() => setColor("olive")}
              className='outline-none px-4 py-1 rounded-xl text-white shadow-xl'
              style={{ backgroundColor: 'olive' }}
            >Olive</button>
            <button
              onClick={() => setColor("purple")}
              className='outline-none px-4 py-1 rounded-xl text-white shadow-xl'
              style={{ backgroundColor: 'purple' }}
            >Purple</button>
            <button
              onClick={() => setColor("lime")}
              className='outline-none px-4 py-1 rounded-xl text-white shadow-xl'
              style={{ backgroundColor: 'lime' }}
            >Lime</button>
            <button
              onClick={() => setColor("black")}
              className='outline-none px-4 py-1 rounded-xl text-white shadow-xl'
              style={{ backgroundColor: 'black' }}
            >Black</button>
            <button
              onClick={() => setColor("indigo")}
              className='outline-none px-4 py-1 rounded-xl text-white shadow-xl'
              style={{ backgroundColor: 'indigo' }}
            >Indigo</button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
