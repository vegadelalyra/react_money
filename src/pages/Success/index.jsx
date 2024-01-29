import './styles.sass';
import React from 'react';
import Header from './components/Header';
import FavContact from './components/favContact';
import Summary from './components/Summary';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CONTACT_TO_TRANSFER } from '../../store/slices/app/appSlice';

const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contact = useSelector(state => state.app.contactToTransfer);
  const transaction = useSelector(state => state.app.transactionAmountSelected);

  const onBackClicked = () => {
    dispatch(SET_CONTACT_TO_TRANSFER(false));
    return navigate('/transaction');
  };

  const onBackToHomeClicked = () => {
    dispatch(SET_CONTACT_TO_TRANSFER(false));
    return navigate('/');
  };

  return (
    <main className='success__page'>
      <Header onBackClicked={onBackClicked} />
      <span className='transferto'>Transfer to</span>
      <FavContact contact={contact} />
      <Summary transaction={transaction} onBackToHomeClicked={onBackToHomeClicked} />
    </main>
  );
};

export default Success;
