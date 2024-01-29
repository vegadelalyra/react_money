import './styles.sass';
import React from 'react';
import Title from '../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_CONTACT_TO_TRANSFER,
  SET_TRANSACTION_AMOUNT_SELECTED,
} from '../../store/slices/app/appSlice';
import Payee from './components/Payee';
import TransactionBody from './components/TransactionBody';
import { useNavigate } from 'react-router-dom';
import { updateAccountData } from '../../store/slices/account/accountThunks';

const TransferTo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedContact = useSelector(state => state.app.contactToTransfer);
  const { balance, transactions } = useSelector(state => state.account);
  const { contactToTransfer } = useSelector(state => state.app);

  const returnToContacts = () => {
    return dispatch(SET_CONTACT_TO_TRANSFER(false));
  };

  const onFormSubmitted = transaction => {
    dispatch(SET_TRANSACTION_AMOUNT_SELECTED(transaction));
    dispatch(
      updateAccountData({
        transactions: [transaction, ...transactions],
        balance: transaction.amount + balance,
      })
    );
    return navigate('/history');
  };

  return (
    <div className='transfer_to__page'>
      <Title
        extraLogic={returnToContacts}
        backTo='/transaction'
        title={'Transfer to'}
      />
      <Payee contact={selectedContact} />
      <TransactionBody
        onFormSubmitted={onFormSubmitted}
        balance={balance}
        contactToTransfer={contactToTransfer}
      />
    </div>
  );
};

export default TransferTo;
