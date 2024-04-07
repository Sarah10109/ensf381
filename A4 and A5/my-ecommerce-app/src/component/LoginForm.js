// LoginForm.js
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from './LoginContext';

const LoginForm = ({ switchToSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { authenticated, setAuthenticated } = useContext(LoginContext);

  const handleLogin = () => {
    if (username && password) {
      fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'username': username, 'password': password})
      }).then(response => response.json())
      .then(response => {
        if (response.authenticated) {
          setAuthenticated(true);
          setMessage("Login successful");
          navigate('/products'); // Redirect to the products page after successful login
        } else {
          setAuthenticated(false);
          setMessage('Incorrect username or password.');
        }
      }).catch(error => {
        console.error(error);
        setMessage('An error occurred.');
      });
      console.log("Logged in successfully!");
      setErrorMessage("");
    } else {
      setErrorMessage("Please fill in both fields.");
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {message && <p style={{ color: "red" }}>{message}</p>}
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={switchToSignup}>Switch to Signup</button>
    </div>
  );
};

export default LoginForm;
