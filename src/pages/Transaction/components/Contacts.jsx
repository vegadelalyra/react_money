import React from 'react';

const Contacts = ({ contacts }) => {
  return (
    <main className='contacts_container'>
      <h4>Contact list</h4>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <img src={contact.photoURL} />
            <article>
              <span className={'contact_name'}>{contact.name}</span>
              <span className={'contact_email'}>{contact.email}</span>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Contacts;
