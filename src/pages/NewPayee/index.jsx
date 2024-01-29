import './styles.sass';
import React, { useRef, useState } from 'react';
import Title from '../../components/Title';
import CloudinaryImg from '../../components/CloudinaryImg';
import { uploadImageToCloudinary } from '../../utils/uploadToCloudinary';
import { updateAccountData } from '../../store/slices/account/accountThunks';
import { useDispatch, useSelector } from 'react-redux';
import { loginFromFireStore } from '../../services/firestoreService';
import { SET_IS_ADDING_CONTACT } from '../../store/slices/app/appSlice';
import { useNavigate } from 'react-router-dom';

const NewPayeePage = () => {
  const { isAddingContact } = useSelector(state => state.app);
  const { contacts } = useSelector(state => state.account);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let defaultProfileImg =
    'https://res.cloudinary.com/vegadelalyra/image/upload/v1706487993/makaia-transfers-react/transaction/test.png';

  const [photoUrl, setPhotoUrl] = useState(defaultProfileImg);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sameCountry, setSameCountry] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);

  // [BEGINNING] -- CODE FOR IMG INPUT
  const inputRef = useRef(null);

  const handleImageClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = async event => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = loadEvent => {
      const imgEl = document.getElementById('profileImage');

      if (imgEl) {
        imgEl.src = loadEvent.target.result;
        setPhotoUrl(imgEl.src);
      }
    };
    reader.readAsDataURL(file);
  };
  // [ENDING] -- CODE FOR IMG INPUT

  const handleSameCountryToggle = () => {
    setSameCountry(!sameCountry);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const validateEmail = inputEmail => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const validateName = inputName => {
    return inputName.length >= 6;
  };

  const handleEmailChange = event => {
    const inputValue = event.target.value;

    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };

  const handleNameChange = event => {
    const inputValue = event.target.value;

    setName(inputValue);
    setIsValidName(validateName(inputValue));
  };

  const handleAddPayee = async event => {
    event.preventDefault();

    if (!isValidEmail || !isValidName || sameCountry === undefined) return;

    dispatch(SET_IS_ADDING_CONTACT(true));

    if (photoUrl !== defaultProfileImg)
      defaultProfileImg = await uploadImageToCloudinary(photoUrl);

    setPhotoUrl(defaultProfileImg);

    const newContact = {
      photoUrl,
      email,
      name,
      isFavorite,
      sameCountry,
    };

    const updatedContacts = [newContact, ...contacts];

    await loginFromFireStore({ email, name, photoUrl });
    dispatch(updateAccountData({ contacts: updatedContacts }));

    // Implement logic to add payee to user account
    console.log('Added new payee!', {
      profileImage: photoUrl,
      email,
      name,
      sameCountry,
      isFavorite,
    });

    dispatch(SET_IS_ADDING_CONTACT(false));
    return navigate('/transaction');
  };

  return (
    <div className='newpayee__page'>
      {isAddingContact && (
        <div className='LOADING'>
          <CloudinaryImg
            containerClss={'spinner'}
            publicId={'makaia-transfers-react/payeer/spinner'}
          />
        </div>
      )}
      <Title
        title={'Add new payee'}
        backTo='/transaction'
      />

      <div className='newpayee__container'>
        <div
          className='favorite-star'
          onClick={handleFavoriteToggle}>
          {/* You need to implement the logic for displaying filled or empty star based on isFavorite state */}
          {isFavorite ? (
            <CloudinaryImg
              containerClss={'starIcon'}
              publicId={'makaia-transfers-react/transaction/isFav'}
            />
          ) : (
            <CloudinaryImg
              containerClss={'starIcon'}
              publicId={'makaia-transfers-react/transaction/fav'}
            />
          )}
        </div>
        <div className='profile-image-input'>
          <input
            type='file'
            ref={inputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <img
            className='profileImageIcon'
            onClick={handleImageClick}
            id='profileImage'
            src={defaultProfileImg}
          />
        </div>
        <form onSubmit={handleAddPayee}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='myexample@email.co'
            value={email}
            onChange={handleEmailChange}
            required
          />
          {!isValidEmail && (
            <p className='emailError'>Please enter a valid email address.</p>
          )}
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Pepito Perez'
            value={name}
            onChange={handleNameChange}
            required
          />
          {!isValidName && (
            <p className='nameError'>
              Please enter a name with at least 6 characters.
            </p>
          )}
          <div className='same-country-toggle'>
            <p>Same Country?</p>
            <div className='toggle-options'>
              <input
                className='radio_input'
                id='yes'
                name='sameCountry'
                type='radio'
                required
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

          <button className='add-payee-btn'>
            <span>Add New Payee</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPayeePage;
