import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h2 className=' bg-indigo-700 rounded p-4 text-2xl mb-5 font-semibold'>Context API state management</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>

  )
}

export default App
