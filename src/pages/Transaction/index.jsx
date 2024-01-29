// TransactionPage.js
import './styles.sass';
import React, { useState } from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import NewPayee from './components/NewPayee';
import Contacts from './components/Contacts';
import { useSelector } from 'react-redux';

const TransactionPage = () => {
  const { contacts } = useSelector(state => state.account);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact => {
    if (!searchTerm) return contacts;

    return contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='transaction__page'>
      <Title />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Categories />
      <NewPayee />
      <Contacts contacts={filteredContacts} />
    </div>
  );
};

export default TransactionPage;
