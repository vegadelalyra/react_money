import React from 'react'

const TransactionBody = () => {
  return (
    <form className='transacion_body__container'>
      <label htmlFor="">
        Enter amount
        <input type="text" />
      </label>
      <label htmlFor="">
        Transfer wallet
        <input type="text" disabled />
      </label>
      <label htmlFor="">
        Note (optional)
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </label>
      <button type="submit">Continue</button>
      </form>
  )
}

export default TransactionBody