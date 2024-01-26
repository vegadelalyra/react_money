import React, { useState } from 'react';

const Banner = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () =>
        setCurrentIndex((currentIndex + 1) % images.length);
    const handlePrevImage = () =>
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);

    const activeDot = { backgroundColor: 'blue' };
    const inactiveDot = { backgroundColor: 'gray' };

    return (
        <section className='image-slider'>
            <img
                src={images[currentIndex]}
                alt=''
            />
            <div className='indicator'>
                {images.map((_, index) => (
                    <span
                        key={index}
                        style={currentIndex === index ? activeDot : inactiveDot}
                    />
                ))}
            </div>
            <div className='navigation'>
                <button onClick={handlePrevImage}>⬅️</button>
                <button onClick={handleNextImage}>➡️</button>
            </div>
        </section>
    );
};

export default Banner;
