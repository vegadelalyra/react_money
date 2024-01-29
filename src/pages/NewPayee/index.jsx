import React, { useState } from 'react';
import Title from '../../components/Title';
import './styles.sass';
import CloudinaryImg from '../../components/CloudinaryImg';

const NewPayeePage = () => {
  const [profileImage, setProfileImage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sameCountry, setSameCountry] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSameCountryToggle = () => {
    setSameCountry(!sameCountry);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddPayee = () => {
    // Implement logic to add payee to user account
    console.log('Adding new payee:', {
      profileImage,
      email,
      name,
      sameCountry,
      isFavorite,
    });
  };

  return (
    <div className='newpayee__page'>
      <Title
        title={'Add new payee'}
        pageName={'newpayee'}
        backTo='/transaction'
      />

      <div className='newpayee__container'>
        <div className='profile-image-input'>
          {/* Rounded circle-shaped input for profile image */}
          {/* You need to implement the logic for handling profile image */}
          <CloudinaryImg
            containerClss={'profileImageIcon'}
            publicId={'makaia-transfers-react/transaction/test'}
          />
        </div>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div className='same-country-toggle'>
          <label>Same Country?</label>
          <div
            className='toggle-btn'
            onClick={handleSameCountryToggle}>
            {sameCountry ? 'Yes' : 'No'}
          </div>
        </div>
        <div
          className='favorite-star'
          onClick={handleFavoriteToggle}>
          {/* You need to implement the logic for displaying filled or empty star based on isFavorite state */}
          <CloudinaryImg
            containerClss={'starIcon'}
            publicId={'makaia-transfers-react/transaction/fav'}
          />
        </div>
        <button
          className='add-payee-btn'
          onClick={handleAddPayee}>
          Add New Payee
        </button>
      </div>
    </div>
  );
};

export default NewPayeePage;
