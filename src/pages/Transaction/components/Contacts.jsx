import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const Contacts = ({ contacts }) => {
  return (
    <main className='contacts_container'>
      <h4>Contact list</h4>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <div className='imgArticle'>
              <img src={contact.photoURL} className='contact_photo' />
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
              ''
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Contacts;
