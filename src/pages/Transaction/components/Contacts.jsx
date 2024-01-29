import React from 'react';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const { contacts } = useSelector(state => state.account);

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
