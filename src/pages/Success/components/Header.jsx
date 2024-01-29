import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const Header = ({ onBackClicked }) => {
  return (
    <header className='success__header'>
      <div className='success__icons'>
        <CloudinaryImg
          onClick={onBackClicked}
          containerClss={'interactive_icon'}
          publicId={'makaia-transfers-react/success/back'}
        />
        <CloudinaryImg
          containerClss={'check'}
          publicId={'makaia-transfers-react/success/check'}
        />
        <CloudinaryImg
          containerClss={'interactive_icon'}
          publicId={'makaia-transfers-react/success/share'}
        />
      </div>
      <h2>Successful transaction</h2>
    </header>
  );
};

export default Header;
