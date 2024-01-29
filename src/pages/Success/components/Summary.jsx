import React from 'react';

const Summary = ({ onBackToHomeClicked, transaction }) => {
  return (
    <>
      <article className='summary'>
        <section className='summary_data'>
          <span className='summary_line'>
            <p className='summary_key'>Amount</p>
            <p className='summary_value'>${transaction.amount}.00</p>
          </span>
          <span className='summary_line'>
            <p className='summary_key'>Transfer method</p>
            <p className='summary_value'>Transfer wallet</p>
          </span>
          <span className='summary_line'>
            <p className='summary_key'>Time</p>
            <p className='summary_value'>{transaction.time}</p>
          </span>
          <span className='summary_line'>
            <p className='summary_key'>Transaction ID</p>
            <p className='summary_value'>{transaction.id}</p>
          </span>
        </section>
        <aside className='summary_note'>
          <span>Note</span>
          <p>{transaction.note}</p>
        </aside>
      </article>
      <footer className='summary_footer'>
        <button onClick={onBackToHomeClicked}>
          <span>Back to home</span>
        </button>
      </footer>
    </>
  );
};

export default Summary;
