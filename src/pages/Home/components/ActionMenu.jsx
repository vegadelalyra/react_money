// ActionMenu.js
import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const ActionMenu = () => {
  const IncrustedCircle = ({ publicId, alt, text, imgCls }) => {
    return (
      <div className='actionMenuItem'>
        <CloudinaryImg
          containerClss={'cloudinaryImgWrapper'}
          publicId={publicId}
          alt={alt} imgClss={imgCls}
        />
        {text}
      </div>
    );
  };

  return (
    <nav className='actionMenu__container'>
      <section className='actionMenu'>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/addMoney'}
          alt={'add'}
          text={'Add money'}></IncrustedCircle>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/QR'}
          alt={'QR'}
          text={'QR code'}
          imgCls={'qr'}></IncrustedCircle>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/transfer'}
          alt={'swap'} imgCls={'transfer'}
          text={'Transfer'}></IncrustedCircle>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/statistic'}
          alt={'stat'}
          text={'Statistic'}></IncrustedCircle>
      </section>
    </nav>
  );
};

export default ActionMenu;
