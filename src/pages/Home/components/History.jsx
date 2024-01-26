import React from 'react';

const History = ({ transactions }) => {
  return (
    <div className="history">
      <h2>History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {/* Replace with actual transaction data and styling */}
            <span>{transaction.icon}</span>
            <span>{transaction.name}</span>
            <span>{transaction.section}</span>
            <span>{transaction.date}</span>
            <span>{transaction.change}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
