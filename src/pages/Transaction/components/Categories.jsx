import React from 'react';

const Categories = ({ sameCountry, setSameCountry }) => {
  return (
    <nav className='contacts_categories'>
      <div
        className={`${sameCountry === true ? 'active' : ''}`}
        onClick={() => setSameCountry(true)}>
        Same country
      </div>
      <div
        className={`${sameCountry === true ? '' : 'active'}`}
        onClick={() => setSameCountry(false)}>
        International
      </div>
    </nav>
  );
};

export default Categories;
