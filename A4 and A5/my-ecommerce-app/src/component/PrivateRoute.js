// PrivateRoute.js
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoginContext } from './LoginContext';

const PrivateRoute = ({ children }) => {
  const { authenticated } = useContext(LoginContext);

  return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
