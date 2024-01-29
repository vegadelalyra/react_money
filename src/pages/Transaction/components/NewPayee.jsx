import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const NewPayee = () => {
  return (
    <section className='newpayee__container'>
      <div className='newpayee'>
        <CloudinaryImg containerClss={'newpayee_icon'}
          publicId={'makaia-transfers-react/transaction/newpayee'}
        />
        <span>New Payee</span>
      </div>
    </section>
  );
};

export default NewPayee;
