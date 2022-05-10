import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Container, CartCardStyle } from '../styled-components/styleIndex';


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
        console.log(transaction, month)
        return (
            <CartCardStyle key={transaction.id}>
            <h1>Description: {transaction.description}</h1>
            <h5>Amount spent: ${transaction.amount}</h5>
            <button onClick={()=>{handleDeleteClick(transaction.id)}}>🗑</button>
            </CartCardStyle>
        )
    })

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      hello
      Transactions for {month}
    <Container>
      {transactionsRender}
    </Container>
    </div>
  )
}

export default BudgetTransactions
