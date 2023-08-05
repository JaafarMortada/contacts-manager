import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../CONTACT MANAGER.svg';
import { useNavigate } from "react-router-dom"
import axios from "axios";
const Signin = () => {
    localStorage.clear()
    const navigate = useNavigate();
    const [data, setData] = useState({
      email: "",
      password: ""
    })

    const handleDataChange = (e)=>{
      setData({...data, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = async ()=>{
      if(data.email && data.password){
        try{
        const response = await axios.post("http://127.0.0.1:8000/api/login", data)
        const status = response.data.status
        if (status==='Success'){
          localStorage.setItem("token", response.data.data.token)
          navigate("/home")
        } 
      }catch(e){
        const signin_btn = document.getElementById("signin-btn")
        signin_btn.innerHTML = 'Failed'
        setTimeout(() => { signin_btn.innerHTML = 'Signin' }, 3000)
      }
      }
  
    }
    return (
            <div className='container'>
              <div className='form'>
              <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
                <span className="title">Signin</span>
              </div>
              <div className="input-with-label">
                  <label>Enter your email:</label>
                  <input 
                  name="email"
                  type="email" 
                  placeholder="Enter your email" 
                  value={ data.email }
                  onChange={handleDataChange}
                  />
              </div>
              <div className="input-with-label">
                  <label>Enter your password:</label>
                  <input 
                  name="password"
                  type="password" 
                  placeholder="Enter your password"
                  value={ data.password }
                  onChange={handleDataChange}
                  />
              </div>
              
              <div className="btn-link">
                  <Link to='/signup' className='go-sign-up'>Don't have an account?<br/>Create one here!</Link>
                  <button 
                  type="button" 
                  className="signin-btn" 
                  id="signin-btn"
                  onClick={handleSubmit}
                  >Signin</button>
              </div>
              </div>
            </div>        
    )
}

export default Signin