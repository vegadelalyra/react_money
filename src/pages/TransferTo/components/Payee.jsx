import React from 'react';

const Payee = ({ contact }) => {
  return (
    <main className='payee__container'>
      <figure>
        <img
          src={contact.photoUrl}
          alt='Profile picture!'
        />
        <figcaption>{contact.name}</figcaption>
        <p>{contact.email}</p>
      </figure>
    </main>
  );
};

export default Payee;
