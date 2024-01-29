import React from 'react';
import './styles.sass';
import Title from '../../components/Title';
import { useDispatch } from 'react-redux';
import { SET_CONTACT_TO_TRANSFER } from '../../store/slices/app/appSlice';

const TransferTo = () => {
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
        pageName={'transfer_to'}
      />
    </div>
  );
};

export default TransferTo;
