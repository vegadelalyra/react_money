import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import cloudinaryConfig from '../../cloudinary.config';

const CloudinaryImg = ({ publicId, width, imgClss, containerClss, alt, figcaption = '', imgId, onClick }) => {
    const handleContextMenu = event => {
        event.preventDefault();
    };

    return (
        <picture
            onClick={onClick}
            onContextMenu={handleContextMenu}
            className={containerClss}>
            <Image
                cloudName={cloudinaryConfig.cloudName}
                publicId={publicId}
                className={imgClss}
                alt={alt} id={imgId}
                draggable='false'>
                <Transformation 
                    width={width}
                    quality="auto:best"
                    fetchFormat="auto"
                    responsive
                />
            </Image>
            {figcaption && <figcaption>{figcaption}</figcaption>}
        </picture>
    );
};

export default CloudinaryImg;
