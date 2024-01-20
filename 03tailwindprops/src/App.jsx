import './App.css'
import Card from './Card'

function App() {
  /* we can pass obj or array as props in othher components */
  let myObj = {
    username: 'Akash',
    age: 21
  }

  let newArr = [1, 2, 4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card name="Akash" btnText="See profile" />
      <Card name="Saha" btnText="Explore more" />
    </>
  )
}

export default App
