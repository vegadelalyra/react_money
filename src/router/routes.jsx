import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import Transaction from '../pages/Transaction';

const AppRoutes = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    <Routes>
      <Route
        path='/'
        element={isAuthenticated ? <Home /> : <LoginPage />}
      />
      <Route
        path='/transaction'
        element={isAuthenticated ? <Transaction /> : <LoginPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
