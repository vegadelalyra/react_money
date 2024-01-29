import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';
import { useNavigate } from 'react-router-dom';

const Title = () => {
  const navigate = useNavigate();

  const onBackArrowClicked = () => {
    return navigate('/');
  };

  return (
    <section className='transaction_title'>
      <CloudinaryImg
        containerClss={'back_arrow'}
        onClick={onBackArrowClicked}
        publicId={'makaia-transfers-react/transaction/back'}
      />
      <h2>Transfer to</h2>
    </section>
  );
};

export default Title;
