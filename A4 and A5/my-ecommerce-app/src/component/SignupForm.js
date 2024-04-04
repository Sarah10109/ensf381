// SignupForm.js
import React, { useState } from 'react';

const SignupForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [signupAuthenticated, setSignupAuthenticated] = useState(true);
  
  const handleSignup = () => {
    // Validate and handle signup logic here
    if (username && password && confirmPassword && email) {
      if (password === confirmPassword) {
        // Authenticating signup
        fetch('http://127.0.0.1:5000/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({'username': username, 'password': password, 'email': email})
        }).then(response => response.json())
          .then(response => {
            if (!response.signupAuthenticated) {
              setSignupAuthenticated(false);
              setMessage("Username already exists.")
            } else {
              setSignupAuthenticated(true);
              setMessage('User signed up successfully!');
              setErrorMessage(''); // Clear any previous error messages
            }
          }).catch(error => {
            console.error(error);
            setMessage('An error occurred.');
          });
      } else {
        setErrorMessage('Passwords do not match!');
      }
    } else {
      setErrorMessage('All fields are required.');
    }
  };
    
  return (
    <div>
        <h1>Signup</h1>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {message && <p style={{ color: "red" }}>{message}</p>}

        <label>Username: </label>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password: </label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label>Confirm Password: </label>
      <input
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <label>Email: </label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={handleSignup}>Signup</button>
      <br />
      <button onClick={switchToLogin}>Switch to Login</button>
    </div>
  );
};

export default SignupForm;
