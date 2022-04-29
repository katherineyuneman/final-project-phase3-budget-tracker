import React from 'react'
import { CartCardStyle } from '../../styled-components/styleIndex'

function TransactionCard({transaction:{description, amount,budget: {month}}}) {
    console.log(description,amount,month)
  return (
    <CartCardStyle>
    <div>
      <h1>{description}</h1>
      <h5>${amount}</h5>
      <p></p>
    </div>
    </CartCardStyle>
  )
}

export default TransactionCard



// t.string "description"
// t.decimal "amount"
// t.date "date_created"
// t.integer "category_id"
// t.integer "budget_id"