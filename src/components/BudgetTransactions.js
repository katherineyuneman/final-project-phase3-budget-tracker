import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Container, CartCardStyle, HomeContainer, ProductFeatureContainer } from '../styled-components/styleIndex';
import { format } from 'date-fns'

function BudgetTransactions({}) {
    const [transactionsByBudget, setTransactionsByBudget] = useState([])
    // const [loading, setLoading] = useState(true)
    
    const {id, month} = useParams()

    useEffect(() => {
    fetch (`http://localhost:9292/budgets/${id}/${month}/transactions`)
    .then(response => response.json())
    .then(data => setTransactionsByBudget(data))
    .catch(err => alert(err))
    },[])

    const handleDeleteClick = (tid) => {
        onTransactionDelete(tid)

        fetch(`http://localhost:9292/transactions/${tid}`, {
            method: "DELETE",
        });
    }

    const onTransactionDelete = (tid) => {
        const updatedTransactionsByBudget = transactionsByBudget.filter((transaction) => transaction.id !== tid);
        setTransactionsByBudget(updatedTransactionsByBudget);
    }
    

    const transactionsRender = transactionsByBudget.map((transaction)=>{
        const formattedDate = format(new Date(transaction.created_at), 'yyyy-MM-dd')
        const formattedTime = format(new Date(transaction.created_at),'pp')

        console.log(transaction, month)
        return (
            <CartCardStyle key={transaction.id}>
            <h2>{transaction.description}</h2>
            <h3>{transaction.month_desc} {transaction.year}</h3>
            <h2 className="amount">
                 $-{parseFloat(transaction.amount).toFixed(2)}
            </h2>
            <h5>
                {formattedDate}
                <br />
                {formattedTime}
            </h5>
            <h3>{transaction.category_description}</h3>
            <br/>
            <button onClick={()=>{handleDeleteClick(transaction.id)}}>🗑</button>
            </CartCardStyle>
        )
    })

  return (
    <ProductFeatureContainer>
      Detailed Transactions for {month}
      <br />
      <br />
      <Container>
          {transactionsRender}
    </Container>
    </ ProductFeatureContainer>
   
  )
}

export default BudgetTransactions
