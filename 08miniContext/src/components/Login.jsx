import React, { useContext, useState } from 'react'
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
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
