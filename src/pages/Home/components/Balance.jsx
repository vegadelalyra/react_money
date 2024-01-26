import React, { useState } from 'react';

const Balance = ({ balance, setBalance }) => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="balance">
      <span>Balance:</span>
      <span className="amount">{visible ? `$${balance.toFixed(2)}` : '********'}</span>
      {visible && <span className="eye-icon" onClick={toggleVisibility}></span>}
    </div>
  );
};

export default Balance;
