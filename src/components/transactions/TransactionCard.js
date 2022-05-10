import React from 'react'
import { CartCardStyle } from '../../styled-components/styleIndex'

function TransactionCard({onTransactionDelete, transaction:{id, description, amount,budget: {month}}}) {
    console.log(description,amount,month)

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/transactions/${id}`, {
            method: "DELETE",
        });
        
        onTransactionDelete(id)
    }

  return (
    <CartCardStyle>
    <div>
      <h1>{description}</h1>
      <h5>${amount}</h5>
      <button onClick={handleDeleteClick}>🗑</button>
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