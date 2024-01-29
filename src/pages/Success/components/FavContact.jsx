import React, { useState } from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const FavContact = ({ contact, toggleFavorite }) => {
  const [isFav, setIsFav] = useState(contact.isFavorite)

  const onContactClicked = contact => {
    // console.log(contact);
  };

  const isFavoriteClicked = event => {
    event.stopPropagation();
    setIsFav(!isFav)
    return toggleFavorite(!isFav)
  };

  return (
    <aside
      className='fav_contact'
      onClick={() => onContactClicked(contact)}>
      <div className='imgArticle'>
        <img
          src={contact.photoUrl}
          className='contact_photo'
        />
        <article>
          <span className={'contact_name'}>{contact.name}</span>
          <span className={'contact_email'}>{contact.email}</span>
        </article>
      </div>
      <div onClick={isFavoriteClicked}>
        {isFav ? (
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
      </div>
    </aside>
  );
};

export default FavContact;
