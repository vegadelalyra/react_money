import React, { useState } from 'react';
import MyImage from '../../../components/myImage';
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
                <MyImage
                    containerClss={'eyeContainer'}
                    imgClss={'eye'}
                    src={eye_svg}
                    alt='Hide balance?'
                />
            </div>
        </div>
    );
};

export default Balance;
