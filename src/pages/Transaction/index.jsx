// LoginPage.js
import './styles.sass';
import React from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import NewPayee from './components/NewPayee';
import Contacts from './components/Contacts';

const LoginPage = () => {
  return (
    <div className='transaction__page'>
      <Title />
      <SearchBar />
      <Categories />
      <NewPayee />
      <Contacts />
    </div>
  );
};

export default LoginPage;
