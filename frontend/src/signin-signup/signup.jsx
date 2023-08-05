import { useState } from "react";
import logo from "../CONTACT MANAGER.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [verpassword, setVerpassword] = useState("");

  const handleDataChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = async ()=>{
    if(data.name && data.email && data.password && data.password===verpassword){
      try{
      const response = await axios.post("http://127.0.0.1:8000/api/register", data)
      const status = response.data.status
      if (status==='Success'){
        navigate("/")
      }
    }catch(e){
      console.log(e)
    }
    }

  }

  return (
    <div className="container">
      <div className="form form-signup">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="title">Signup</span>
        </div>
        <div className="input-with-label">
          <label>Enter your name:</label>
          <input
            name="name"
            type="text"
            placeholder="Please enter your name"
            value={data.name}
            onChange={handleDataChange}
          />
        </div>
        <div className="input-with-label">
          <label>Enter your email:</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleDataChange}
          />
        </div>
        <div className="input-with-label">
          <label>Enter your password:</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleDataChange}
          />
        </div>
        <div className="input-with-label">
          <label>Verify your password:</label>
          <input
            type="password"
            placeholder="Verify your password"
            value={verpassword}
            onChange={(e) => setVerpassword(e.target.value)}
          />
        </div>
        <div className="btn-link">
          <button 
          type="button" 
          className="signup-btn" 
          id="signup-btn"
          onClick={handleSubmit}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
