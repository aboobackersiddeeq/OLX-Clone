import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';
function Login() {
  const history= useHistory()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleLogin=(e)=>{
    e.preventDefault()
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then(() => {
      
     history.push('/')
    })
  // })
  .catch((error) => {
    alert(error.message)
  });
    
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='Logo'/>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>

        <p onClick={()=>history.push('/signup')}>Signup</p>
      </div>
    </div>
  );
}

export default Login;
