import React, { useEffect } from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

import { useDispatch, useSelector } from 'react-redux';
import { logoutAsync } from '../../../store/slices/user/userThunks';

const NotificationProfile = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const disconnect = event => {
    event.preventDefault();

    try {
      dispatch(logoutAsync());
    } catch (error) {
      console.error('Error logging out from Google:', error.message);
    }
  };

  useEffect(() => {
    console.log('user.photoURL updated:', user.photoURL)
  }, [user.photoURL])

  return (
    <header className={'notificationProfile'}>
      <CloudinaryImg
        publicId={'makaia-transfers-react/home/bell'}
        containerClss={'bell'}
      />
      <figure
        className={'profile'}
        onDoubleClick={disconnect}
        onContextMenu={disconnect}>
        <img
          src={user.photoURL}
          alt={'User Profile'}
        />{' '}
      </figure>
    </header>
  );
};

export default NotificationProfile;
