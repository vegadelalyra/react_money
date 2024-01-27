import React, { useState } from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'makaia-transfers-react/home/swap01',
    'makaia-transfers-react/home/swap01',
    'makaia-transfers-react/home/swap01',
  ];

  const handleDiscoverClick = () => {
    const urlToDiscoverNow = 'https://github.com/vegadelalyra'

    window.open(urlToDiscoverNow, '_blank')
  }
  
  return (
    <aside className='banner__container'>
      <section className='banner'>
        <CloudinaryImg
          publicId={images[currentIndex]}
          alt='Join to the loyalty!'
          containerClss={'bannerSVG'}
        />
        <div>
          <span className='description' >
            Unleash exclusive rewards & benefits
          </span>
          <span className='aButton' onClick={handleDiscoverClick}>Discover now</span>
        </div>
      </section>
      <div className='indicator'>
        {images.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? 'dot--active' : 'dot'}
          />
        ))}
      </div>
    </aside>
  );
};

export default Banner;
