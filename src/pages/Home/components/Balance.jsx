import React, { useState } from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';
import eye_svg from '../assets/eye.svg';

const Balance = ({ balance, setBalance }) => {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => setVisible(!visible);

    return (
        <div className='balance'>
            <span>Balance</span>
            <div
                className='balance__symbols'
                onClick={toggleVisibility}>
                <span className='amount'>
                    {visible ? `$${balance.toFixed(2)}` : '********'}
                </span>
                <CloudinaryImg
                    publicId={'makaia-transfers-react/home/eye'}
                    containerClss={'eyeContainer'}
                    imgClss={'eye'}
                    alt='Hide balance?'
                />
            </div>
        </div>
    );
};

export default Balance;
