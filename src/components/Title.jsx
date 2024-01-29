import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloudinaryImg from './CloudinaryImg';
import '../assets/title.sass'

const Title = ({ title, backTo = '/', extraLogic }) => {
  const navigate = useNavigate();

  const onBackArrowClicked = () => {
    if (extraLogic) extraLogic();
    return navigate(backTo);
  };

  return (
    <section className={'custom_title'}>
      <CloudinaryImg
        containerClss={'back_arrow'}
        onClick={onBackArrowClicked}
        publicId={'makaia-transfers-react/transaction/back'}
      />
      <h2>{title}</h2>
    </section>
  );
};

export default Title;
