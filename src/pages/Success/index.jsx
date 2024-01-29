import './styles.sass';
import React from 'react';
import Header from './components/Header';
import FavContact from './components/favContact';
import Summary from './components/Summary';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_CONTACT_TO_TRANSFER,
  SET_TRANSACTION_AMOUNT_SELECTED,
} from '../../store/slices/app/appSlice';
import { updateAccountData } from '../../store/slices/account/accountThunks';

const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contact = useSelector(state => state.app.contactToTransfer);
  const transaction = useSelector(state => state.app.transactionAmountSelected);
  const { contacts } = useSelector(state => state.account);

  const onBackClicked = () => {
    dispatch(SET_CONTACT_TO_TRANSFER(false));
    dispatch(SET_TRANSACTION_AMOUNT_SELECTED(false));
    return navigate('/transaction');
  };

  const onBackToHomeClicked = () => {
    dispatch(SET_CONTACT_TO_TRANSFER(false));
    dispatch(SET_TRANSACTION_AMOUNT_SELECTED(false));
    return navigate('/');
  };

  const toggleFavorite = isFav => {
    const newContacts = [...contacts];
    const index = newContacts.findIndex(saved => saved.email === contact.email);
    newContacts[index] = { ...contact, isFavorite : isFav };
    return dispatch(updateAccountData({ contacts: newContacts }));
  };

  return (
    <main className='success__page'>
      <Header onBackClicked={onBackClicked} />
      <span className='transferto'>Transfer to</span>
      <FavContact
        contact={contact}
        toggleFavorite={toggleFavorite}
      />
      <Summary
        transaction={transaction}
        onBackToHomeClicked={onBackToHomeClicked}
      />
    </main>
  );
};

export default Success;
