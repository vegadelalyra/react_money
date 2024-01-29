import React from 'react';

const Summary = ({ onBackToHomeClicked }) => {
  return (
    <>
      <article className='summary'>
        <section className='summary_data'>
          <span className='summary_line'>
            <p className='summary_key'>Amount</p>
            <p className='summary_value'>$150.00</p>
          </span>
          <span className='summary_line'>
            <p className='summary_key'>Transfer method</p>
            <p className='summary_value'>Transfer wallet</p>
          </span>
          <span className='summary_line'>
            <p className='summary_key'>Time</p>
            <p className='summary_value'>$150.00</p>
          </span>
          <span className='summary_line'>
            <p className='summary_key'>Transaction ID</p>
            <p className='summary_value'>$150.00</p>
          </span>
        </section>
        <aside className='summary_note'>
          <span>Note</span>
          <p>
            Messagecolor: #171A1F; font-family: "DM Sans"; font-size: 12px;
            font-style: normal; font-weight: 400; line-height: 20px;color:
            #171A1F; font-family: "DM Sans"; font-size: 12px; font-style:
            normal; font-weight: 400; line-height: 20px;
          </p>
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
