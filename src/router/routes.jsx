import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import Transaction from '../pages/Transaction';
import NewPayeePage from '../pages/NewPayee';
import TransferTo from '../pages/TransferTo';
import Success from '../pages/Success';

const AppRoutes = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const isContactToTransferChosen = useSelector(
    state => state.app.contactToTransfer
  );

  return (
    <Routes>
      <Route
        path='/'
        element={isAuthenticated ? <Home /> : <LoginPage />}
      />
      <Route
        path='/transaction'
        element={
          isAuthenticated ? (
            isContactToTransferChosen ? (
              <TransferTo />
            ) : (
              <Transaction />
            )
          ) : (
            <LoginPage />
          )
        }
      />
      <Route
        path='/newpayee'
        element={isAuthenticated ? <NewPayeePage /> : <LoginPage />}
      />
      <Route
        path='/history'
        element={
          isAuthenticated ? (
            isContactToTransferChosen ? (
              <Success />
            ) : (
              <Transaction />
            )
          ) : (
            <LoginPage />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
