import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import "./Login.scss";
import newRequest from '../../utils/newRequest.js';


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

      console.log(email,password);
      const res = await newRequest.post("/auth/login",{email,password});
      console.log(res);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log("Logging in...");
      navigate("/");
  
    }
    catch (err) {
      console.log('error in login frontend page ')
    }
   
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="register-link">
        <p>Dot have an account?</p>
        <Link to="/register">Register here</Link>
      </div>
    </div>
  );
}

export default Login;
