import React, { useState } from "react";

const LoginForm = ({ switchToSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Validate and handle login logic here
    if (username && password) {
      console.log("Logged in successfully!");
      // Add your login logic (e.g., API calls, authentication, etc.)
      setErrorMessage(""); // Clear the error message
    } else {
      setErrorMessage("Please fill in both fields.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
