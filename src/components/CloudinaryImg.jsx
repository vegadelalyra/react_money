import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import cloudinaryConfig from '../../cloudinary.config';

const CloudinaryImg = ({ publicId, width, imgClss, containerClss, alt }) => {
    const handleContextMenu = event => {
        event.preventDefault();
    };

    return (
        <picture
            onContextMenu={handleContextMenu}
            className={containerClss}>
            <Image
                cloudName={cloudinaryConfig.cloudName}
                publicId={publicId}
                className={imgClss}
                alt={alt}
                draggable='false'>
                <Transformation 
                    width={width}
                    quality="auto:best"
                    fetchFormat="auto"
                    responsive
                />
            </Image>
        </picture>
    );
};

export default CloudinaryImg;
