import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Container, ProductFeatureContainer } from '../../styled-components/styleIndex';
import { format } from 'date-fns'
import TransactionCard from './TransactionCard';

function BudgetTransactions({}) {
    const [transactionsByBudget, setTransactionsByBudget] = useState([])
    // const [loading, setLoading] = useState(true)
    
    const {id} = useParams()

    useEffect(() => {
    fetch (`http://localhost:9292/budgets/${id}/transactions`)
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

        
        
        return (
            <TransactionCard
            key={transaction.id}
            transaction={transaction}
            onTransactionDelete={onTransactionDelete}
            />
        )
    })

  return (
    <ProductFeatureContainer>
        Detailed Transactions
        <br />
        <br />
        <Container>
          {transactionsRender}
        </Container>
    </ ProductFeatureContainer>
  )
}

export default BudgetTransactions
