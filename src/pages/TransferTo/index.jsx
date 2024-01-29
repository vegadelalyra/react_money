import './styles.sass';
import React from 'react';
import Title from '../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CONTACT_TO_TRANSFER } from '../../store/slices/app/appSlice';
import Payee from './components/payee';
import TransactionBody from './components/TransactionBody'

const TransferTo = () => {
  const selectedContact = useSelector(state => state.app.contactToTransfer)
  const dispatch = useDispatch()


  const returnToContacts = () => {
    dispatch(SET_CONTACT_TO_TRANSFER(false))
  }

  return (
    <div className='transfer_to__page'>
      <Title
        extraLogic={returnToContacts}
        backTo='/transaction'
        title={'Transfer to'}
      />
      <Payee contact={selectedContact} />
      <TransactionBody />
    </div>
  );
};

export default TransferTo;
