import React from 'react'
import { CartCardStyle } from '../../styled-components/styleIndex'

function TransactionCard({onTransactionDelete, transaction:{id, description,budget_id, amount, created_at, month_desc, year}}) {

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/transactions/${id}`, {
            method: "DELETE",
        });
        
        onTransactionDelete(id)
    }

  return (
    <CartCardStyle>
    <div>
        <div>
      <h2>
          {description}
          </h2>
          <h4>{month_desc} {year}</h4>
          </div>
      <h3>
        $-{amount}
      </h3>
      <h5>
      {created_at}
      </h5>
    <br />
      <button onClick={handleDeleteClick}>🗑 </button>
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