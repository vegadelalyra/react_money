import React from 'react';
import Balance from './components/Balance';
import NotificationProfile from './components/NotificationProfile';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import History from './components/History';
import ActionMenu from './components/ActionMenu';
import { useSelector, useDispatch } from 'react-redux';
import { SET_BALANCE } from '../../store/slices/home/homeSlice';
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
