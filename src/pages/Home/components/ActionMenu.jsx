// ActionMenu.js
import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccountData } from '../../../store/slices/account/accountThunks';

const ActionMenu = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.account.balance);

  const IncrustedCircle = ({
    publicId,
    alt,
    text,
    imgCls,
    disabled = false,
    onClick,
  }) => {
    return (
      <div
        className={`actionMenuItem ${disabled ? 'disabled' : ''}`}
        onClick={onClick}>
        <CloudinaryImg
          containerClss={'cloudinaryImgWrapper'}
          publicId={publicId}
          alt={alt}
          imgClss={imgCls}
        />
        {text}
      </div>
    );
  };

  const addMoneyClicked = () => {
    const newBalance = 1000 + balance;
    dispatch(updateAccountData({ balance: newBalance }));
  };

  const QRCodeClicked = () => {
    const newBalance = balance - 1000;
    dispatch(updateAccountData({ balance: newBalance }));
  };

  return (
    <nav className='actionMenu__container'>
      <section className='actionMenu'>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/addMoney'}
          alt={'add'}
          onClick={addMoneyClicked}
          text={'Add money'}></IncrustedCircle>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/QR'}
          alt={'QR'}
          onClick={QRCodeClicked}
          text={'QR code'}
          imgCls={'qr'}></IncrustedCircle>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/transfer'}
          alt={'swap'}
          imgCls={'transfer'}
          text={'Transfer'}></IncrustedCircle>
        <IncrustedCircle
          publicId={'makaia-transfers-react/home/statistic'}
          alt={'stat'}
          disabled
          text={'Statistic'}></IncrustedCircle>
      </section>
    </nav>
  );
};

export default ActionMenu;
