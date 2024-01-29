import './styles.sass';
import React from 'react';
import Title from '../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CONTACT_TO_TRANSFER, SET_TRANSACTION_AMOUNT_SELECTED } from '../../store/slices/app/appSlice';
import Payee from './components/payee';
import TransactionBody from './components/TransactionBody';
import { useNavigate } from 'react-router-dom';

const TransferTo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedContact = useSelector(state => state.app.contactToTransfer);
  const balance = useSelector(state => state.account.balance);

  const returnToContacts = () => {
    return dispatch(SET_CONTACT_TO_TRANSFER(false));
  };

  const onFormSubmitted = transaction => {
    dispatch(SET_TRANSACTION_AMOUNT_SELECTED(transaction))
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
      />
    </div>
  );
};

export default TransferTo;
