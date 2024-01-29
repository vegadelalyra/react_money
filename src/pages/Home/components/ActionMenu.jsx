// ActionMenu.js
import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccountData } from '../../../store/slices/account/accountThunks';
import { generateTransaction } from '../../../utils/transactionHelper';

const ActionMenu = ({ onTransferClicked }) => {
  const dispatch = useDispatch();
  const { balance, transactions } = useSelector(state => state.account);

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
    const generatedTransaction = generateTransaction('Add money', 1000);
    const newTransactions = [generatedTransaction, ...transactions];
    dispatch(
      updateAccountData({ balance: newBalance, transactions: newTransactions })
    );
  };

  const QRCodeClicked = () => {
    const newBalance = balance - 1000;
    const generatedTransaction = generateTransaction('QR code', -1000);
    const newTransactions = [generatedTransaction, ...transactions];
    dispatch(
      updateAccountData({ balance: newBalance, transactions: newTransactions })
    );
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
          onClick={onTransferClicked}
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
