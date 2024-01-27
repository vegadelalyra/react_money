// ActionMenu.js
import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';
import { SET_BALANCE } from '../../../store/slices/home/homeSlice';
import { useDispatch } from 'react-redux';


const ActionMenu = () => {
  const dispatch = useDispatch()

  const IncrustedCircle = ({ publicId, alt, text, imgCls, disabled = false, onClick }) => {
    return (
      <div className={`actionMenuItem ${disabled ? 'disabled' : ''}`} onClick={onClick}>
        <CloudinaryImg
          containerClss={'cloudinaryImgWrapper'}
          publicId={publicId} 
          alt={alt} imgClss={imgCls}
        />
        {text}
      </div>
    );
  };

  const addMoneyClicked = () => {
    dispatch(SET_BALANCE(1000))
  }

  const QRCodeClicked = () => {
    dispatch(SET_BALANCE(-1000))
  }

  return (
    <nav className='actionMenu__container'>
      <section className='actionMenu'>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/addMoney'}
          alt={'add'} onClick={addMoneyClicked}
          text={'Add money'}></IncrustedCircle>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/QR'}
          alt={'QR'} onClick={QRCodeClicked}
          text={'QR code'} disabled
          imgCls={'qr'}></IncrustedCircle>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/transfer'}
          alt={'swap'} imgCls={'transfer'}
          text={'Transfer'}></IncrustedCircle>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/statistic'}
          alt={'stat'} disabled
          text={'Statistic'}></IncrustedCircle>
      </section>
    </nav>
  );
};

export default ActionMenu;
