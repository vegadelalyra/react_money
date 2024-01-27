import React, { useState } from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const Balance = ({ balance, setBalance }) => {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => setVisible(!visible);

    const formatedBalance = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(balance)

    return (
        <main className='balance'>
            <span>Balance</span>
            <div
                className='balance__symbols'
                onClick={toggleVisibility}>
                <span className='amount'>
                    {visible ? `${formatedBalance}` : '********'}
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
