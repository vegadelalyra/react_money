import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_BALANCE } from '../../store/slices/home/homeSlice';
import {
    Balance,
    NotificationProfile,
    Banner,
    ActionMenu,
    History,
    Navbar,
} from './components';
import './HomePage.sass';

const Home = () => {
  const balance = useSelector(state => state.home.balance);
  const transactions = useSelector(state => state.home.transactions);
  const dispatch = useDispatch();

  const updateBalance = newBalance => {
    dispatch(SET_BALANCE(newBalance));
  };

  return (
    <div className='home'>
      <Balance
        balance={balance}
        setBalance={updateBalance}
      />
      <NotificationProfile />
      <Banner />
      <ActionMenu />
      <History transactions={transactions} />
      <Navbar />
    </div>
  );
};

export default Home;
