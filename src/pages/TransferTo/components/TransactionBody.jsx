import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const TransactionBody = ({ onFormSubmitted, balance }) => {
  return (
    <form
      className='transaction_body__container'
      onSubmit={onFormSubmitted}>
      <label htmlFor='amount'>Enter amount</label>
      <input
        type='text'
        id='amount'
        name='amount'
        value={'150.00'}
      />
      <label htmlFor='balance'>Transfer</label>
      <div
        id='balance'
        name='balance'>
        <div className='walletDetails'>
          <CloudinaryImg
            publicId={'makaia-transfers-react/transaction/wallet'}
          />
          <div className='details'>
            <span className='titleSpan'>Transfer wallet</span>
            <span className='balanceSpan'>{`Balance: $${balance}.00`}</span>
          </div>
        </div>
        <CloudinaryImg
          publicId={'makaia-transfers-react/transaction/transfer_methods'}
        />
      </div>
      <label htmlFor='note' id='noteLabel'>Note (optional)</label>
      <textarea
        name='note'
        id='note'
        cols='30'
        rows='10'>
        Thanks for helping me with the project! Couldn't finish so quickly
        without you 🙏
      </textarea>
      <button type='submit'>
        <span>Continue</span>
      </button>
    </form>
  );
};

export default TransactionBody;
