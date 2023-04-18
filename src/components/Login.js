import React,{useState} from 'react'
import { auth } from '../fire';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({setAuthState,setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function switchRegister() {
        setAuthState('register');
    }

    const handleLogin = () => {
        if(email !== null && password !== null) {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setUser(email);
                setAuthState('home')
            })
            .catch((err) => {
                alert(err);
            })
        }
    }

  return (
    <div className='container'>
    <h2>Login Page</h2>

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

<button onClick={handleLogin}>Login</button>
    <p>Don't have an Account ? <span onClick={() => switchRegister('register')}>SignUp</span></p>
</div>
  )
}

export default Login