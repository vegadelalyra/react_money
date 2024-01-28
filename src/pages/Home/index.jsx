import { useSelector } from 'react-redux';
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

  return (
    <div className='home'>
      <Balance balance={balance} />
      <NotificationProfile />
      <Banner />
      <ActionMenu />
      <History transactions={transactions} />
      <Navbar />
    </div>
  );
};

export default Home;
