import React from 'react'
import { CartCardStyle, HomeContainer } from '../../styled-components/styleIndex'
import format from 'date-fns/format';

function TransactionCard({onTransactionDelete, transaction:{id, description,budget_id, amount, created_at, month_desc, year}}) {

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/transactions/${id}`, {
            method: "DELETE",
        });
        
        onTransactionDelete(id)
    }

    const formattedDate = format(new Date(created_at), 'yyyy-MM-dd')
    const formattedTime = format(new Date(created_at),'pp')

  return (
    <CartCardStyle>
        <h2>{description}</h2>
            <h3>{month_desc} {year}
            <br />
            <h3 className="amount">
                $-{parseFloat(amount).toFixed(2)}
            </h3>
            </h3>
            <h5>
                {formattedDate}
                <br />
                {formattedTime}
            </h5>
            <br/>
            <button onClick={()=>{handleDeleteClick(id)}}>🗑</button>
    </CartCardStyle>
  )
}

export default TransactionCard



// t.string "description"
// t.decimal "amount"
// t.date "date_created"
// t.integer "category_id"
// t.integer "budget_id"