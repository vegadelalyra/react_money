import React, { useState } from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const Balance = ({ balance, setBalance }) => {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => setVisible(!visible);

    return (
        <main className='balance'>
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
        </main>
    );
};

export default Balance;
