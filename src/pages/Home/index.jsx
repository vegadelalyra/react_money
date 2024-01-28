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
import { generateTransaction } from '../../utils/transactionHelper';
import { updateAccountData } from '../../store/slices/account/accountThunks';

const Home = () => {
  const dispatch = useDispatch();

  const balance = useSelector(state => state.account.balance);
  const transactions = useSelector(state => state.account.transactions);
  const userEmail = useSelector(state => state.user.user.email);

  const onTransferClicked = async () => {
    if (!balance) return;

    const transactionCharge = -200;
    const transaction = generateTransaction(
      'Pepita Pérez',
      transactionCharge,
      userEmail
    );
    dispatch(
      updateAccountData({
        transactions: [transaction, ...transactions],
        balance: transactionCharge + balance,
      })
    );
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
