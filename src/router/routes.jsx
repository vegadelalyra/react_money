import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import Transaction from '../pages/Transaction';
import PrivateRoutes from './privateRoutes';

const AppRoutes = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    <Routes>
      <Route
        path='/'
        element={isAuthenticated ? <Home /> : <LoginPage />}
      />
      <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
        <Route
          path='/transaction'
          element={<Transaction />}
        />
        {/* path='/transaction'
        element={isAuthenticated ? <Transaction /> : <LoginPage />}
      /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
