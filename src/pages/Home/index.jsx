import { useSelector, useDispatch } from 'react-redux';
import { SET_BALANCE } from '../../store/slices/account/accountSlice';
import {
  Balance,
  NotificationProfile,
  Banner,
  ActionMenu,
  History,
  Navbar,
} from './components';
import './styles.sass';

const Home = () => {
  const balance = useSelector(state => state.account.balance);
  const transactions = useSelector(state => state.account.transactions);

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
