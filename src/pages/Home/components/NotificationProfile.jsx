import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';
import { useSelector } from 'react-redux';

const NotificationProfile = () => {
  const user = useSelector(state => state.user);

  return (
    <header className='notificationProfile'>
      <CloudinaryImg publicId={'makaia-transfers-react/home/bell'} containerClss={'bell'} />
      <figure className='profile'>
        <img
          src={user.photoURL}
          alt='User Profile'
        />
      </figure>
    </header>
  );
};

export default NotificationProfile;
