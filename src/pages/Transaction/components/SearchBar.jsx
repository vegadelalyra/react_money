import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className='transaction_searchBar'>
      <CloudinaryImg
        containerClss={'searchIcon'}
        publicId={'makaia-transfers-react/transaction/search'}
      />
      <input
        placeholder='Search'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
