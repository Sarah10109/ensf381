import React, { useState } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Footer from "./Footer";

const LoginPage = () => {
  // State to track whether to show login or signup form
  const [showLoginForm, setShowLoginForm] = useState(true);

  // Function to switch to the login form
  const switchToLogin = () => {
    setShowLoginForm(true);
  };

  // Function to switch to the signup form
  const switchToSignup = () => {
    setShowLoginForm(false);
  };

  return (
    <div>
      <Header />
      {showLoginForm ? (
        <LoginForm switchToSignup={switchToSignup} />
      ) : (
        <SignupForm switchToLogin={switchToLogin} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
