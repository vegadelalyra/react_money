import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const Navbar = ({ imgCls = 'navSVG' }) => {
  return (
    <footer>
      <nav className='navbar'>
          <CloudinaryImg imgClss={imgCls}
            figcaption='Home' containerClss={'navbar-item active'}
            publicId={'makaia-transfers-react/home/home'}
          />
          <CloudinaryImg imgClss={imgCls} imgId={'exploreImg'}
            figcaption='Explore' containerClss={'navbar-item'}
            publicId={'makaia-transfers-react/home/explore'}
          />
          <CloudinaryImg imgClss={imgCls} imgId={'paymentsImg'}
            figcaption='Payments' containerClss={'navbar-item'}
            publicId={'makaia-transfers-react/home/payments'}
          />
          <CloudinaryImg imgClss={imgCls}
            figcaption='Cards' containerClss={'navbar-item'}
            publicId={'makaia-transfers-react/home/cards'}
          />
      </nav>
    </footer>
  );
};

export default Navbar;
