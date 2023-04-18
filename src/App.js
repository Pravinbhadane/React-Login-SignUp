import { useState, useEffect } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './fire';


const App = ()  => {
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth,
      async authenticatedUser => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email)
          setAuthState('home')
        } else {
          setUser(null)
          setAuthState('login')
        }
      })
    return unSubscribeAuth
  }, [user])

  if(authState === null) return <h1>Loading.....</h1>
  if(authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser}/>
  if(authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser}/>
  if(user) return <Home setAuthState={setAuthState} setUser={setUser} user={user}/>

  return (
    <div className="App">

      <Register />
      
    </div>
  );
}

export default App;
