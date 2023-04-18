import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../fire'

const Register = ({ setUser, setAuthState }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function changeState() {
        setAuthState('login')
    }

    function handleRegister() {
        if (email !== null && password !== null) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setUser(email)
                    setAuthState('home')
                })
                .catch((err) => {
                    alert(err)
                })
        }
    }
    
    return (
        <div className='container'>
            <h2>SignUp Page</h2>

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder='Email'
            />

            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder='Password'
            />

            <button onClick={handleRegister}>Sign Up</button>
            <p>Already have an Account ? <span onClick={() => changeState('login')}>Login</span></p>
        </div>
    )
}

export default Register