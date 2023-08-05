import { useState } from "react";
import logo from "../CONTACT MANAGER.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verpassword, setVerpassword] = useState("");

  return (
    <div className="container">
      <div className="form form-signup">
        <div class="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="title">Signup</span>
        </div>
        <div class="input-with-label">
          <label>Enter your name:</label>
          <input
            type="text"
            placeholder="Please enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="input-with-label">
          <label>Enter your email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="input-with-label">
          <label>Enter your password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="input-with-label">
          <label>Verify your password:</label>
          <input
            type="password"
            placeholder="Verify your password"
            value={verpassword}
            onChange={(e) => setVerpassword(e.target.value)}
          />
        </div>
        <div class="btn-link">
          <button type="button" class="signup-btn" id="signup-btn">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
