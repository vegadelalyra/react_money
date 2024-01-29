import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';
import { getRandomSection } from '../../../utils/transactionHelper';

const TransactionBody = ({ onFormSubmitted, balance, contactToTransfer }) => {
  const handleSubmit = event => {
    event.preventDefault();
    
    // Convert amount input value to a number without symbols or dots
    const amountInput = event.target.elements.amount;
    const amountValue = parseFloat(amountInput.value.replace(/[^\d.]/g, ''));

    // Define a random section for the balance movement
    const section = getRandomSection(amountValue)

    // Get the note value directly from the textarea
    const noteValue = event.target.elements.note.value;

    // Generate a random 5-digit transaction ID
    const transactionId = Math.floor(10000 + Math.random() * 90000).toString();

    // Generate the current time
    const currentTime = new Date();
    const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()} ${currentTime.toLocaleDateString()}`;

    onFormSubmitted({
      amount: amountValue,
      time: formattedTime,
      id: transactionId,
      note: noteValue,
      section,
      contactToTransfer
    });
  };

  return (
    <form
      className='transaction_body__container'
      onSubmit={handleSubmit}>
      <label htmlFor='amount'>Enter amount</label>
      <input
        type='text'
        id='amount'
        name='amount'
        defaultValue={'150.00'}
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
      <label
        htmlFor='note'
        id='noteLabel'>
        Note (optional)
      </label>
      <textarea
        name='note'
        id='note'
        cols='30'
        rows='10'
        defaultValue={
          "Thanks for helping me with the project! Couldn't finish so quickly without you 🙏"
        }
      />
      <button type='submit'>
        <span>Continue</span>
      </button>
    </form>
  );
};

export default TransactionBody;
