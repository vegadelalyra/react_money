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
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const { balance, transactions } = useSelector(state => state.account);

  const onTransferClicked = () => {
    if (!balance) return;

    return navigate('/transaction');
  };

  return (
    <div className='home'>
      <Balance balance={balance} />
      <NotificationProfile />
      <Banner />
      <ActionMenu onTransferClicked={onTransferClicked} />
      <History transactions={transactions} />
      <Navbar />
    </div>
  );
};

export default Home;
