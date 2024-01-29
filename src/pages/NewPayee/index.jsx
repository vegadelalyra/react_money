import React, { useState } from 'react';
import Title from '../../components/Title';
import CloudinaryImg from '../../components/CloudinaryImg';
import './styles.sass';

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

  const handleAddPayee = event => {
    event.preventDefault()
    
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
        backTo='/transaction'
      />

      <div className='newpayee__container'>
        <div
          className='favorite-star'
          onClick={handleFavoriteToggle}>
          {/* You need to implement the logic for displaying filled or empty star based on isFavorite state */}
          <CloudinaryImg
            containerClss={'starIcon'}
            publicId={'makaia-transfers-react/transaction/fav'}
          />
        </div>
        <div className='profile-image-input'>
          <CloudinaryImg
            imgClss={'profileImageIcon'}
            publicId={'makaia-transfers-react/transaction/test'}
          />
        </div>
        <form>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='myexample@email.co'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Pepito Perez'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <div className='same-country-toggle'>
            <p>Same Country?</p>
            <div className='toggle-options'>
              <input
                className='radio_input'
                id='yes'
                name='sameCountry'
                type='radio'
                onChange={() => handleSameCountryToggle('yes')}
              />
              <label
                htmlFor='yes'
                className='radio_label'>
                Yes
              </label>
              <input
                className='radio_input'
                type='radio'
                id='no'
                name='sameCountry'
                value='no'
                onChange={() => handleSameCountryToggle('no')}
              />
              <label
                htmlFor='no'
                className='radio_label'>
                No{' '}
              </label>
            </div>
          </div>

          <button
            className='add-payee-btn'
            onClick={handleAddPayee}>
            <span>Add New Payee</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPayeePage;
