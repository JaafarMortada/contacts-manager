import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../CONTACT MANAGER.svg';
import './styles.css'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
            <div className='container'>
              <div className='form'>
              <div class="logo">
                <img src={logo} className="App-logo" alt="logo" />
                <span className="title">Signin</span>
              </div>
              <div class="input-with-label">
                  <label>Enter your email:</label>
                  <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={ email }
                  onChange={ e => setEmail(e.target.value)}
                  />
              </div>
              <div class="input-with-label">
                  <label>Enter your password:</label>
                  <input 
                  type="password" 
                  placeholder="Enter your password"
                  value={ password }
                  onChange={ e => setPassword(e.target.value)}
                  />
              </div>
              
              <div class="btn-link">
                  <Link to='/signup' className='go-sign-up'>Don't have an account?<br/>Create one here!</Link>
                  <Link to='/home' type="button" className="signin-btn" id="signin-btn">Signin</Link>
              </div>
              </div>
            </div>        
    )
}

export default Signin