import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloudinaryImg from './CloudinaryImg';

const Title = ({ title, backTo = '/', pageName }) => {
  const navigate = useNavigate();

  const onBackArrowClicked = () => {
    return navigate(backTo);
  };

  return (
    <section className={`${pageName}_title`}>
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
