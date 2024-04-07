// LoginContext.js
import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <LoginContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </LoginContext.Provider>
  );
};
