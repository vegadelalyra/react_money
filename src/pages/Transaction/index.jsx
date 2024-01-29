// TransactionPage.js
import './styles.sass';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import NewPayee from './components/NewPayee';
import Contacts from './components/Contacts';
import { useSelector } from 'react-redux';
import Title from '../../components/Title';

const TransactionPage = () => {
  const { contacts } = useSelector(state => state.account);
  const [searchTerm, setSearchTerm] = useState('');
  const [sameCountry, setSameCountry] = useState(true);

  const filteredContacts = contacts
    // Filter contacts based on active category
    .filter(contact => (sameCountry ? contact.sameCountry : true))
    .filter(contact => {
      // Show all contacts when no search term
      if (!searchTerm) return true;

      return (
        // Filter contacts based on search bar value
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      // Sort by favorite status: true comes first
      if (a.favorite && !b.favorite) return -1;
      if (!a.favorite && b.favorite) return 1;

      // If favorite status is the same, sort alphabetically by name
      return a.name.localeCompare(b.name);
    });

  return (
    <div className='transaction__page'>
      <Title
        title={'Transfer to'}
      />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Categories
        sameCountry={sameCountry}
        setSameCountry={setSameCountry}
      />
      <NewPayee />
      <Contacts contacts={filteredContacts} />
    </div>
  );
};

export default TransactionPage;
