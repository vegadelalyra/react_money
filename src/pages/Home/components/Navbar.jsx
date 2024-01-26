import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="active"> Home</button>
      <button disabled> Explore</button>
      <button disabled> Payments</button>
      <button disabled> Cards</button>
    </div>
  );
};

export default Navbar;
