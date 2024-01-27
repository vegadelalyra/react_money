// import './styles.sass'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Balance from './components/Balance';
import NotificationProfile from './components/NotificationProfile';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import History from './components/History';
import { setBalance } from '../../store/slices/home/homeSlice';
import './HomePage.sass';

const Home = () => {
    const balance = useSelector(state => state.home.balance);
    const transactions = useSelector(state => state.home.transactions);
    const dispatch = useDispatch();

    const updateBalance = newBalance => {
        dispatch(setBalance(newBalance));
    };

    const swapImages = ['./assets/swap01.svg'];

    return (
        <div className='home'>
            <Balance
                balance={balance}
                setBalance={updateBalance}
            />
            <NotificationProfile />
            <Banner images={swapImages} />
            <Navbar />
            <History transactions={transactions} />
            <div className='footer'>
                <Navbar />
            </div>
        </div>
    );
};

export default Home;
