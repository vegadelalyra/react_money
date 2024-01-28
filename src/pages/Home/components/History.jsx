import React from 'react';
import CloudinaryImg from '../../../components/CloudinaryImg';

const History = ({ transactions }) => {
  const transfer = 'makaia-transfers-react/home/';
  const positiveTransfer = transfer + '%2Btransfer';
  const negativeTransfer = transfer + '-transfer';

  const transactionIcon = transaction =>
    transaction.change > 0 ? positiveTransfer : negativeTransfer;

  const Formater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const transactionChange = transaction => {
    const symbol = transaction.change > 0 ? '+' : '-';
    return symbol + Formater.format(transaction.change);
  };

  return (
    <section className='history__container'>
      <article className='history'>
        <div className='history__title'>
          <h2>History</h2>
          <span>
            See all <em>&gt;</em>
          </span>
        </div>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              {/* Replace with actual transaction data and styling */}
              <span>
                {' '}
                <CloudinaryImg publicId={transactionIcon(transaction)} />{' '}
              </span>
              <div className='info'>
                <span className='name'>{transaction.name}</span>
                <div className='details'>
                  <span>{transaction.section} • </span>
                  <span>{transaction.date}</span>
                </div>
              </div>
              <span
                className={`change ${
                  transaction.change > 0 ? 'positiveChange' : 'negativeChange'
                }`}>
                {transactionChange(transaction)}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default History;
