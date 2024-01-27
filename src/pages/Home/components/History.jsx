import React from 'react';

const History = ({ transactions }) => {
  return (
    <section className="history__container">
      <article className="history">
        <div>
          <h2>History</h2>
          <span>See all <em>&gt;</em></span> 
        </div>
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
      </article>
    </section>
  );
};

export default History;
