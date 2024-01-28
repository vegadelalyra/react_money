import React, { useState } from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';
import { useSelector } from 'react-redux';

const Balance = ({ balance, setBalance }) => {
  const isFetchingData = useSelector(state => state.app.isFetchingData);
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  const formatedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  return (
    <main className='balance'>
      <span>Balance</span>
      <div
        className='balance__symbols'
        onClick={toggleVisibility}>
        {!isFetchingData ? (
          <span className='amount'>
            {visible ? `${formatedBalance}` : '********'}
          </span>
        ) : (
          ''
        )}
        {!isFetchingData ? (
          <CloudinaryImg
            publicId={'makaia-transfers-react/home/eye'}
            containerClss={'eyeContainer'}
            imgClss={'eye'}
            alt='Hide balance?'
          />
        ) : (
          ''
        )}
      </div>
    </main>
  );
};

export default Balance;
