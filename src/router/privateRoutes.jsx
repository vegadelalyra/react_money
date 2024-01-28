// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ isAuthenticated, children }) => {
  return isAuthenticated ? (
    children
  ) : (
    <Navigate
      to='/'
      replace={true}
    />
  );
};

export default PrivateRoutes;
