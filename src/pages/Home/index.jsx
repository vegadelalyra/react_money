import { useDispatch, useSelector } from 'react-redux';
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
import { SET_CONTACT_TO_TRANSFER, SET_TRANSACTION_AMOUNT_SELECTED } from '../../store/slices/app/appSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { balance, transactions } = useSelector(state => state.account);

  const onHistoryTransactionClicked = transaction => {
    dispatch(SET_CONTACT_TO_TRANSFER(transaction.contactToTransfer))
    dispatch(SET_TRANSACTION_AMOUNT_SELECTED(transaction));
    return navigate('/history');
  };

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
      <History
        transactions={transactions}
        onHistoryTransactionClicked={onHistoryTransactionClicked}
      />
      <Navbar />
    </div>
  );
};

export default Home;
