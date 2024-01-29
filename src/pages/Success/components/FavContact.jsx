import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const FavContact = ({ contact }) => {
  return (
    <aside
      className='fav_contact'
      onClick={() => onContactClicked(contact)}>
      <div className='imgArticle'>
        <img
          src={contact.photoURL}
          className='contact_photo'
        />
        <article>
          <span className={'contact_name'}>{contact.name}</span>
          <span className={'contact_email'}>{contact.email}</span>
        </article>
      </div>
      {contact.favorite ? (
        <CloudinaryImg
          containerClss={'contact_fav'}
          publicId={'makaia-transfers-react/transaction/isFav'}
        />
      ) : (
        <CloudinaryImg
          containerClss={'contact_fav'}
          publicId={'makaia-transfers-react/transaction/fav'}
        />
      )}
    </aside>
  );
};

export default FavContact;
