import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signIn = () => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img src="" alt="logo" />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Hamro Market's conditions of Use and
          Privacy Notice.
        </p>
        <p>Now to Hamro Market</p>
        <Link to={"/register"}>
            <button className="login-register">Create Your Hamro Market Account</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
