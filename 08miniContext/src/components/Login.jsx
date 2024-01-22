import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    // state change handled by useState
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //setUser is called from UserContext to pass the data of user
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div className='bg-gray-700 p-6 rounded'>
            <h2 className='border-2 border-solid border-indigo-700 rounded-xl bg-indigo-950 p-3 text-xl font-bold mb-4'>Login</h2>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required' type="text" placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /> <br />
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required' type="password" placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /> <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
