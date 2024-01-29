import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';
import { useNavigate } from 'react-router-dom';

const NewPayee = () => {
  const navigate = useNavigate()

  const onNewPayeeClicked = () => {
    return navigate('/newpayee')
  }

  return (
    <section className='newpayee__container'>
      <div className='newpayee' onClick={onNewPayeeClicked}>
        <CloudinaryImg containerClss={'newpayee_icon'}
          publicId={'makaia-transfers-react/transaction/newpayee'}
        />
        <span>New Payee</span>
      </div>
    </section>
  );
};

export default NewPayee;
