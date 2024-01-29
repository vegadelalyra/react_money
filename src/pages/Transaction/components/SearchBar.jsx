import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const SearchBar = () => {
  return (
    <form className='transaction_searchBar'>
      <CloudinaryImg
        containerClss={'searchIcon'}
        publicId={'makaia-transfers-react/transaction/search'}
      />
      <input placeholder='Search' />
    </form>
  );
};

export default SearchBar;
