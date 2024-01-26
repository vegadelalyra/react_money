import React from 'react';

const MyImage = ({ src, alt, imgClss, containerClss }) => {
    const handleContextMenu = event => {
        event.preventDefault();
    };

    return (
        <picture onContextMenu={handleContextMenu} className={containerClss}>
            <img
                className={imgClss}
                src={src}
                alt={alt}
                draggable='false'
            />
        </picture>
    );
};

export default MyImage;
